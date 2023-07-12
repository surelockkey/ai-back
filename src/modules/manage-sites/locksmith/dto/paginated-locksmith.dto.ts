import { ObjectType } from '@nestjs/graphql';
import { PaginateResult } from 'src/core/dto/pagination.dto';
import { Locksmith } from '../entity/locksmith.entity';

@ObjectType()
export class PaginatedLocksmith extends PaginateResult(Locksmith) {}
