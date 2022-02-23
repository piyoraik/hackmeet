import { Module } from '@nestjs/common';
import { ChatGroupResolver } from './chat-group.resolver';

@Module({
  providers: [ChatGroupResolver]
})
export class ChatGroupModule {}
