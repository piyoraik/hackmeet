import { Field, ID, InputType } from '@nestjs/graphql';
import { User } from 'src/entity/user.entity';
import { Workspace } from 'src/entity/workspace.entity';

@InputType()
export class InputJoinDTO {
  @Field(() => ID)
  workspace: string;
}

export class CreateJoinDTO {
  user: User;
  workspace: Workspace;
}
