import { Injectable } from '@nestjs/common';
import {
  ChatCompletionRequestMessage,
  Configuration,
  OpenAIApi,
  OpenAIFile,
} from 'openai';
import * as fs from 'fs';
import axios from 'axios';
import * as FormData from 'form-data';
import { OpenAiMessageResponse } from './dto/message-response.dto';
import { ConfigService } from '@nestjs/config';
import { SystemSettingsService } from 'src/modules/system-settings/system-settings.service';
import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import * as moment from 'moment';
import { Message } from '../chat/entity/message.entity';
import { GraphQLError } from 'graphql';

// import * as ax from 'axios';

@Injectable()
export class OpenAiService {
  private readonly configuration: Configuration;
  private readonly openai: OpenAIApi;

  constructor(
    private readonly configService: ConfigService,
    private readonly systemSettingsService: SystemSettingsService,
    @InjectDataSource() private readonly dataSource: DataSource,
  ) {
    this.configuration = new Configuration({
      apiKey: this.configService.get<string>('app.open_ai_key'),
    });
    this.openai = new OpenAIApi(this.configuration);
  }

  public async listModel() {
    const res = await this.openai.listModels();

    console.log(res.data);

    return res.data;
  }

  public async sendMessage(
    prompt: string,
    context?: Message[],
  ): Promise<OpenAiMessageResponse> {
    const prev_messages: ChatCompletionRequestMessage[] = [];

    context.forEach((message) => {
      prev_messages.push({
        role: 'user',
        content: message.prompt,
      });
      prev_messages.push({
        role: 'assistant',
        content: message.text,
      });
    });

    const res = await this.openai.createChatCompletion({
      model: 'gpt-5',
      messages: [
        ...prev_messages,
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0,
    });

    return {
      id: res.data.id,
      created: res.data.created,
      text: res.data.choices[0].message.content.replace('\n\n', ''),
      total_tokens: res.data.usage.total_tokens,
      finish_reason: res.data.choices[0].finish_reason,
    };
  }

  public async uploadFileToOpenAi(filename: string): Promise<OpenAIFile> {
    const data = new FormData();

    data.append('purpose', 'fine-tune');
    data.append(
      'file',
      fs.createReadStream(__dirname + `/../../../pubic/${filename}.jsonl`),
    );

    const res = await axios({
      method: 'post',
      url: 'https://api.openai.com/v1/files',
      headers: {
        Authorization: 'Bearer ' + process.env.OPEN_AI_API_KEY,
        ...data.getHeaders(),
      },
      data: data,
    });

    return res.data;
  }

  public async getAllFiles() {
    return (await this.openai.listFiles()).data.data;
  }

  public async createTune(file_id: string, model: string) {
    const res = await this.openai.createFineTune({
      training_file: file_id,
      model: model,
    });

    return res.data;
  }

  public async getFullFineTune(fine_tune_id: string) {
    return (await this.openai.retrieveFineTune(fine_tune_id)).data;
  }

  public async getFullLastFineTune(fine_tune_id: string) {
    const fine_tune = await this.getFullFineTune(fine_tune_id);
    const system_settings =
      await this.systemSettingsService.getSystemSettings();

    console.log(fine_tune);

    if (
      fine_tune.status === 'succeeded' &&
      fine_tune.fine_tuned_model !== system_settings.active_model
    ) {
      await this.systemSettingsService.updateByCriteriaAndReturnOne(
        {},
        { active_model: fine_tune.fine_tuned_model },
      );
    }

    return fine_tune;
  }

  public async listFineTunes() {
    const res = await this.openai.listFineTunes();
    console.log(res.data.data.map((item) => item));

    const events = await this.openai.listFineTuneEvents(
      res.data.data[res.data.data.length - 1].id,
    );

    console.log(events.data);
  }

  public async speechToText(audio_url: File): Promise<any> {
    return await this.openai.createTranscription(
      audio_url,
      'whisper-1',
      undefined,
      'json',
      0,
      'en',
    );
  }

  public async sendSqlMessage(message: string) {
    try {
      let number_of_generated_queries = 0;
      let data: any;

      while (number_of_generated_queries < 3 && !data) {
        await this.generateSqlQuery(message).then((res) => {
          data = res;
        });

        number_of_generated_queries++;
        console.log(number_of_generated_queries, data);
      }

      if (!data) {
        throw new GraphQLError('Nothing found');
      }

      const final_res = await this.openai
        .createChatCompletion({
          model: 'gpt-4',
          messages: [
            {
              role: 'user',
              content: `
            Act as a assistant of locksmith company.
            Given the following user question and the related search results, respond to the user using only the results as context.
            question: ${message} - Search Results: ${JSON.stringify(data)}
          `,
            },
          ],
        })
        .catch((e) => {
          console.log(e.response.data);
          throw e.response.data;
        });

      return {
        id: final_res.data.id,
        created: final_res.data.created,
        text: final_res.data.choices[0].message.content.replace('\n\n', ''),
        total_tokens: final_res.data.usage.total_tokens,
        finish_reason: final_res.data.choices[0].finish_reason,
        database_result: JSON.stringify(data),
      };
    } catch (e) {
      console.log(111, e);
      return {
        id: '',
        created: moment().unix(),
        text: e.error
          ? e.error.message
          : `Please try to change your question, I can't find any information based on this question`,
        total_tokens: 0,
        finish_reason: 'error',
      };
    }
  }

  private async generateSqlQuery(message: string) {
    return await this.openai
      .createChatCompletion({
        model: 'gpt-4',
        messages: [
          {
            role: 'user',
            content: `
        ### Postgres SQL tables, with their properties:
        Table 'job'
         Column         |       Type        | Collation | Nullable |              Default
         ------------------------+-------------------+-----------+----------+-----------------------------------
          status                 | character varying ( Acceptable values: Submitted, Canceled, In progress, Pending, done pending approval, new, Done )
          address                | character varying
          city                   | character varying
          state                  | character varying
          job_source             | character varying
          tax_precent            | character varying ( It's number in character varying )
          is_lead                | character varying ( Acceptable values: '1', '0' )
          scheduled_start        | timestamp without time zone
          created_timestamp      | character varying
          created                | timestamp without time zone
          job_date_formatted     | character varying
          job_hour               | character varying
          job_min                | character varying
          job_ampm               | character varying ( Acceptable values: 'AM', 'PM' )
          job_end_date           | timestamp without time zone
          job_amount_due_date    | character varying
          job_date_end_formatted | character varying
          job_hour_end           | character varying
          job_minute_end         | character varying
          job_ampm_end           | character varying ( Acceptable values: 'AM', 'PM' )
          sub_name               | character varying
          status_updated         | timestamp without time zone
          use_tech_special_rate  | character varying
          tech_special_rate      | character varying
          taxable_amount         | character varying ( It's number in character varying )
          tax_on_off             | character varying
          job_total_price        | character varying ( It's number in character varying )
          job_amount_due         | character varying ( It's number in character varying )
          sub_total              | character varying ( It's number in character varying )
          client_confirmed       | character varying
          leadLost               | character varying ( Acceptable values: '1', '0' )
          has_calls              | character varying ( Acceptable values: '1', '0' )
          primary_phone          | character varying ( It is a phone number )
          secondary_phone        | character varying ( It is a phone number )
          email_address          | character varying
          company_parts          | character varying ( It's number in character varying )
          parts                  | character varying ( It's number in character varying )
          client_company_name    | character varying
          invoice_number         | character varying
          zipcode                | character varying
          location_ob            | character varying
          location_pb            | character varying
          location_key           | character varying
          invoice_created        | character varying
          invoice_sent           | character varying
          user_created           | character varying
          client_first_name      | character varying
          client_last_name       | character varying
          tech_names             | character varying
          tech_phone_numbers     | text[]            ( Array of phone numbers)
          dispatch_bonus_type    | character varying
          job_sub_total          | character varying ( It's number in character varying )
          created_utc            | character varying
          invoice_created_utc    | character varying
          tags                   | character varying
          paid_total             | character varying ( It's number in character varying )
          tip_amount             | character varying ( It's number in character varying )
          tax_amount             | character varying ( It's number in character varying )
          client_id              | character varying
          uuid                   | character varying
          dispatch_bonus_number  | character varying
          job_type               | character varying


        Table 'call'

        column_name    |        data_type          
        ---------------+-----------------------------
         created       | timestamp without time zone
         "timeInt"     | integer
         "phoneNumber" | character varying
         from          | character varying ( It is a phone number )
         to            | character varying ( It is a phone number )
         recording_url | character varying
         from_zip      | character varying
         to_zip        | character varying
         call_duration | character varying ( Acceptable format: hh:mm:ss )
         call_status   | character varying ( Acceptable values: canceled, busy, ringing, failed, in-progress, initiated, completed, no-answer )
         direction     | character varying ( Acceptable values: inbound, outgoing )
         job_id        | character varying ( Foreign key to table job )
         is_active     | character varying ( Acceptable values: '1', '0' )
         client_id     | character varying
         ad_group_id   | character varying
         call_id       | character varying
         call_sid      | character varying
         account       | character varying ( Acceptable values: main, arizona)
        
        ### Please create a PostgresSQL query without any comments which will get all related for this question: ${message}.`,
          },
        ],
      })
      .then(async (r) => {
        return await this.dataSource.query(r.data.choices[0].message.content);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }
}
