import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { TechInfoService } from './tech-info.service';
import { TechInfo } from './entity/tech-info.entity';
import {
  CreateOrUpdateTechInfoDto,
  CreateTechInfoDto,
  UpdateTechInfoDto,
} from './dto/tech-info.dto';
import { LoggerService } from 'src/modules/logger/logger.service';
import { RoleGuard } from 'src/modules/authorization/decorator/role.decorator';
import { UserRole } from 'src/modules/user/enum/user-role.enum';
import { CurrentUser } from '@tech-slk/nest-auth';
import { CurrentUserDto } from 'src/modules/authorization/dto/current-user.dto';

@Resolver()
export class TechInfoResolver {
  constructor(
    private readonly techInfoService: TechInfoService,
    private readonly loggerService: LoggerService,
  ) {}

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => TechInfo)
  createTechInfo(
    @Args('tech_info', { type: () => CreateTechInfoDto })
    tech_info: CreateTechInfoDto,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () => this.techInfoService.create(tech_info),
      user_id,
      action: 'Tried to create tech info',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => ID)
  deleteTechInfo(
    @Args('id', { type: () => ID }) id: string,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () => this.techInfoService.deleteByIdReturnId(id),
      user_id,
      action: 'Tried to delete tech info',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => TechInfo)
  updateTechInfo(
    @Args('tech_info', { type: () => UpdateTechInfoDto })
    tech_info: UpdateTechInfoDto,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () =>
        this.techInfoService.updateAndReturn(tech_info.id, tech_info),
      user_id,
      action: 'Tried to update tech info',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => [TechInfo])
  createOrUpdateTechInfo(
    @Args('tech_infos', { type: () => [CreateOrUpdateTechInfoDto] })
    tech_infos: CreateOrUpdateTechInfoDto,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () => this.techInfoService.createOrUpdateTechInfo(tech_infos),
      user_id,
      action: 'Tried to create or update tech info',
    });
  }
}
