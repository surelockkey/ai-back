import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { TechNoteService } from './tech-note.service';
import { TechNote } from './entity/tech-note.entity';
import {
  CreateOrUpdateTechNoteDto,
  CreateTechNoteDto,
  UpdateTechNoteDto,
} from './dto/tech-note.dto';
import { RoleGuard } from 'src/modules/authorization/decorator/role.decorator';
import { UserRole } from 'src/modules/user/enum/user-role.enum';
import { CurrentUser } from '@tech-slk/nest-auth';
import { CurrentUserDto } from 'src/modules/authorization/dto/current-user.dto';
import { LoggerService } from 'src/modules/logger/logger.service';

@Resolver()
export class TechNoteResolver {
  constructor(
    private readonly techNoteService: TechNoteService,
    private readonly loggerService: LoggerService,
  ) {}

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => TechNote)
  createTechNote(
    @Args('tech_note', { type: () => CreateTechNoteDto })
    tech_note: CreateTechNoteDto,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () => this.techNoteService.create(tech_note),
      user_id,
      action: 'Tried to create tech note',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => TechNote)
  updateTechNote(
    @Args('tech_note', { type: () => UpdateTechNoteDto })
    tech_note: UpdateTechNoteDto,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () =>
        this.techNoteService.updateAndReturn(tech_note.id, tech_note),
      user_id,
      action: 'Tried to update tech note',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => ID)
  deleteTechNote(
    @Args('id', { type: () => ID }) id: string,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () => this.techNoteService.deleteById(id),
      user_id,
      action: 'Tried to delete tech note',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => TechNote)
  createOrUpdateTechNote(
    @Args('tech_note', { type: () => CreateOrUpdateTechNoteDto })
    tech_note: CreateOrUpdateTechNoteDto,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () => this.techNoteService.createOrUpdateTechNote(tech_note),
      user_id,
      action: 'Tried to create or update tech note',
    });
  }
}
