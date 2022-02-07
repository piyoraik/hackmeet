import { Field, ID, InputType } from '@nestjs/graphql';

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
