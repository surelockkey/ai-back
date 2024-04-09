import { ArgsType, Field } from '@nestjs/graphql';
import { FileUpload } from 'graphql-upload';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';

@ArgsType()
export class SlkGlobalInfoDto {
  @Field(() => GraphQLUpload, { nullable: true })
  file?: Promise<FileUpload>;

  @Field(() => String)
  text: string;
}
