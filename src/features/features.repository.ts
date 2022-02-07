import { NotFoundException } from '@nestjs/common';
import { Feature } from 'src/entity/features.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateFeaturesDTO } from './dto/create.features.dto';

@EntityRepository(Feature)
export class FeaturesRepository extends Repository<Feature> {
  // Createの操作
  async createFrameWork(createFeaturesDTO: CreateFeaturesDTO) {
    const frameWork = this.create({
      ...createFeaturesDTO,
    });
    await this.save(frameWork);
    return frameWork;
  }

  // findOne
  async findOneFrameWork(attrs: Partial<Feature>) {
    const frameWork = await this.findOne(attrs);
    if (!frameWork) {
      throw new NotFoundException('FrameWork Not Found');
    }
    return frameWork;
  }

  // findWhere
  async findWhereLikeFrameWork(attrs: Partial<Feature>) {
    const parseAttrs: Partial<Feature> = {};
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
  async updateFrameWork(id: string, attrs: Partial<Feature>) {
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
