import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphqlAuthGuard } from 'src/authz/authz.guard';
import { JwtPayload } from 'src/authz/types/jwt-payload.type';
import { Channel } from 'src/entity/channel.entity';
import { ChannelService } from './channel.service';
import { InputChannelDTO } from './dto/create.channel.dto';

@Resolver()
export class ChannelResolver {
  constructor(private readonly channelService: ChannelService) {}

  @Query(() => Channel, { name: 'findOneChannel' })
  findOneId(@Args('id') id: string) {
    return this.channelService.findOne({ id });
  }

  @UseGuards(GraphqlAuthGuard)
  @Mutation(() => Channel, { name: 'createChannel' })
  create(
    @Args('createChannel') channel: InputChannelDTO,
    @Context() context: any,
  ) {
    const payload = context.req.user as JwtPayload;
    return this.channelService.create(channel, payload.sub);
  }
}
