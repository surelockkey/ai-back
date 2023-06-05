import { Injectable, PipeTransform } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { PassThrough } from 'stream';
import { IFileUpload } from '../type/i-file-upload';

@Injectable()
export class FileInArgsPipe<T extends { file: Promise<IFileUpload> }>
  implements PipeTransform<T, Promise<T>>
{
  async transform(value: T): Promise<T> {
    const validationStream = new PassThrough();
    let byteLength = 0;

    await new Promise(async (resolve, reject) =>
      (
        await value.file
      )
        .createReadStream()
        .pipe(validationStream)
        .on('data', (data: Buffer) => {
          byteLength += data.byteLength;
        })
        .on('finish', () => resolve(byteLength))
        .on('error', () => reject(false)),
    ).catch((e) => {
      throw new GraphQLError(e);
    });

    (await value.file).filesize = byteLength;
    return value;
  }
}
