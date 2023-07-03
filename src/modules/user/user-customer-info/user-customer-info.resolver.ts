import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserCustomerInfoService } from './user-customer-info.service';
import { UserCustomerInfo } from './entity/user-customer-info.entity';
import { UpdateUserCustomerInfoDto } from './dto/user-customer-info.dto';
import { RoleGuard } from 'src/modules/authorization/decorator/role.decorator';
import { UserRole } from '../enum/user-role.enum';

@Resolver()
export class UserCustomerInfoResolver {
  constructor(
    private readonly userCustomerInfoService: UserCustomerInfoService,
  ) {}

  @RoleGuard(UserRole.CUSTOMER)
  @Mutation(() => UserCustomerInfo)
  updateUserCustomerInfo(
    @Args('user_customer_info_dto', { type: () => UpdateUserCustomerInfoDto })
    user_customer_info_dto: UpdateUserCustomerInfoDto,
  ) {
    return this.userCustomerInfoService.updateAndReturn(
      user_customer_info_dto.id,
      user_customer_info_dto,
    );
  }
}
