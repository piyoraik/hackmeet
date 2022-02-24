import { Module } from '@nestjs/common';
import { WorkspaceService } from './workspace.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkSpaceRepository } from './workspace.repository';
import { WorkspaceResolver } from './workspace.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([WorkSpaceRepository])],
  providers: [WorkspaceService, WorkspaceResolver],
  exports: [WorkspaceService],
})
export class WorkspaceModule {}
