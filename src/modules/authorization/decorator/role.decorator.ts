import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../guard/auth.guard';
import { CheckRoleGuard } from '../guard/role.guard';
import { UserRole } from 'src/modules/user/enum/user-role.enum';

export function RoleGuard(...roles: UserRole[]) {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(GqlAuthGuard, CheckRoleGuard),
  );
}
