import { Args, Query, Resolver } from '@nestjs/graphql';
import { Workspace } from 'src/entity/workspace.entity';
import { WorkspaceService } from './workspace.service';

@Resolver()
export class WorkspaceResolver {
  constructor(private readonly workspaceService: WorkspaceService) {}

  @Query(() => Workspace, { name: 'findOneWorkspace' })
  findOneId(@Args('id') id: string) {
    return this.workspaceService.findOne({ id });
  }
}
