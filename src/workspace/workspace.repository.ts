import { NotFoundException } from '@nestjs/common';
import { Recruit } from 'src/entity/recruits.entity';
import { Workspace } from 'src/entity/workspace.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';

@EntityRepository(Workspace)
export class WorkSpaceRepository extends Repository<Workspace> {
  // Createの操作
  async createWorkspace(recruit: Recruit) {
    const workspace = this.create({
      recruit,
    });
    await this.save(workspace);
    return workspace;
  }

  // findOne
  async findOneWorkspace(attrs: Partial<Workspace>) {
    const workspace = await this.findOne(attrs, {
      relations: ['recruit', 'joins', 'joins.user', 'channels'],
    });
    if (!workspace) {
      throw new NotFoundException('Workspace Not Found');
    }
    return workspace;
  }

  // findWhere
  async findWhereLikeWorkspace(attrs: Partial<Workspace>) {
    const parseAttrs: Partial<Workspace> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const workspaces = await this.find({
      where: parseAttrs,
    });
    if (!workspaces) {
      throw new NotFoundException('Workspace Not Found');
    }
    return workspaces;
  }

  // update
  async updateWorkspace(id: string, attrs: Partial<Workspace>) {
    const workspace = await this.findOneWorkspace({ id });
    Object.assign(workspace, attrs);
    await this.save(workspace);
    return workspace;
  }

  // softDelete
  async softDeleteWorkspace(id: string) {
    const workspace = await this.findOneWorkspace({ id });
    await this.softRemove(workspace);
    return workspace;
  }
}
