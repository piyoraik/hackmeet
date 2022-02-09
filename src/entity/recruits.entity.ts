import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Feature } from './features.entity';
import { FrameWork } from './frameworks.entity';
import { Language } from './languages.entity';

@Entity()
@ObjectType()
export class Recruit {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'varchar', length: 36, nullable: false })
  title: string;

  @Field()
  @Column({ type: 'varchar', length: 20, nullable: false })
  thumbnail: string;

  @Field()
  @Column({ type: 'text', nullable: false })
  content: string;

  @Field(() => [Language], { defaultValue: [] })
  @ManyToMany(() => Language, (language) => language.recruits)
  @JoinTable()
  languages: Language[];

  @Field(() => [FrameWork], { defaultValue: [] })
  @ManyToMany(() => FrameWork, (framework) => framework.recruits)
  @JoinTable()
  frameworks: FrameWork[];

  @Field(() => [Feature], { defaultValue: [] })
  @ManyToMany(() => Feature, (feature) => feature.recruits)
  @JoinTable()
  features: Feature[];

  @Column({ type: 'varchar', length: 50, nullable: false })
  userId: string;

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
