import { ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Entity } from 'typeorm';

@ObjectType()
@Entity()
export class ConstructedBlock extends BaseEntity {}
