import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { FineTuneItem } from './entity/fine-tune-item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as fs from 'fs';
import { GraphQLError } from 'graphql';
import { FineTune } from './entity/fine-tune.entity';
import * as moment from 'moment';
import { OpenAiService } from 'src/modules/open-ai/open-ai.service';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';

@Injectable()
export class FineTuneService extends CrudService<FineTuneItem> {
  constructor(
    @InjectRepository(FineTuneItem)
    private readonly fineTuneItemRepository: Repository<FineTuneItem>,
    @InjectRepository(FineTune)
    private readonly fineTuneRepository: Repository<FineTune>,
    private readonly openAiService: OpenAiService,
  ) {
    super(fineTuneItemRepository);
  }

  public async prepareFileForFineTune(filename: string) {
    const fine_tunes = await this.findAll({ deleted: false });

    if (!fine_tunes.length) {
      throw new GraphQLError(`Must be at least 1 fine tune item`);
    }

    await fs.appendFileSync(
      __dirname + `/../../../pubic/${filename}.jsonl`,
      fine_tunes
        .map(
          (fine_tune) =>
            `{ "prompt": "${fine_tune.prompt.replace(
              new RegExp('\n', 'g'),
              '\\n',
            )}", "completion": "${fine_tune.text.replace(
              new RegExp('\n', 'g'),
              '\\n',
            )}" }`,
        )
        .join('\n'),
    );
  }

  public async getFullLastFineTune() {
    const [last_fine_tune] = await this.fineTuneRepository.find({
      order: { created_at: 'DESC' },
      take: 1,
    });

    console.log(last_fine_tune);

    return await this.openAiService.getFullLastFineTune(
      last_fine_tune.openai_id,
    );
  }

  public async startFineTune() {
    try {
      const filename = randomStringGenerator();

      await this.prepareFileForFineTune(filename);

      console.log(filename);

      const file = await this.openAiService.uploadFileToOpenAi(filename);

      console.log({ file });

      const [last_fine_tune] = await this.fineTuneRepository.find({
        order: { created_at: 'DESC' },
        take: 1,
      });

      console.log({ last_fine_tune });

      let model = 'davinci';

      if (last_fine_tune) {
        const full_last_fine_tune = await this.openAiService.getFullFineTune(
          last_fine_tune.openai_id,
        );

        console.log({ full_last_fine_tune });

        if (full_last_fine_tune && full_last_fine_tune.fine_tuned_model) {
          model = full_last_fine_tune.fine_tuned_model;
        }
      }

      console.log({ model });

      const openai_fine_tune = await this.openAiService.createTune(
        file.id,
        model,
      );

      console.log({ openai_fine_tune });

      await this.fineTuneItemRepository.update(
        { deleted: false },
        { deleted: true },
      );

      const res = await this.fineTuneRepository.save({
        created_at: moment().unix(),
        model,
        openai_id: openai_fine_tune.id,
        openai_file_id: file.id,
      });

      console.log({ res });
      return res;
    } catch (error) {
      console.log(error?.response?.data ?? error);
      throw new GraphQLError(error.message, { originalError: error });
    }
  }
}
