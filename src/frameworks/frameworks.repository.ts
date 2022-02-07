import { NotFoundException } from '@nestjs/common';
import { FrameWork } from 'src/entity/frameworks.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateFrameWorksDTO } from './dto/create.frameworks.dto';

@EntityRepository(FrameWork)
export class FrameworksRepository extends Repository<FrameWork> {
  // Createの操作
  async createFrameWork(createFrameWorkDTO: CreateFrameWorksDTO) {
    const frameWork = this.create({
      ...createFrameWorkDTO,
    });
    await this.save(frameWork);
    return frameWork;
  }

  // findOne
  async findOneFrameWork(attrs: Partial<FrameWork>) {
    const frameWork = await this.findOne(attrs);
    if (!frameWork) {
      throw new NotFoundException('FrameWork Not Found');
    }
    return frameWork;
  }

  // findWhere
  async findWhereLikeFrameWork(attrs: Partial<FrameWork>) {
    const parseAttrs: Partial<FrameWork> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const frameWorks = await this.find({
      where: parseAttrs,
    });
    if (!frameWorks) {
      throw new NotFoundException('FrameWork Not Found');
    }
    return frameWorks;
  }

  // update
  async updateFrameWork(id: string, attrs: Partial<FrameWork>) {
    const frameWork = await this.findOneFrameWork({ id });
    Object.assign(frameWork, attrs);
    await this.save(frameWork);
    return frameWork;
  }

  // softDelete
  async softDeleteFrameWork(id: string) {
    const frameWork = await this.findOneFrameWork({ id });
    await this.softRemove(frameWork);
    return frameWork;
  }
}
