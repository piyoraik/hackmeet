import { Field, ID, InputType } from '@nestjs/graphql';
import { Recruit } from 'src/entity/recruits.entity';
import { User } from 'src/entity/user.entity';

@InputType()
export class InputJoinDTO {
  @Field(() => ID)
  recruit: string;
}

export class CreateJoinDTO {
  user: User;
  recruit: Recruit;
}
