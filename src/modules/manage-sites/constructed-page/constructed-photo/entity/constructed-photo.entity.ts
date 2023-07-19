import { ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Entity } from 'typeorm';

@Entity()
@ObjectType()
export class ConstructedPhoto extends BaseEntity {}
