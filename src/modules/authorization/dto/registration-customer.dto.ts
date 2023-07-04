import { Field, InputType, OmitType } from '@nestjs/graphql';
import { PasswordValidation } from '@tech-slk/nest-auth';
import { UserInput } from 'src/modules/user/dto/user.input';
import { UserCustomerInfoDto } from 'src/modules/user/user-customer-info/dto/user-customer-info.dto';

@InputType()
export class RegistrationCustomerDto extends OmitType(UserInput, [
  'id',
  'role',
]) {
  @Field(() => String)
  @PasswordValidation()
  password: string;

  @Field(() => UserCustomerInfoDto)
  customer_info: UserCustomerInfoDto;
}
