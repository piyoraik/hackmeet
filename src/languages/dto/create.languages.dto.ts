import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateLanguagesDTO {
  id: string;
  @Field(() => String)
  name: string;
}
