import { Injectable } from '@nestjs/common';
import { ChatGroup } from 'src/entity/chat-group.entity';
import { UserService } from 'src/user/user.service';
import { WorkspaceService } from 'src/workspace/workspace.service';
import { ChatGroupRepository } from './chat-group.repository';
import {
  CreateChatGroupDTO,
  InputChatGroupDTO,
} from './dto/create.chat-group.dto';

@Injectable()
export class ChatGroupService {
  constructor(
    private readonly chatGroupRepository: ChatGroupRepository,
    private readonly workspaceService: WorkspaceService,
    private readonly userService: UserService,
  ) {}

  // create
  async create(inputChatGroupDTO: InputChatGroupDTO, userId: string) {
    const user = await this.userService.findOne({ userId });
    const workspace = await this.workspaceService.findOne({
      id: inputChatGroupDTO.id,
    });

    const createChatGroup: CreateChatGroupDTO = {
      user,
      workspace,
      name: inputChatGroupDTO.name,
      isPublic: inputChatGroupDTO.isPublic,
    };

    return await this.chatGroupRepository.createChatGroup(createChatGroup);
  }

  // findAll
  async findAll() {
    return await this.chatGroupRepository.find({
      relations: ['user', 'recruit'],
    });
  }

  // findOneID
  async findOneID(id: string) {
    return await this.chatGroupRepository.findOneChatGroup({ id });
  }

  // findOne
  async findOne(attrs: Partial<ChatGroup>) {
    return await this.chatGroupRepository.findOneChatGroup(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<ChatGroup>) {
    return await this.chatGroupRepository.findWhereLikeChatGroup(attrs);
  }

  // update
  async update(id: string, attrs: Partial<ChatGroup>) {
    return await this.chatGroupRepository.updateChatGroup(id, attrs);
  }

  // softDelete
  async softDelete(id: string) {
    return await this.chatGroupRepository.softDeleteChatGroup(id);
  }
}
