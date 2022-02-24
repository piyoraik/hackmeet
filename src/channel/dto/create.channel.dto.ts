import { Field, ID, InputType } from '@nestjs/graphql';
import { User } from 'src/entity/user.entity';
import { Workspace } from 'src/entity/workspace.entity';

@InputType()
export class InputChannelDTO {
  @Field(() => ID)
  workspaceId: string;

  @Field(() => String)
  name: string;

  @Field(() => Boolean)
  isPublic: boolean;
}

export class CreateChannelDTO {
  workspace: Workspace;

  user: User;

  name: string;

  isPublic: boolean;
}
