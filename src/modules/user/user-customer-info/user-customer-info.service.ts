import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { UserCustomerInfo } from './entity/user-customer-info.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserCustomerInfoService extends CrudService<UserCustomerInfo> {
  constructor(
    @InjectRepository(UserCustomerInfo)
    private readonly userCustomerInfoRepository: Repository<UserCustomerInfo>,
  ) {
    super(userCustomerInfoRepository);
  }
}
