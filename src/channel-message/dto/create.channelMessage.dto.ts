import { Field, ID, InputType } from '@nestjs/graphql';
import { Channel } from 'src/entity/channel.entity';
import { User } from 'src/entity/user.entity';

@InputType()
export class InputChannelMessageDTO {
  @Field(() => ID)
  channelId: string;

  @Field(() => String)
  message: string;
}

export class CreateChannelMessageDTO {
  channel: Channel;
  user: User;
  message: string;
}
