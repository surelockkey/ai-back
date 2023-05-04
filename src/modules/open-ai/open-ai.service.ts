import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi, OpenAIFile } from 'openai';
import * as fs from 'fs';
import axios from 'axios';
import * as FormData from 'form-data';
import { OpenAiMessageResponse } from './dto/message-response.dto';
import { ConfigService } from '@nestjs/config';
import { SystemSettingsService } from 'src/modules/system-settings/system-settings.service';

// import * as ax from 'axios';

@Injectable()
export class OpenAiService {
  private readonly configuration: Configuration;
  private readonly openai: OpenAIApi;

  constructor(
    private readonly configService: ConfigService,
    private readonly systemSettingsService: SystemSettingsService,
  ) {
    this.configuration = new Configuration({
      apiKey: this.configService.get<string>('app.open_ai_key'),
    });
    this.openai = new OpenAIApi(this.configuration);
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
}
