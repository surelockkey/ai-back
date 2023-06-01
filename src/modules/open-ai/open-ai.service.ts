import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi, OpenAIFile } from 'openai';
import * as fs from 'fs';
import axios from 'axios';
import * as FormData from 'form-data';
import { OpenAiMessageResponse } from './dto/message-response.dto';
import { ConfigService } from '@nestjs/config';
import { SystemSettingsService } from 'src/modules/system-settings/system-settings.service';
import { GoogleAdsApi } from 'google-ads-api';
import { DataSource } from 'typeorm';

// import * as ax from 'axios';

@Injectable()
export class OpenAiService {
  private readonly configuration: Configuration;
  private readonly openai: OpenAIApi;

  constructor(
    private readonly configService: ConfigService,
    private readonly systemSettingsService: SystemSettingsService,
    private readonly dataSource: DataSource,
  ) {
    this.configuration = new Configuration({
      apiKey: this.configService.get<string>('app.open_ai_key'),
    });
    this.openai = new OpenAIApi(this.configuration);
  }

  public async listModel() {
    const res = await this.openai.listModels();

    // console.log(res.data);

    const job_table_info = await this.getTableInfo('job');

    console.log(job_table_info);

    return res.data;
  }

  public async getTableInfo(table_name: string) {
    const schema = await this.dataSource.query(`
      SELECT * 
      FROM "information_schema"."columns" 
      WHERE ("table_schema" = 'public' AND "table_name" = '${table_name}');
    `);

    let description = `Table ${table_name}, columns = [`;
    schema.forEach((item) => {
      description += `{ column_name: '${item.column_name}', column_is_nullable: '${item.is_nullable}', column_data_type: '${item.data_type}'},`;
    });
    description += ']';

    return description;
  }

  public async sendSqlMessage(message: string) {
    const job_table_info = await this.getTableInfo('job');

    const res = await this.openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `
            ${job_table_info}
            User asking question about our company info
            Please create a PostgresSQL query (be accurate with our database columns data_type and with comparing date) without any comments
            which will get all related for this question: ${message}`,
        },
      ],
    });

    const query = res.data.choices[0].message.content;

    console.log({
      query,
    });

    const data = await this.dataSource.query(query);

    console.log({
      data,
    });

    const final_res = await this.openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `
            Act as a CEO assistant of locksmith company.
            Given the following user question and the related search results, respond to the user using only the results as context.
            question: ${message} - Search Results: ${JSON.stringify(data)}
          `,
        },
      ],
    });

    console.log(final_res.data.choices);

    return final_res.data.choices[0].message.content;
  }

  public async sendMessage(prompt: string): Promise<OpenAiMessageResponse> {
    const system_settings =
      await this.systemSettingsService.getSystemSettings();

    const res = await this.openai.createCompletion({
      // model: 'text-davinci-003',
      model: system_settings.active_model,
      prompt,
      temperature: 0,
      max_tokens: system_settings.max_tokens,
    });

    return {
      id: res.data.id,
      created: res.data.created,
      text: res.data.choices[0].text.replace('\n\n', ''),
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
}
