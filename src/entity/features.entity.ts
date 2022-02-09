import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Recruit } from './recruits.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Feature {
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

  @ManyToMany(() => Recruit, (recruit) => recruit.features)
  recruits: Recruit[];
}
