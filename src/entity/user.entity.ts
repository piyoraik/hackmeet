import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Channel } from './channel.entity';
import { FrameWork } from './frameworks.entity';
import { Join } from './join.entity';
import { Language } from './languages.entity';
import { Recruit } from './recruits.entity';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  @Field({ nullable: true })
  nickname: string;

  @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
  @Field()
  userId: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @Field({ nullable: true })
  picture: string;

  @ManyToOne(() => Language, (language) => language.users)
  @Field(() => Language)
  language: Language;

  @ManyToOne(() => FrameWork, (framework) => framework.users)
  @Field(() => FrameWork)
  framework: FrameWork;

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

  @OneToMany(() => Channel, (channel) => channel.user)
  channels: Channel[];
}
