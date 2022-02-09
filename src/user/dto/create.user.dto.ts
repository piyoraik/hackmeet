import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserDTO {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  nickname?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String)
  userId: string;

  @Field(() => String, { nullable: true })
  picture?: string;
}
