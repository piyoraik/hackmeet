import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ChannelMessage } from './channel-message.entity';
import { User } from './user.entity';
import { Workspace } from './workspace.entity';

@Entity()
@ObjectType()
export class Channel {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @ManyToOne(() => Workspace, (workspace) => workspace.channels)
  @Field(() => Workspace)
  workspace: Workspace;

  @OneToMany(() => ChannelMessage, (channelMessage) => channelMessage.channel)
  @Field(() => [ChannelMessage])
  channelMessages: ChannelMessage[];

  @ManyToOne(() => User, (user) => user.channels)
  @Field(() => User)
  user: User;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => Boolean)
  isPublic: boolean;
}
