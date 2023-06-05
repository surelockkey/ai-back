import { ArgsType, Field } from '@nestjs/graphql';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { IsExist } from 'src/core/decorator/is-exists';
import { IFileUpload } from 'src/modules/upload/type/i-file-upload';

@ArgsType()
export class UploadFileToRequestArgs {
  @IsExist('Request')
  @Field(() => String)
  request_id!: string;

  @Field(() => GraphQLUpload)
  file!: Promise<IFileUpload>;
}
