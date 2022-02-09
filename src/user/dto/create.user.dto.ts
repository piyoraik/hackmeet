import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserDTO {
  @Field(() => String)
  name: string;

  @Field(() => String)
  nickname: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  userId: string;

  @Field(() => String)
  picture: string;
}
