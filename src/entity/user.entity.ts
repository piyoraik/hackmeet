import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { Join } from './join.entity';
import { Recruit } from './recruits.entity';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  @Field({ nullable: true })
  name: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  @Field({ nullable: true })
  nickname: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  @Field({ nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  @Field()
  userId: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @Field({ nullable: true })
  picture: string;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;

  @DeleteDateColumn()
  @Field({ nullable: true })
  deletedAt: Date;

  @OneToMany(() => Recruit, (recruit) => recruit.user)
  @Field(() => [Recruit])
  recruits: Recruit[];

  @OneToMany(() => Join, (join) => join.recruit)
  @Field(() => [Join])
  joins: Join;
}
