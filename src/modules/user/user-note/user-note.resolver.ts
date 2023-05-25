import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { UserNoteService } from './user-note.service';
import { UserNote } from './entity/user-note.entity';
import {
  CreateOrUpdateUserNoteDto,
  CreateUserNoteDto,
  UpdateUserNoteDto,
} from './dto/user-note.dto';
import { RoleGuard } from 'src/modules/authorization/decorator/role.decorator';
import { UserRole } from 'src/modules/user/enum/user-role.enum';
import { CurrentUser } from '@tech-slk/nest-auth';
import { CurrentUserDto } from 'src/modules/authorization/dto/current-user.dto';
import { LoggerService } from 'src/modules/logger/logger.service';

@Resolver()
export class UserNoteResolver {
  constructor(
    private readonly userNoteService: UserNoteService,
    private readonly loggerService: LoggerService,
  ) {}

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => UserNote)
  createUserNote(
    @Args('user_note', { type: () => CreateUserNoteDto })
    user_note: CreateUserNoteDto,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () => this.userNoteService.create(user_note),
      user_id,
      action: 'Tried to create user note',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => UserNote)
  updateUserNote(
    @Args('user_note', { type: () => UpdateUserNoteDto })
    user_note: UpdateUserNoteDto,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () =>
        this.userNoteService.updateAndReturn(user_note.id, user_note),
      user_id,
      action: 'Tried to update user note',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => ID)
  deleteUserNote(
    @Args('id', { type: () => ID }) id: string,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () => this.userNoteService.deleteById(id),
      user_id,
      action: 'Tried to delete user note',
    });
  }

  @RoleGuard(UserRole.ADMIN, UserRole.MAIN_DISPATCHER)
  @Mutation(() => UserNote)
  createOrUpdateUserNote(
    @Args('user_note', { type: () => CreateOrUpdateUserNoteDto })
    user_note: CreateOrUpdateUserNoteDto,
    @CurrentUser() { user_id }: CurrentUserDto,
  ) {
    return this.loggerService.actionLog({
      callback: () => this.userNoteService.createOrUpdateUserNote(user_note),
      user_id,
      action: 'Tried to create or update user note',
    });
  }
}
