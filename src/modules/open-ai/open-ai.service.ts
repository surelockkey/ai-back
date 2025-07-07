import { Injectable } from '@nestjs/common';
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
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/index';

@Injectable()
export class OpenAiService {
  private readonly openai: OpenAI;

  constructor(
    private readonly configService: ConfigService,
    private readonly systemSettingsService: SystemSettingsService,
    @InjectDataSource() private readonly dataSource: DataSource,
  ) {
    this.openai = new OpenAI({
      apiKey: this.configService.get<string>('app.open_ai_key'),
    });
  }

  public async listModels() {
    const models_response = await this.openai.models.list();
    console.log(models_response.data);
    return models_response.data;
  }

  public async sendMessage(
    user_prompt: string,
    message_context?: Message[],
  ): Promise<OpenAiMessageResponse> {
    const previous_messages: ChatCompletionMessageParam[] = [];

    if (message_context) {
      message_context.forEach((message) => {
        previous_messages.push({
          role: 'user',
          content: message.prompt,
        });
        previous_messages.push({
          role: 'assistant',
          content: message.text,
        });
      });
    }

    const completion = await this.openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        ...previous_messages,
        {
          role: 'user',
          content: user_prompt,
        },
      ],
      temperature: 0,
    });

    return {
      id: completion.id,
      created: completion.created,
      text: completion.choices[0].message.content?.replace('\n\n', '') || '',
      total_tokens: completion.usage?.total_tokens || 0,
      finish_reason: completion.choices[0].finish_reason,
    };
  }

  public async uploadFileToOpenAi(
    file_name: string,
  ): Promise<OpenAI.Files.FileObject> {
    const file_stream = fs.createReadStream(
      __dirname + `/../../../public/${file_name}.jsonl`,
    );

    const uploaded_file = await this.openai.files.create({
      file: file_stream,
      purpose: 'fine-tune',
    });

    return uploaded_file;
  }

  public async getAllFiles(): Promise<OpenAI.Files.FileObject[]> {
    const files_response = await this.openai.files.list();
    return files_response.data;
  }

  public async createFineTune(training_file_id: string, base_model: string) {
    const fine_tune_job = await this.openai.fineTuning.jobs.create({
      training_file: training_file_id,
      model: base_model,
    });

    return fine_tune_job;
  }

  public async getFullFineTune(fine_tune_job_id: string) {
    return await this.openai.fineTuning.jobs.retrieve(fine_tune_job_id);
  }

  public async getFullLastFineTune(fine_tune_job_id: string) {
    const fine_tune_job = await this.getFullFineTune(fine_tune_job_id);
    const system_settings =
      await this.systemSettingsService.getSystemSettings();

    console.log(fine_tune_job);

    if (
      fine_tune_job.status === 'succeeded' &&
      fine_tune_job.fine_tuned_model !== system_settings.active_model
    ) {
      await this.systemSettingsService.updateByCriteriaAndReturnOne(
        {},
        { active_model: fine_tune_job.fine_tuned_model },
      );
    }

    return fine_tune_job;
  }

  public async listFineTunes() {
    const fine_tune_jobs = await this.openai.fineTuning.jobs.list();
    console.log(fine_tune_jobs.data.map((job) => job));

    if (fine_tune_jobs.data.length > 0) {
      const latest_job = fine_tune_jobs.data[fine_tune_jobs.data.length - 1];
      const job_events = await this.openai.fineTuning.jobs.listEvents(
        latest_job.id,
      );
      console.log(job_events.data);
    }

    return fine_tune_jobs.data;
  }

  public async speechToText(
    audio_file: File,
  ): Promise<OpenAI.Audio.Transcription> {
    const transcription = await this.openai.audio.transcriptions.create({
      file: audio_file,
      model: 'whisper-1',
      response_format: 'json',
      temperature: 0.85,
      language: 'en',
    });

    return transcription;
  }

  public async sendSqlMessage(user_message: string) {
    try {
      let query_generation_attempts = 0;
      let database_data: any;
      let executed_query: any;

      while (query_generation_attempts < 3 && !database_data) {
        await this.generateSqlQuery(user_message).then((query_result) => {
          if (query_result) {
            database_data = query_result.data;
            executed_query = query_result.query;
          }
        });

        query_generation_attempts++;
        console.log(query_generation_attempts, database_data);
      }

      if (!database_data) {
        throw new GraphQLError('Nothing found');
      }

      const final_completion = await this.openai.chat.completions
        .create({
          model: 'gpt-4',
          messages: [
            {
              role: 'user',
              content: `
            Act as a assistant of locksmith company.
            Given the following user question and the related search results, respond to the user using only the results as context.
            question: ${user_message} - Search Results: ${JSON.stringify(
                database_data,
              )}
          `,
            },
          ],
        })
        .catch((error) => {
          console.log(error.response?.data);
          throw error.response?.data || error;
        });

      return {
        id: final_completion.id,
        created: final_completion.created,
        text:
          final_completion.choices[0].message.content?.replace('\n\n', '') ||
          '',
        total_tokens: final_completion.usage?.total_tokens || 0,
        finish_reason: final_completion.choices[0].finish_reason,
        database_result: JSON.stringify(database_data),
        database_query: executed_query,
      };
    } catch (error) {
      console.log(111, error);
      return {
        id: '',
        created: moment().unix(),
        text: error.error
          ? error.error.message
          : `Please try to change your question, I can't find any information based on this question`,
        total_tokens: 0,
        finish_reason: 'error',
      };
    }
  }

  private async generateSqlQuery(user_message: string) {
    return await this.openai.chat.completions
      .create({
        model: 'gpt-4-1106-preview',
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
          tax_precent            | double precision
          is_lead                | boolean
          scheduled_start        | character varying ( It's date in format:  YYYY-MM-DD HH24:MM:SS )
          created_timestamp      | character varying
          created_date           | character varying ( It's date in format:  YYYY-MM-DD HH24:MM:SS )
          job_end_date           | character varying ( It's date in format:  YYYY-MM-DD HH24:MM:SS )
          job_amount_due_date    | character varying ( It's date in format:  YYYY/MM/DD )
          sub_status             | character varying
          status_updated         | character varying ( It's date in format:  YYYY-MM-DD HH24:MM:SS )
          use_tech_special_rate  | character varying
          tech_special_rate      | character varying
          taxable_amount         | double precision
          tax_on_off             | boolean
          job_total_price        | double precision
          job_amount_due         | double precision
          items_total            | double precision
          has_calls              | boolean
          primary_phone          | character varying ( It is a phone number )
          secondary_phone        | character varying ( It is a phone number )
          email_address          | character varying
          client_company_name    | character varying
          zipcode                | character varying
          full_address           | character varying
          invoice_sent           | boolean
          user_created           | character varying
          client_first_name      | character varying
          client_last_name       | character varying
          tech_name              | character varying
          tech_phone_numbers     | text[]            ( Array of phone numbers )
          dispatch_bonus_type    | character varying
          job_sub_total          | double precision
          created_utc            | character varying ( It's date in format:  YYYY-MM-DD HH24:MM:SS )
          invoice_created_utc    | character varying ( It's date in format:  YYYY-MM-DD HH24:MM:SS )
          tags                   | character varying
          paid_total             | double precision
          tip_amount             | double precision
          tax_amount             | double precision
          client_id              | character varying
          uuid                   | character varying
          dispatch_bonus_number  | character varying
          job_type               | character varying
          total_sales            | double precision
          cash                   | double precision
          credit                 | double precision
          billing                | double precision
          "check"                | double precision
          tech_share             | character varying
          tech_parts             | double precision
          company_parts          | double precision
          tech_profit            | double precision
          company_profit         | double precision
          tax                    | double precision
          tech_notes              | character varying
          account                | character varying ( Acceptable values: main, arizona)


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
        
        ### Please create a PostgresSQL query without any comments which will get all related for this question: ${user_message}.`,
          },
        ],
      })
      .then(async (completion_response) => {
        const query_text = completion_response.choices[0].message.content;
        const cleaned_query =
          query_text
            ?.replace('```sql', '')
            .replace(new RegExp('```', 'g'), '') || '';

        return {
          data: await this.dataSource.query(cleaned_query),
          query: cleaned_query,
        };
      })
      .catch((error) => {
        console.log(error.response);
        return null;
      });
  }
}
