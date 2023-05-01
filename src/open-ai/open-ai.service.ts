import { Injectable } from '@nestjs/common';
import { FileUpload } from 'graphql-upload';
import { Configuration, OpenAIApi } from 'openai';
import * as fs from 'fs';
import axios from 'axios';
import * as FormData from 'form-data';

// import * as ax from 'axios';

@Injectable()
export class OpenAiService {
  private readonly configuration = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
  });
  private readonly openai = new OpenAIApi(this.configuration);

  public async sendMessage(message: string) {
    const res = await this.openai.createCompletion({
      // model: 'text-davinci-003',
      model: 'davinci:ft-personal-2023-04-28-15-10-46',
      prompt: message,
      temperature: 0.2,
      max_tokens: 200,
    });

    console.log(res.data);

    return res.data.choices[0].text;
  }

  public async uploadFileToOpenAi() {
    const data = new FormData();
    console.log(__dirname);

    data.append('purpose', 'fine-tune');
    data.append(
      'file',
      fs.createReadStream(__dirname + '/../../pubic/file-tune.jsonl'),
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

  public async createTune(file_id: string) {
    const res = await this.openai.createFineTune({
      training_file: file_id,
      model: 'davinci',
    });

    console.log(res.data);
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
