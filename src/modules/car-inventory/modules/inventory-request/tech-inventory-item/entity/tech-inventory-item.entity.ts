import { BaseEntity } from '@tech-slk/nest-crud';
import { Entity } from 'typeorm';

@Entity()
export class TechInventoryItem extends BaseEntity {}
