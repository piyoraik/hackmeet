import { Injectable } from '@nestjs/common';
import { Join } from 'src/entity/join.entity';
import { RecruitsService } from 'src/recruits/recruits.service';
import { UserService } from 'src/user/user.service';
import { CreateJoinDTO, InputJoinDTO } from './dto/create.join.dto';
import { JoinRepository } from './join.repository';

@Injectable()
export class JoinService {
  constructor(
    private readonly joinRepository: JoinRepository,
    private readonly userService: UserService,
    private readonly recruitService: RecruitsService,
  ) {}

  // create
  async create(inputJoinDTO: InputJoinDTO, userId: string) {
    const recruit = await this.recruitService.findOneID(inputJoinDTO.recruit);
    const user = await this.userService.findOne({ userId });

    const createJoin: CreateJoinDTO = {
      recruit,
      user,
    };

    return await this.joinRepository.createJoin(createJoin);
  }

  // findAll
  async findAll() {
    return await this.joinRepository.find({
      relations: ['user', 'recruit'],
    });
  }

  // findOneID
  async findOneID(id: string) {
    return await this.joinRepository.findOneJoin({ id });
  }

  // findOne
  async findOne(attrs: Partial<Join>) {
    return await this.joinRepository.findOneJoin(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<Join>) {
    return await this.joinRepository.findWhereLikeJoin(attrs);
  }

  // update
  async update(id: string, attrs: Partial<Join>) {
    return await this.joinRepository.updateJoin(id, attrs);
  }

  // softDelete
  async softDelete(id: string) {
    return await this.joinRepository.softDeleteJoin(id);
  }
}
