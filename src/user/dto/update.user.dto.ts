import { Field, InputType } from '@nestjs/graphql';
import { FrameWork } from 'src/entity/frameworks.entity';
import { Language } from 'src/entity/languages.entity';

@InputType()
export class UpdateUserDTO {
  @Field(() => String, { nullable: true })
  nickname?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  picture?: string;
}
