import { NotFoundException } from '@nestjs/common';
import { ChatGroup } from 'src/entity/chat-group.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateChatGroupDTO } from './dto/create.chat-group.dto';

@EntityRepository(ChatGroup)
export class ChatGroupRepository extends Repository<ChatGroup> {
  // Createの操作
  async createChatGroup(createChatGroup: CreateChatGroupDTO) {
    const chatGroup = this.create({
      ...createChatGroup,
    });
    await this.save(chatGroup);
    return chatGroup;
  }

  // findOne
  async findOneChatGroup(attrs: Partial<ChatGroup>) {
    const chatGroup = await this.findOne({
      where: attrs,
      relations: ['user', 'recruit'],
    });
    if (!chatGroup) {
      throw new NotFoundException('ChatGroup Not Found');
    }
    return chatGroup;
  }

  // findWhere
  async findWhereLikeChatGroup(attrs: Partial<ChatGroup>) {
    const parseAttrs: Partial<ChatGroup> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const chatGroups = await this.find({
      where: parseAttrs,
      relations: ['user', 'recruit'],
    });
    if (!chatGroups) {
      throw new NotFoundException('ChatGroup Not Found');
    }
    return chatGroups;
  }

  // update
  async updateChatGroup(id: string, attrs: Partial<ChatGroup>) {
    const chatGroup = await this.findOneChatGroup({ id });
    Object.assign(chatGroup, attrs);
    await this.save(chatGroup);
    return chatGroup;
  }

  // softDelete
  async softDeleteChatGroup(id: string) {
    const chatGroup = await this.findOneChatGroup({ id });
    await this.softRemove(chatGroup);
    return chatGroup;
  }
}
