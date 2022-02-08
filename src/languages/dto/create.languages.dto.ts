import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateLanguagesDTO {
  @Field(() => String)
  name: string;

  @Field(() => String)
  icon: string;

  @Field(() => String)
  color: string;
}
