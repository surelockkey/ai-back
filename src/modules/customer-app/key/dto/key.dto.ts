import {
  Field,
  ID,
  InputType,
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { Key } from '../entity/key.entity';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { FileUpload } from 'graphql-upload';

@InputType()
export class KeyInput extends OmitType(Key, ['cars', 'orders', 'photo']) {}

@InputType()
export class CreateKeyDto extends OmitType(KeyInput, ['id', 'photo_id']) {
  @Field(() => GraphQLUpload, { nullable: true })
  photo?: Promise<FileUpload>;

  @Field(() => [ID], { nullable: true })
  car_ids?: string[];
}

@InputType()
export class UpdateKeyDto extends IntersectionType(
  PartialType(OmitType(KeyInput, ['photo_id', 'id'])),
  PickType(KeyInput, ['id']),
) {
  @Field(() => GraphQLUpload, { nullable: true })
  photo?: Promise<FileUpload>;
}
