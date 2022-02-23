import { Resolver } from '@nestjs/graphql';
import { ChatGroupService } from './chat-group.service';

@Resolver()
export class ChatGroupResolver {
  constructor(private readonly chatGroupService: ChatGroupService) {}
}
