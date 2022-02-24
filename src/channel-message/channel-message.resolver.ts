import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphqlAuthGuard } from 'src/authz/authz.guard';
import { JwtPayload } from 'src/authz/types/jwt-payload.type';
import { ChannelMessage } from 'src/entity/channel-message.entity';
import { ChannelMessageService } from './channel-message.service';
import { InputChannelMessageDTO } from './dto/create.channelMessage.dto';

@Resolver()
export class ChannelMessageResolver {
  constructor(private readonly channelMessageService: ChannelMessageService) {}

  @UseGuards(GraphqlAuthGuard)
  @Mutation(() => ChannelMessage, { name: 'createChannelMessage' })
  create(
    @Args('createChannelMessage') message: InputChannelMessageDTO,
    @Context() context: any,
  ) {
    const payload = context.req.user as JwtPayload;
    return this.channelMessageService.create(message, payload.sub);
  }
}
