import { Injectable } from '@nestjs/common';
import { ChannelService } from 'src/channel/channel.service';
import { ChannelMessage } from 'src/entity/channel-message.entity';
import { UserService } from 'src/user/user.service';
import { ChannelMessageRepository } from './channel-message.repository';
import { InputChannelMessageDTO } from './dto/create.channelMessage.dto';

@Injectable()
export class ChannelMessageService {
  constructor(
    private readonly channelMessageRepository: ChannelMessageRepository,
    private readonly channelService: ChannelService,
    private readonly userService: UserService,
  ) {}

  // create
  async create(inputChannelMessageDTO: InputChannelMessageDTO, userId: string) {
    const user = await this.userService.findOne({ userId });
    const channel = await this.channelService.findOne({
      id: inputChannelMessageDTO.channelId,
    });

    return await this.channelMessageRepository.createChannelMessage({
      user,
      channel,
      message: inputChannelMessageDTO.message,
    });
  }

  // findAll
  async findAll() {
    return await this.channelMessageRepository.find({});
  }

  // findOneID
  async findOneID(id: string) {
    return await this.channelMessageRepository.findOneChannelMessage({ id });
  }

  // findOne
  async findOne(attrs: Partial<ChannelMessage>) {
    return await this.channelMessageRepository.findOneChannelMessage(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<ChannelMessage>) {
    return await this.channelMessageRepository.findWhereLikeChannelMessage(
      attrs,
    );
  }

  // update
  async update(id: string, attrs: Partial<ChannelMessage>) {
    return await this.channelMessageRepository.updateChannelMessage(id, attrs);
  }

  // softDelete
  async softDelete(id: string) {
    return await this.channelMessageRepository.softDeleteChannelMessage(id);
  }
}
