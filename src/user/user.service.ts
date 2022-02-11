import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { CreateUserDTO } from './dto/create.user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  // create
  async create(createUserDTO: CreateUserDTO) {
    return await this.userRepository.createUser(createUserDTO);
  }

  // findAll
  async findAll() {
    return await this.userRepository.find({
      relations: ['recruits', 'joins'],
    });
  }

  // findOneID
  async findOneID(id: string) {
    return await this.userRepository.findOneUser({ id });
  }

  // findOne
  async findOne(attrs: Partial<User>) {
    return await this.userRepository.findOneUser(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<User>) {
    return await this.userRepository.findWhereLikeUser(attrs);
  }

  // update
  async update(id: string, attrs: Partial<User>) {
    return await this.userRepository.updateUser(id, attrs);
  }

  // softDelete
  async softDelete(id: string) {
    return await this.userRepository.softDeleteUser(id);
  }
}
