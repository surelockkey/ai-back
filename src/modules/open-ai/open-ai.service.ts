import { Injectable } from "@nestjs/common";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi, OpenAIFile } from "openai";
import * as fs from "fs";
import axios from "axios";
import * as FormData from "form-data";
import { OpenAiMessageResponse } from "./dto/message-response.dto";
import { ConfigService } from "@nestjs/config";
import { SystemSettingsService } from "src/modules/system-settings/system-settings.service";
import { DataSource } from "typeorm";
import { InjectDataSource } from "@nestjs/typeorm";
import * as moment from "moment";
import { Message } from "../chat/entity/message.entity";

// import * as ax from 'axios';

@Injectable()
export class OpenAiService {
  private readonly configuration: Configuration;
  private readonly openai: OpenAIApi;

  constructor(
    private readonly configService: ConfigService,
    private readonly systemSettingsService: SystemSettingsService,
    @InjectDataSource() private readonly dataSource: DataSource
  ) {
    this.configuration = new Configuration({
      apiKey: this.configService.get<string>("app.open_ai_key"),
    });
    this.openai = new OpenAIApi(this.configuration);
  }

  public async listModel() {
    const res = await this.openai.listModels();

    console.log(res.data);

    return res.data;
  }

  public async sendMessage(prompt: string, context?: Message[]): Promise<OpenAiMessageResponse> {
    const system_settings =
      await this.systemSettingsService.getSystemSettings();

    const prev_messages: ChatCompletionRequestMessage[] = [];

    context.forEach((message) => {
      prev_messages.push({
        role: 'user',
        content: message.prompt
      });
      prev_messages.push({
        role: 'assistant',
        content: message.text
      });
    });

    const res = await this.openai.createChatCompletion({
      // model: 'text-davinci-003',
      // model: system_settings.active_model,
      model: 'gpt-3.5-turbo',
      messages: [
        ...prev_messages,
        {
          role: 'user',
          content: prompt,
        }
      ],
      temperature: 0,
    });

    return {
      id: res.data.id,
      created: res.data.created,
      text: res.data.choices[0].message.content.replace("\n\n", ""),
      total_tokens: res.data.usage.total_tokens,
      finish_reason: res.data.choices[0].finish_reason,
    };
  }

  public async uploadFileToOpenAi(filename: string): Promise<OpenAIFile> {
    const data = new FormData();

    data.append("purpose", "fine-tune");
    data.append(
      "file",
      fs.createReadStream(__dirname + `/../../../pubic/${filename}.jsonl`)
    );

    const res = await axios({
      method: "post",
      url: "https://api.openai.com/v1/files",
      headers: {
        Authorization: "Bearer " + process.env.OPEN_AI_API_KEY,
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
      fine_tune.status === "succeeded" &&
      fine_tune.fine_tuned_model !== system_settings.active_model
    ) {
      await this.systemSettingsService.updateByCriteriaAndReturnOne(
        {},
        { active_model: fine_tune.fine_tuned_model }
      );
    }

    return fine_tune;
  }

  public async listFineTunes() {
    const res = await this.openai.listFineTunes();
    console.log(res.data.data.map((item) => item));

    const events = await this.openai.listFineTuneEvents(
      res.data.data[res.data.data.length - 1].id
    );

    console.log(events.data);
  }

  public async speechToText(audio_url: File): Promise<any> {
    return await this.openai.createTranscription(
      audio_url,
      "whisper-1",
      undefined,
      "json",
      0,
      "en"
    );
  }

  public async sendSqlMessage(message: string) {
    try {
      const res = await this.openai
        .createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: `
            ### Postgres SQL tables, with their properties:
            #
            # Job(uuid, start_date, end_date, created_date, total_price, amount_due, client_id, status, phone, second_phone, email, client_name, city, state, postal_code, job_type, job_note, job_source, technician_name, dispatcher_name, address, manager_notes)
            #
            ###
            ### Acceptable status: Submitted, Canceled, In progress, Pending, done pending approval, new, Done
            ### Please create a PostgresSQL query without any comments which will get all related for this question: ${message}`,
            },
          ],
        })
        .then((r) => r)
        .catch((e) => {
          console.log(e.response);
          return e;
        });

      console.log(res.response);

      const query = res.data.choices[0].message.content;

      console.log({
        query,
      });

      const data = await this.dataSource.query(query);

      console.log({
        data,
      });

      const final_res = await this.openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `
            Act as a assistant of locksmith company.
            Given the following user question and the related search results, respond to the user using only the results as context.
            question: ${message} - Search Results: ${JSON.stringify(data)}
          `,
          },
        ],
      });

      console.log(final_res.data.choices[0].message.content);

      return {
        id: final_res.data.id,
        created: final_res.data.created,
        text: final_res.data.choices[0].message.content.replace("\n\n", ""),
        total_tokens: final_res.data.usage.total_tokens,
        finish_reason: final_res.data.choices[0].finish_reason,
      };
    } catch (e) {
      return {
        id: '',
        created: moment().unix(),
        text: `Please try to change your question, I can't find any information based on this question`,
        total_tokens: 0,
        finish_reason: 'error',
      };
    }
  }
}
