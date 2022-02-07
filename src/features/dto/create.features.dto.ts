import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateFeaturesDTO {
  id: string;
  @Field(() => String)
  name: string;
}
