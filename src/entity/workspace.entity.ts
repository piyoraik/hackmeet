import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ChatGroup } from './chat-group.entity';
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

  @OneToMany(() => ChatGroup, (chatGroup) => chatGroup.workspace)
  @Field(() => [ChatGroup])
  chatGroups: ChatGroup[];
}
