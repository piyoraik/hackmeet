import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Recruit } from './recruits.entity';
import { User } from './user.entity';

@Entity()
@ObjectType()
export class FrameWork {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  @Field()
  name: string;

  @Column({ type: 'text', nullable: false })
  @Field()
  icon: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  @Field()
  color: string;

  @OneToMany(() => User, (user) => user.framework)
  @Field(() => User)
  users: User[];

  @ManyToMany(() => Recruit, (recruit) => recruit.frameworks)
  recruits: Recruit[];
}
