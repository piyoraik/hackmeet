import { NotFoundException } from '@nestjs/common';
import { Channel } from 'src/entity/channel.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateChannelDTO } from './dto/create.channel.dto';

@EntityRepository(Channel)
export class ChannelRepository extends Repository<Channel> {
  // Createの操作
  async createChannel(createChannel: CreateChannelDTO) {
    const channel = this.create({
      ...createChannel,
    });
    await this.save(channel);
    return channel;
  }

  // findOne
  async findOneChannel(attrs: Partial<Channel>) {
    const channel = await this.findOne({
      where: attrs,
      relations: [
        'user',
        'workspace',
        'workspace.recruit',
        'channelMessages',
        'channelMessages.user',
      ],
    });

    if (!channel) {
      throw new NotFoundException('Channel Not Found');
    }
    return channel;
  }

  // findWhere
  async findWhereLikeChannel(attrs: Partial<Channel>) {
    const parseAttrs: Partial<Channel> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const channels = await this.find({
      where: parseAttrs,
      relations: ['user', 'recruit'],
    });
    if (!channels) {
      throw new NotFoundException('Channel Not Found');
    }
    return channels;
  }

  // update
  async updateChannel(id: string, attrs: Partial<Channel>) {
    const channel = await this.findOneChannel({ id });
    Object.assign(channel, attrs);
    await this.save(channel);
    return channel;
  }

  // softDelete
  async softDeleteChannel(id: string) {
    const channel = await this.findOneChannel({ id });
    await this.softRemove(channel);
    return channel;
  }
}
