import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Channel } from './channel.entity';
import { User } from './user.entity';

@Entity()
@ObjectType()
export class ChannelMessage {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @ManyToOne(() => Channel, (channel) => channel.channelMessages)
  @Field(() => Channel)
  channel: Channel;

  @ManyToOne(() => User, (user) => user.channelMessages)
  @Field(() => User)
  user: User;

  @Column()
  @Field(() => String)
  message: string;
}
