import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Recruit } from './recruits.entity';

@Entity()
@ObjectType()
export class Language {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  @Field()
  name: string;

  @ManyToMany(() => Recruit, (recruit) => recruit.languages)
  @Field(() => [Recruit])
  recruits: Recruit[];
}
