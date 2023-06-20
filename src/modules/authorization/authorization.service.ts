import { Injectable } from '@nestjs/common';
import { NestAuthService } from '@tech-slk/nest-auth';
import { User } from '../user/entity/user.entity';
import { UserService } from '../user/user.service';
import { CurrentUserDto } from './dto/current-user.dto';
import { Token } from './token/entity/token.entity';
import { TokenService } from './token/token.service';
import { InvitedUser } from '../user/entity/invited-user.entity';
import { AcceptInviteDto } from './dto/accept-invite.dto';
import { GraphQLError } from 'graphql';
import { InvitedUserService } from '../user/invited-user.service';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { LoggerService } from '../logger/logger.service';
import { RegistrationDto } from './dto/registration.dto';
import { UserRole } from '../user/enum/user-role.enum';
import { MailService } from '../mail/mail.service';
import { ConfigService } from '@nestjs/config';
import { InviteUserDto } from './dto/invite-user.dto';
import { RegistrationCustomerDto } from './dto/registration-customer.dto';
import { UserCustomerInfoService } from '../user/user-customer-info/user-customer-info.service';

@Injectable()
export class AuthorizationService extends NestAuthService<
  CurrentUserDto,
  Token,
  TokenService,
  User,
  UserService
> {
  constructor(
    protected readonly userService: UserService,
    protected readonly invitedUserService: InvitedUserService,
    protected readonly tokenService: TokenService,
    protected readonly loggerService: LoggerService,
    private readonly mailService: MailService,
    private readonly configService: ConfigService,
    private readonly userCustomerInfoService: UserCustomerInfoService,
  ) {
    super(tokenService, userService);
  }

  public async inviteUserToApp(
    { role, email, workiz_id, name, location }: InviteUserDto,
    current_user_id: string,
  ): Promise<InvitedUser> {
    const current_user = await this.userService.findOneById(current_user_id);

    if (
      current_user.role === UserRole.MAIN_DISPATCHER &&
      role !== UserRole.DISPATCHER
    ) {
      throw new GraphQLError(`You don't have permissions`);
    }

    return await this.userService
      .findOneUser({ where: [{ email }, { workiz_id }] })
      .then(() => {
        throw new GraphQLError(
          'User with this email or workiz id already exist',
        );
      })
      .catch(async () => {
        const invited_user = await this.invitedUserService.create({
          email,
          key: randomStringGenerator(),
          role,
          workiz_id,
          name,
          location,
        });

        await this.mailService.sendMail({
          to: invited_user.email,
          subject: 'Invite to app',
          text: `${this.configService.get(
            'app.frontend_url',
          )}/accept-invite?key=${invited_user.key}`,
        });

        return invited_user;
      });
  }

  public async registrationUser(
    registration_dto: RegistrationDto,
    current_user_id: string,
  ) {
    const current_user = await this.userService.findOneById(current_user_id);

    if (
      current_user.role === UserRole.DISPATCHER &&
      registration_dto.role !== UserRole.DISPATCHER
    ) {
      throw new GraphQLError(`You don't have permission`);
    }

    return this.registration(registration_dto);
  }

  public async registrationCustomer(
    registration_dto: RegistrationCustomerDto,
  ): Promise<User> {
    const { customer_info, ...user_dto } = registration_dto;

    const user = await this.registration({
      ...user_dto,
      role: UserRole.CUSTOMER,
    });

    await this.userCustomerInfoService.create({
      ...customer_info,
      user_id: user.id,
    });

    return await this.userService.findOneById(user.id);
  }

  public async acceptInviteToApp({
    key,
    ...rest
  }: AcceptInviteDto): Promise<User> {
    const { email, id, role, workiz_id, location } =
      await this.invitedUserService.findOne({ key });

    if (!email) throw new GraphQLError("User isn't invited");

    const new_user = await this.registration({
      email,
      role,
      workiz_id,
      location,
      ...rest,
    });

    this.loggerService.actionLog({
      callback: () => this.invitedUserService.deleteById(id),
      action: 'Tried to delete from invited list',
    });

    return new_user;
  }
}
