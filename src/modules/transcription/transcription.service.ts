import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { InjectRepository } from '@nestjs/typeorm';
import { Transcription } from './entity/transcription.entity';
import { OpenAiService } from '../open-ai/open-ai.service';
import { createReadStream, createWriteStream, unlinkSync } from 'fs';
import { Repository } from 'typeorm';
import { get } from 'https';
import { CtmApiService } from '../api/ctm-api/ctm-api.service';
import { GraphQLError } from 'graphql';

@Injectable()
export class TranscriptionService extends CrudService<Transcription> {
  constructor(
    @InjectRepository(Transcription)
    private readonly transcriptionRepository: Repository<Transcription>,
    private readonly openAiService: OpenAiService,
    private readonly ctmApiService: CtmApiService,
  ) {
    super(transcriptionRepository);
  }

  async speechToText(call_id: string): Promise<Transcription> {
    const findCallCtm = await this.ctmApiService.getCall(call_id);

    if (!findCallCtm) throw new GraphQLError(`Call wasn't find on the CTM`);

    const findTranscription = await this.findOne({
      ctm_call_id: call_id,
    }).catch(async () => {
      const file_name = call_id + '.mp3';

      await downloadFile(findCallCtm.audio, file_name);

      const transcription = await this.openAiService.speechToText(
        createReadStream(file_name) as any,
      );

      unlinkSync(file_name);

      return await this.create({
        ctm_call_id: call_id,
        text: transcription.data.text,
      });
    });

    return findTranscription;
  }
}

async function downloadFile(url: string, targetFile: string) {
  return await new Promise((resolve, reject) => {
    get(url, (response) => {
      const code = response.statusCode ?? 0;

      if (code >= 400) {
        return reject(new Error(response.statusMessage));
      }

      // handle redirects
      if (code > 300 && code < 400 && !!response.headers.location) {
        return resolve(downloadFile(response.headers.location, targetFile));
      }

      // save the file to disk
      const fileWriter = createWriteStream(targetFile).on('finish', () => {
        resolve({});
      });

      response.pipe(fileWriter);
    }).on('error', (error) => {
      reject(error);
    });
  });
}
