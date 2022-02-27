import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Feature } from './features.entity';
import { FrameWork } from './frameworks.entity';
import { Language } from './languages.entity';
import { User } from './user.entity';
import { Workspace } from './workspace.entity';

@Entity({
  orderBy: {
    createdAt: 'DESC',
  },
})
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

  @Field(() => Int)
  @Column({ type: 'int', nullable: false })
  peoples: number;

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

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;

  @DeleteDateColumn()
  @Field()
  deletedAt: Date;

  @ManyToOne(() => User, (user) => user.recruits)
  @Field(() => User)
  user: User;

  @OneToOne(() => Workspace, (workspace) => workspace.recruit)
  @Field(() => Workspace)
  workspace: Workspace;
}
