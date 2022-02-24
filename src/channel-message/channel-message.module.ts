import { Module } from '@nestjs/common';
import { ChannelMessageService } from './channel-message.service';
import { ChannelMessageResolver } from './channel-message.resolver';

@Module({
  providers: [ChannelMessageService, ChannelMessageResolver]
})
export class ChannelMessageModule {}
