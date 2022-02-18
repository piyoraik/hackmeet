import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphqlAuthGuard } from 'src/authz/authz.guard';
import { JwtPayload } from 'src/authz/types/jwt-payload.type';
import { User } from 'src/entity/user.entity';
import { CreateUserDTO } from './dto/create.user.dto';
import { UpdateUserDTO } from './dto/update.user.dto';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'findUserId' })
  findOneId(@Args('userId') id: string) {
    return this.userService.findOne({ userId: id });
  }

  @Query(() => User, { name: 'findUserPrimaryId' })
  findUserPrimaryId(@Args('id') id: string) {
    return this.userService.findOne({ id });
  }

  @UseGuards(GraphqlAuthGuard)
  @Mutation(() => User, { name: 'createUser' })
  create(@Args('createUser') user: CreateUserDTO) {
    return this.userService.create(user);
  }

  @UseGuards(GraphqlAuthGuard)
  @Mutation(() => User, { name: 'updateUser' })
  update(@Args('updateUser') user: UpdateUserDTO, @Context() context: any) {
    const payload = context.req.user as JwtPayload;
    return this.userService.update(user, payload.sub);
  }
}
