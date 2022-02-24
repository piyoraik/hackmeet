import { Args, Query, Resolver } from '@nestjs/graphql';
import { Channel } from 'src/entity/channel.entity';
import { ChannelService } from './channel.service';

@Resolver()
export class ChannelResolver {
  constructor(private readonly channelService: ChannelService) {}

  @Query(() => Channel, { name: 'findOneChannel' })
  findOneId(@Args('id') id: string) {
    return this.channelService.findOne({ id });
  }
}
