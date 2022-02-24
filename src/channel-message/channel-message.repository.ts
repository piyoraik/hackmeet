import { NotFoundException } from '@nestjs/common';
import { ChannelMessage } from 'src/entity/channel-message.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateChannelMessageDTO } from './dto/create.channelMessage.dto';

@EntityRepository(ChannelMessage)
export class ChannelMessageRepository extends Repository<ChannelMessage> {
  // Createの操作
  async createChannelMessage(createChannelMessage: CreateChannelMessageDTO) {
    const channelMessage = this.create({
      ...createChannelMessage,
    });
    await this.save(channelMessage);
    return channelMessage;
  }

  // findOne
  async findOneChannelMessage(attrs: Partial<ChannelMessage>) {
    const channelMessage = await this.findOne({
      where: attrs,
    });
    if (!channelMessage) {
      throw new NotFoundException('ChannelMessage Not Found');
    }
    return channelMessage;
  }

  // findWhere
  async findWhereLikeChannelMessage(attrs: Partial<ChannelMessage>) {
    const parseAttrs: Partial<ChannelMessage> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const channelMessages = await this.find({
      where: parseAttrs,
    });
    if (!channelMessages) {
      throw new NotFoundException('ChannelMessage Not Found');
    }
    return channelMessages;
  }

  // update
  async updateChannelMessage(id: string, attrs: Partial<ChannelMessage>) {
    const channelMessage = await this.findOneChannelMessage({ id });
    Object.assign(channelMessage, attrs);
    await this.save(channelMessage);
    return channelMessage;
  }

  // softDelete
  async softDeleteChannelMessage(id: string) {
    const channelMessage = await this.findOneChannelMessage({ id });
    await this.softRemove(channelMessage);
    return channelMessage;
  }
}
