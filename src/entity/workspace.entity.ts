import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Recruit } from './recruits.entity';

@Entity()
@ObjectType()
export class Workspace {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @ManyToOne(() => Recruit, (recruit) => recruit.workspaces)
  @Field(() => Recruit)
  recruit: Recruit;

  @Column()
  @Field(() => String)
  name: string;
}
