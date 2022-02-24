import { Injectable } from '@nestjs/common';
import { Join } from 'src/entity/join.entity';
import { UserService } from 'src/user/user.service';
import { WorkspaceService } from 'src/workspace/workspace.service';
import { CreateJoinDTO, InputJoinDTO } from './dto/create.join.dto';
import { JoinRepository } from './join.repository';

@Injectable()
export class JoinService {
  constructor(
    private readonly joinRepository: JoinRepository,
    private readonly userService: UserService,
    private readonly workspaceService: WorkspaceService,
  ) {}

  // create
  async create(inputJoinDTO: InputJoinDTO, userId: string) {
    const workspace = await this.workspaceService.findOneID(
      inputJoinDTO.workspace,
    );
    const user = await this.userService.findOne({ userId });

    const createJoin: CreateJoinDTO = {
      workspace,
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
