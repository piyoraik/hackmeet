import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Workspace } from './workspace.entity';

@Entity()
@ObjectType()
export class ChatGroup {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @ManyToOne(() => Workspace, (workspace) => workspace.chatGroups)
  @Field(() => Workspace)
  workspace: Workspace;

  @ManyToOne(() => User, (user) => user.chatGroups)
  @Field(() => User)
  user: User;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  isPublic: boolean;
}
