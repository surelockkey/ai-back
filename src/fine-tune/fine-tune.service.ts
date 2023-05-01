import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { FineTune } from './entity/fine-tune.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as fs from 'fs';

@Injectable()
export class FineTuneService extends CrudService<FineTune> {
  constructor(
    @InjectRepository(FineTune)
    private readonly fineTuneRepository: Repository<FineTune>,
  ) {
    super(fineTuneRepository);
  }

  public async prepareFileForFileTune() {
    const fine_tunes = await this.findAll({ deleted: false });

    fs.appendFile(
      __dirname + '/../../pubic/new-tune.jsonl',
      fine_tunes
        .map(
          (fine_tune) =>
            `{ "prompt": "${fine_tune.prompt}", "completion": "${fine_tune.text}" }\n`,
        )
        .join(''),
      //   `{ "prompt": "${fine_tunes[0].prompt}", "completion": "${fine_tunes[0].text}" }\n`,
      (err) => {
        console.log(err);
      },
    );
  }
}
