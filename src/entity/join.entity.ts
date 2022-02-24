import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Workspace } from './workspace.entity';

@Entity()
@ObjectType()
export class Join {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @ManyToOne(() => Workspace, (workspace) => workspace.joins)
  @Field(() => Workspace, { nullable: true })
  workspace: Workspace;

  @ManyToOne(() => User, (user) => user.joins)
  @Field(() => User, { nullable: true })
  user: User;
}
