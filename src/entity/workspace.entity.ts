import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Channel } from './channel.entity';
import { Recruit } from './recruits.entity';

@Entity()
@ObjectType()
export class Workspace {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @OneToOne(() => Recruit)
  @JoinColumn()
  @Field(() => Recruit)
  recruit: Recruit;

  @OneToMany(() => Channel, (channel) => channel.workspace)
  @Field(() => [Channel])
  channels: Channel[];
}
