import { Field, ID, InputType } from '@nestjs/graphql';
import { Feature } from 'src/entity/features.entity';
import { FrameWork } from 'src/entity/frameworks.entity';
import { Language } from 'src/entity/languages.entity';
import { User } from 'src/entity/user.entity';

@InputType()
export class CreateRecruitsDTO {
  id: string;
  @Field(() => String)
  title: string;

  @Field(() => String)
  thumbnail: string;

  @Field(() => String)
  content: string;

  @Field(() => [ID])
  languages: string[];

  @Field(() => [ID])
  frameworks: string[];

  @Field(() => [ID])
  features: string[];
}

export class CreateRecruitType {
  languages: Language[];
  frameworks: FrameWork[];
  features: Feature[];
  user: User;
  id: string;
  title: string;
  thumbnail: string;
  content: string;
}
