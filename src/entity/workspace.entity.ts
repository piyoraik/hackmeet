import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
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
}
