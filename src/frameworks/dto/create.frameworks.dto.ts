import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateFrameWorksDTO {
  id: string;
  @Field(() => String)
  name: string;
}
