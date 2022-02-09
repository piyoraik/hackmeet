import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/entity/user.entity';
import { CreateUserDTO } from './dto/create.user.dto';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'findUserId' })
  findOneID(@Args('id') id: string) {
    return this.userService.findOneID(id);
  }

  @Mutation(() => User, { name: 'createUser' })
  create(@Args('createUser') user: CreateUserDTO) {
    return this.userService.create(user);
  }
}
