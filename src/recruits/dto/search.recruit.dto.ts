import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SearchRecruitsDTO {
  @Field(() => String, { nullable: true })
  title: string;

  @Field(() => [String], { nullable: true })
  languages: string[];

  @Field(() => [String], { nullable: true })
  frameworks: string[];

  @Field(() => [String], { nullable: true })
  features: string[];
}
