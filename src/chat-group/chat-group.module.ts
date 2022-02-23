import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { WorkspaceModule } from 'src/workspace/workspace.module';
import { ChatGroupRepository } from './chat-group.repository';
import { ChatGroupResolver } from './chat-group.resolver';
import { ChatGroupService } from './chat-group.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ChatGroupRepository]),
    WorkspaceModule,
    UserModule,
  ],
  providers: [ChatGroupResolver, ChatGroupService],
  exports: [ChatGroupService],
})
export class ChatGroupModule {}
