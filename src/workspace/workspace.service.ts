import { Injectable } from '@nestjs/common';
import { Recruit } from 'src/entity/recruits.entity';
import { Workspace } from 'src/entity/workspace.entity';
import { WorkSpaceRepository } from './workspace.repository';

@Injectable()
export class WorkspaceService {
  constructor(private readonly workspaceRepository: WorkSpaceRepository) {}

  // create
  async create(recruit: Recruit) {
    return await this.workspaceRepository.createWorkspace(recruit);
  }

  // findAll
  async findAll() {
    return await this.workspaceRepository.find({
      relations: ['user', 'recruit'],
    });
  }

  // findOneID
  async findOneID(id: string) {
    return await this.workspaceRepository.findOneWorkspace({ id });
  }

  // findOne
  async findOne(attrs: Partial<Workspace>) {
    return await this.workspaceRepository.findOneWorkspace(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<Workspace>) {
    return await this.workspaceRepository.findWhereLikeWorkspace(attrs);
  }

  // update
  async update(id: string, attrs: Partial<Workspace>) {
    return await this.workspaceRepository.updateWorkspace(id, attrs);
  }

  // softDelete
  async softDelete(id: string) {
    return await this.workspaceRepository.softDeleteWorkspace(id);
  }
}
