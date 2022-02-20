import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserDTO {
  @Field(() => String, { nullable: true })
  nickname?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  picture?: string;
}
