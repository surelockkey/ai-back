import { Field, InputType, OmitType } from '@nestjs/graphql';
import { ConstructedPhoto } from '../entity/constructed-photo.entity';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { FileUpload } from 'graphql-upload';

@InputType()
export class ConstructedPhotoInput extends OmitType(ConstructedPhoto, [
  'file',
  'block',
  'preview',
]) {}

@InputType()
export class ConstructedPhotoDto extends OmitType(ConstructedPhotoInput, [
  'id',
  'file_id',
]) {
  @Field(() => GraphQLUpload)
  file: Promise<FileUpload>;
}
