import { Injectable } from '@nestjs/common';
import { Channel } from 'src/entity/channel.entity';
import { UserService } from 'src/user/user.service';
import { WorkspaceService } from 'src/workspace/workspace.service';
import { ChannelRepository } from './channel.repository';
import { CreateChannelDTO, InputChannelDTO } from './dto/create.channel.dto';

@Injectable()
export class ChannelService {
  constructor(
    private readonly chatGroupRepository: ChannelRepository,
    private readonly workspaceService: WorkspaceService,
    private readonly userService: UserService,
  ) {}

  // create
  async create(inputChannelDTO: InputChannelDTO, userId: string) {
    const user = await this.userService.findOne({ userId });
    const workspace = await this.workspaceService.findOne({
      id: inputChannelDTO.id,
    });

    const createChannel: CreateChannelDTO = {
      user,
      workspace,
      name: inputChannelDTO.name,
      isPublic: inputChannelDTO.isPublic,
    };

    return await this.chatGroupRepository.createChannel(createChannel);
  }

  // findAll
  async findAll() {
    return await this.chatGroupRepository.find({
      relations: ['user', 'recruit'],
    });
  }

  // findOneID
  async findOneID(id: string) {
    return await this.chatGroupRepository.findOneChannel({ id });
  }

  // findOne
  async findOne(attrs: Partial<Channel>) {
    return await this.chatGroupRepository.findOneChannel(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<Channel>) {
    return await this.chatGroupRepository.findWhereLikeChannel(attrs);
  }

  // update
  async update(id: string, attrs: Partial<Channel>) {
    return await this.chatGroupRepository.updateChannel(id, attrs);
  }

  // softDelete
  async softDelete(id: string) {
    return await this.chatGroupRepository.softDeleteChannel(id);
  }
}
