import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { FileUpload } from 'graphql-upload';
import { PassThrough } from 'stream';
import { IFileUpload } from '../type/i-file-upload';

@Injectable()
export class FilePipe
  implements PipeTransform<FileUpload, Promise<IFileUpload | string>>
{
  async transform(
    value: FileUpload,
    argument_metadata: ArgumentMetadata,
  ): Promise<IFileUpload | string> {
    if (
      typeof value === 'string' &&
      ['request_id', 'locksmith_id'].includes(argument_metadata.data)
    ) {
      return value;
    }

    const validationStream = new PassThrough();
    let byteLength = 0;

    await new Promise(async (resolve, reject) =>
      value
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

    return { ...value, filesize: byteLength };
  }
}
