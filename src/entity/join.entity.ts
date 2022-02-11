import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Recruit } from './recruits.entity';
import { User } from './user.entity';

@Entity()
@ObjectType()
export class Join {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @ManyToOne(() => Recruit, (recruit) => recruit.joins)
  @Field(() => Recruit)
  recruit: Recruit;

  @ManyToOne(() => User, (user) => user.joins)
  @Field(() => User)
  user: User;
}
