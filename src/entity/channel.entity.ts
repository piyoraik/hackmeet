import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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

  @ManyToOne(() => User, (user) => user.channels)
  @Field(() => User)
  user: User;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  isPublic: boolean;
}
