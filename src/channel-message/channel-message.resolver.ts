import { UseGuards } from '@nestjs/common';
import {
  Args,
  Context,
  Mutation,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { GraphqlAuthGuard } from 'src/authz/authz.guard';
import { JwtPayload } from 'src/authz/types/jwt-payload.type';
import { ChannelMessage } from 'src/entity/channel-message.entity';
import { ChannelMessageService } from './channel-message.service';
import { InputChannelMessageDTO } from './dto/create.channelMessage.dto';

const pubSub = new PubSub();

@Resolver()
export class ChannelMessageResolver {
  constructor(private readonly channelMessageService: ChannelMessageService) {}

  @UseGuards(GraphqlAuthGuard)
  @Mutation(() => ChannelMessage, { name: 'createChannelMessage' })
  async create(
    @Args('createChannelMessage') message: InputChannelMessageDTO,
    @Context() context: any,
  ) {
    const payload = context.req.user as JwtPayload;
    const createMessage = await this.channelMessageService.create(
      message,
      payload.sub,
    );
    pubSub.publish('createChannelMessage', {
      createChannelMessage: createMessage,
    });
    return createMessage;
  }

  @Subscription(() => ChannelMessage, { name: 'createChannelMessage' })
  createdMessage() {
    return pubSub.asyncIterator('createChannelMessage');
  }
}
