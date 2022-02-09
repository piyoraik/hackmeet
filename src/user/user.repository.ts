import { NotFoundException } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create.user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  // Createの操作
  async createUser(createUser: CreateUserDTO) {
    const user = this.create({
      ...createUser,
    });
    await this.save(user);
    return user;
  }

  // findOne
  async findOneUser(attrs: Partial<User>) {
    const user = await this.findOne({
      where: attrs,
    });
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    return user;
  }

  // findWhere
  async findWhereLikeUser(attrs: Partial<User>) {
    const parseAttrs: Partial<User> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const users = await this.find({
      where: parseAttrs,
    });
    if (!users) {
      throw new NotFoundException('User Not Found');
    }
    return users;
  }

  // update
  async updateUser(id: string, attrs: Partial<User>) {
    const user = await this.findOneUser({ id });
    Object.assign(user, attrs);
    await this.save(user);
    return user;
  }

  // softDelete
  async softDeleteUser(id: string) {
    const user = await this.findOneUser({ id });
    await this.softRemove(user);
    return user;
  }
}
