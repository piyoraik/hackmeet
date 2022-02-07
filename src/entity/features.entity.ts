import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Recruit } from './recruits.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Feature {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  @Field()
  name: string;

  @ManyToMany(() => Recruit, (recruit) => recruit.features)
  recruits: Recruit[];
}
