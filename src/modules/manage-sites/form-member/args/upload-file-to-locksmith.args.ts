import { ArgsType, Field } from '@nestjs/graphql';
import { IsExist } from 'src/core/decorator/is-exists';
import { IFileUpload } from 'src/modules/upload/type/i-file-upload';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';

@ArgsType()
export class UploadFileToLocksmithArgs {
  @IsExist('Locksmith')
  @Field(() => String)
  locksmith_id!: string;

  @Field(() => GraphQLUpload)
  file!: Promise<IFileUpload>;
}
