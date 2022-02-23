import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { WorkspaceModule } from 'src/workspace/workspace.module';
import { ChannelRepository } from './channel.repository';
import { ChannelResolver } from './channel.resolver';
import { ChannelService } from './channel.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ChannelRepository]),
    WorkspaceModule,
    UserModule,
  ],
  providers: [ChannelResolver, ChannelService],
  exports: [ChannelService],
})
export class ChannelModule {}
