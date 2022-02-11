import { NotFoundException } from '@nestjs/common';
import { Recruit } from 'src/entity/recruits.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateRecruitType } from './dto/create.recruits.dto';

@EntityRepository(Recruit)
export class RecruitsRepository extends Repository<Recruit> {
  // Createの操作
  async createRecruit(createRecruit: CreateRecruitType) {
    const recruit = this.create({
      ...createRecruit,
    });
    await this.save(recruit);
    return recruit;
  }

  // findOne
  async findOneRecruit(attrs: Partial<Recruit>) {
    const recruit = await this.findOne({
      where: attrs,
      relations: ['languages', 'frameworks', 'features', 'user', 'joins'],
    });
    if (!recruit) {
      throw new NotFoundException('Recruit Not Found');
    }
    return recruit;
  }

  // findWhere
  async findWhereLikeRecruit(attrs: Partial<Recruit>) {
    const parseAttrs: Partial<Recruit> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const recruits = await this.find({
      where: parseAttrs,
      relations: ['languages', 'frameworks', 'features', 'user', 'joins'],
    });
    if (!recruits) {
      throw new NotFoundException('Recruit Not Found');
    }
    return recruits;
  }

  // update
  async updateRecruit(id: string, attrs: Partial<Recruit>) {
    const recruit = await this.findOneRecruit({ id });
    Object.assign(recruit, attrs);
    await this.save(recruit);
    return recruit;
  }

  // softDelete
  async softDeleteRecruit(id: string) {
    const recruit = await this.findOneRecruit({ id });
    await this.softRemove(recruit);
    return recruit;
  }
}
