import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entity/address.entity';
import { Locksmith } from './entity/locksmith.entity';
import { Request } from './entity/request.entity';
import { Reviews } from './entity/reviews.entity';
import { Schedule } from './entity/schedule.entity';
import { FormMemberController } from './form-member.controller';
import { FormMemberResolver } from './form-member.resolver';
import { FormMemberService } from './form-member.service';
import { BadWordsValidator } from './validator/bad-words.validator';
import { UniqueUrlValidator } from './validator/unique-url.validator';
import { UtilsModule } from '../utils/utils.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Locksmith, Request, Address, Schedule, Reviews]),
    UtilsModule,
  ],
  providers: [
    FormMemberResolver,
    FormMemberService,
    UniqueUrlValidator,
    BadWordsValidator,
  ],
  controllers: [FormMemberController],
})
export class FormMemberModule {}
