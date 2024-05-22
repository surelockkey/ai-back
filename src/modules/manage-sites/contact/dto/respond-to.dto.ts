import { ArgsType, Field } from '@nestjs/graphql';
import { FileUpload } from 'graphql-upload';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';

@ArgsType()
export class RespondToDto {
  @Field(() => GraphQLUpload, { nullable: true })
  file?: Promise<FileUpload>;

  @Field(() => String)
  text: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  title: string;
}
