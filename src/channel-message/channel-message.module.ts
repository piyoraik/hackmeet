import { Module } from '@nestjs/common';
import { ChannelMessageService } from './channel-message.service';
import { ChannelMessageResolver } from './channel-message.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelMessageRepository } from './channel-message.repository';
import { UserModule } from 'src/user/user.module';
import { ChannelModule } from 'src/channel/channel.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ChannelMessageRepository]),
    UserModule,
    ChannelModule,
  ],
  providers: [ChannelMessageService, ChannelMessageResolver],
  exports: [ChannelMessageService],
})
export class ChannelMessageModule {}
