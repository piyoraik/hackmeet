import { Field, ID, InputType } from '@nestjs/graphql';
import { Recruit } from 'src/entity/recruits.entity';

@InputType()
export class InputWorkspaceDTO {
  @Field(() => ID)
  recruit: string;
}

export class CreateWorkspaceDTO {
  recruit: Recruit;
}
