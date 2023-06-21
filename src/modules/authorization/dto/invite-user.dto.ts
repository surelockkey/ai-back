import { InputType, OmitType, PartialType } from '@nestjs/graphql';
import { UserInput } from 'src/modules/user/dto/user.input';

@InputType()
export class InviteUserDto extends PartialType(
  OmitType(UserInput, ['id', 'password']),
) {}
