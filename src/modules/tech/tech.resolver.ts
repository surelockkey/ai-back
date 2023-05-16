import { Args, ID, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TechService } from './tech.service';
import { Tech } from './entity/tech.entity';
import { CreateTechDto, TechWithSchedule, UpdateTechDto } from './dto/tech.dto';
import { TechnicianWorkiz } from '../api/workiz-api/dto/workiz-api.dto';
import { CreateTechFromWorkizDto } from './dto/workiz-tech.dto';
import { RoleGuard } from '../authorization/decorator/role.decorator';
import { UserRole } from '../user/enum/user-role.enum';
import { LoggerService } from '../logger/logger.service';
import { CurrentUser } from '@tech-slk/nest-auth';
import { CurrentUserDto } from '../authorization/dto/current-user.dto';

@Resolver()
export class TechResolver {
  constructor(
    private readonly techService: TechService,
    private readonly loggerService: LoggerService,
  ) {}

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => Tech)
  createTech(
    @Args('tech', { type: () => CreateTechDto }) tech: CreateTechDto,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () => this.techService.create(tech),
      user_id,
      action: 'Tried to create tech',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => Tech)
  updateTech(
    @Args('tech', { type: () => UpdateTechDto }) tech: UpdateTechDto,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () => this.techService.updateAndReturn(tech.id, tech),
      user_id,
      action: `Tried to update tech with id: ${tech.id}`,
    });
  }

  @Query(() => [Tech])
  getAllTechs() {
    return this.techService.findAll();
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => Tech)
  createTechFromWorkiz(
    @Args('workiz_id') workiz_id: string,
    @CurrentUser() { user_id }: CurrentUserDto,
    @Args('state', { nullable: true }) state?: string,
  ) {
    return this.loggerService.actionLog({
      callback: () => this.techService.createTechFromWorkiz(workiz_id, state),
      user_id,
      action: 'Tried to create tech from workiz',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => [Tech])
  createManyTechsFromWorkiz(
    @Args('techs', { type: () => [CreateTechFromWorkizDto] })
    techs: CreateTechFromWorkizDto[],
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () => this.techService.createManyTechsFromWorkiz(techs),
      user_id,
      action: 'Tried to create many techs from workiz',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => ID)
  deleteTechById(
    @Args('id', { type: () => ID }) id: string,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () => this.techService.deleteByIdReturnId(id),
      user_id,
      action: 'Tried to delete tech',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => [ID])
  async deleteManyTechsByIds(
    @Args('ids', { type: () => [ID] }) ids: string[],
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: async () => {
        await this.techService.deleteManyByIds(ids);
        return ids;
      },
      user_id,
      action: 'Tried to delete many techs',
    });
  }

  @Query(() => [TechWithSchedule])
  getTechsWithSchedule(
    @Args('from', { type: () => Int }) from: number,
    @Args('to', { type: () => Int }) to: number,
    @Args('search_value', { nullable: true }) search_value?: string,
    @Args('is_available', { nullable: true, type: () => Boolean })
    is_available?: boolean,
    @Args('states', { nullable: true, type: () => [String] }) states?: string[],
  ) {
    return this.techService.getTechsWithSchedule(
      from,
      to,
      search_value,
      is_available,
      states,
    );
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Query(() => [TechnicianWorkiz])
  getTechsWorkizWithoutAdded() {
    return this.techService.getTechsWorkizWithoutAdded();
  }
}
