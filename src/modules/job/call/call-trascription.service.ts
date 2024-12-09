import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Call } from './entity/call.entity';
import { IsNull, MoreThanOrEqual, Not, Repository } from 'typeorm';
import { WorkizCoreApiService } from 'src/modules/api/workiz-api/workiz-core.service';
import { OpenAiService } from 'src/modules/open-ai/open-ai.service';
import { createReadStream, createWriteStream, unlinkSync } from 'fs';
import { get } from 'https';

@Injectable()
export class CallTranscriptionService {
  constructor(
    @InjectRepository(Call) private readonly callRepository: Repository<Call>,
    private readonly workizCoreApiService: WorkizCoreApiService,
    private readonly openAiService: OpenAiService,
  ) {}

  public async transcriptCalls(from: string, limit?: number) {
    const formatted_from = this.formatDate(from);
    const calls = await this.fetchEligibleCalls(formatted_from, limit);

    console.log('calls length', calls.length);

    for (const [index, call] of calls.entries()) {
      await this.processCall(call, index + 1);
    }
  }

  private formatDate(date: string): string {
    const [day, month, year] = date.split('.');
    return `${year}-${month}-${day}`;
  }

  private async fetchEligibleCalls(formatted_from: string, limit?: number) {
    return this.callRepository.find({
      where: {
        created_sql: MoreThanOrEqual(`${formatted_from} 00:00:00`),
        recording_url: Not(IsNull()),
        call_duration_int: MoreThanOrEqual(30),
      },
      take: limit,
    });
  }

  private async processCall(call: any, call_index: number) {
    if (call.transcription || !call.recording_url.trim()) return;

    const file_name = `${call.id}.wav`;
    console.log(call.recording_url);

    try {
      await this.downloadFile(call.recording_url, file_name);
      const transcription = await this.getValidTranscription(file_name);

      unlinkSync(file_name);

      if (transcription) {
        await this.saveTranscription(call.id, transcription);
      } else {
        console.warn(`Failed to transcribe call ${call.id} after 3 attempts.`);
      }
    } catch (error) {
      this.logError(error, call);
    }

    console.log(`Processed call #${call_index}`);
  }

  private async getValidTranscription(
    file_name: string,
  ): Promise<string | null> {
    const max_attempts = 3;
    let attempts = 0;

    while (attempts < max_attempts) {
      attempts++;
      const transcription = await this.transcribeFile(file_name);

      if (!this.isRepeatingTranscription(transcription, 7)) {
        return transcription;
      }

      console.warn(
        `Attempt ${attempts} returned a repetitive transcription. Retrying...`,
      );
    }

    return null;
  }

  private async transcribeFile(file_name: string): Promise<string> {
    const transcription = await this.openAiService.speechToText(
      createReadStream(file_name) as any,
    );
    return transcription.data.text;
  }

  private isRepeatingTranscription(text: string, threshold = 7): boolean {
    const regex = /\b([^\s]+(?:\s+[^\s]+){0,4})\b/g; // Matches 1-5 word phrases
    const frequencies: Record<string, number> = {};
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      const phrase = match[1].toLowerCase();
      frequencies[phrase] = (frequencies[phrase] || 0) + 1;
      if (frequencies[phrase] > threshold) {
        return true;
      }
    }

    return false;
  }

  private async saveTranscription(callId: string, transcription: string) {
    await this.callRepository.update({ id: callId }, { transcription });
  }

  private logError(error: any, call: any) {
    console.dir({
      error: 'ERROR CATCHED',
      original_err: error,
      call_id: call.id,
      recording_url: call.recording_url,
      call,
    });
  }

  private async downloadFile(url: string, target_file: string) {
    return await new Promise((resolve, reject) => {
      get(url, (response) => {
        const code = response.statusCode ?? 0;

        if (code >= 400) {
          return reject(new Error(response.statusMessage));
        }

        // handle redirects
        if (code > 300 && code < 400 && !!response.headers.location) {
          return resolve(
            this.downloadFile(response.headers.location, target_file),
          );
        }

        // save the file to disk
        const fileWriter = createWriteStream(target_file).on('finish', () => {
          resolve({});
        });

        response.pipe(fileWriter);
      }).on('error', (error) => {
        reject(error);
      });
    });
  }
}
