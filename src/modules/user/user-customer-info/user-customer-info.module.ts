import { Module } from '@nestjs/common';
import { UserCustomerInfoService } from './user-customer-info.service';
import { UserCustomerInfoResolver } from './user-customer-info.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCustomerInfo } from './entity/user-customer-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserCustomerInfo])],
  providers: [UserCustomerInfoService, UserCustomerInfoResolver],
  exports: [UserCustomerInfoService],
})
export class UserCustomerInfoModule {}
