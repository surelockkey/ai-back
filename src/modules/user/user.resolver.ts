import { Query, Resolver } from "@nestjs/graphql";
import { GqlAuthGuard } from "../authorization/guard/auth.guard";
import { CurrentUser } from "@tech-slk/nest-auth";
import { CurrentUserDto } from "../authorization/dto/current-user.dto";
import { UseGuards } from "@nestjs/common";
import { User } from "./entity/user.entity";
import { UserService } from "./user.service";
@Resolver()
export class UserResolver {
    constructor(
        private readonly userService: UserService,
    ) { }

    @UseGuards(GqlAuthGuard)
    @Query(() => User)
    public async getCurrentUser(
        @CurrentUser()
        { user_id }: CurrentUserDto,
    ): Promise<User> {
        return this.userService.findOne({ id: user_id });
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => [User])
    public async getAllUsers(): Promise<User[]> {
        return this.userService.findAll();
    }
}
