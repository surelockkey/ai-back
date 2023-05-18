import { NestToken } from '@tech-slk/nest-auth';
import { Entity } from 'typeorm';

@Entity()
export class Token extends NestToken {}
