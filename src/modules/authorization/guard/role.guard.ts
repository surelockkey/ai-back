import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { UserRole } from 'src/modules/user/enum/user-role.enum';
import { UserService } from 'src/modules/user/user.service';

@Injectable()
export class CheckRoleGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { user_id } = ctx.getContext().req.user;
    const roles = this.reflector.get<UserRole[]>('roles', context.getHandler());

    const user = await this.userService.findOneById(user_id);

    if (!user || !roles.includes(user.role)) {
      throw new GraphQLError(`You don't have access`);
    }

    return true;
  }
}
