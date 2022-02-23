import { Module } from '@nestjs/common';
import { WorkspaceService } from './workspace.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkSpaceRepository } from './workspace.repository';

@Module({
  imports: [TypeOrmModule.forFeature([WorkSpaceRepository])],
  providers: [WorkspaceService],
  exports: [WorkspaceService],
})
export class WorkspaceModule {}
