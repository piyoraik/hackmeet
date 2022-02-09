import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column({ type: 'varchar', length: 30, nullable: false })
  @Field()
  name: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  @Field()
  nickname: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  @Field()
  description: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  @Field()
  userId: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  @Field()
  picture: string;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;

  @DeleteDateColumn()
  @Field()
  deletedAt: Date;
}
