import { ArgsType, Field } from '@nestjs/graphql';
import { FileUpload } from 'graphql-upload';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';

@ArgsType()
export class UploadCV {
  @Field(() => String)
  name: string;

  @Field(() => String)
  last_name: string;

  @Field(() => String)
  phone: string;

  @Field(() => String)
  email: string;

  @Field(() => GraphQLUpload)
  file: Promise<FileUpload>;
}
