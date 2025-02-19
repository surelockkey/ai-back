import {
  Field,
  InputType,
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { OilChange } from '../entity/oil-change.entity';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { FileUpload } from 'graphql-upload';

@InputType()
export class OilChangeInput extends OmitType(OilChange, [
  'vehicle_picture',
  'receipt_picture',
  'technician',
  'vehicle_picture_id',
  'receipt_picture_id',
]) {
  @Field(() => GraphQLUpload, { nullable: true })
  vehicle_picture?: Promise<FileUpload>;

  @Field(() => GraphQLUpload, { nullable: true })
  receipt_picture?: Promise<FileUpload>;
}

@InputType()
export class CreateOilChange extends OmitType(OilChangeInput, ['id']) {}

@InputType()
export class UpdateOilChange extends IntersectionType(
  PickType(OilChangeInput, ['id']),
  PartialType(OmitType(OilChangeInput, ['id'])),
) {}
