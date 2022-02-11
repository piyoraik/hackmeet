import { NotFoundException } from '@nestjs/common';
import { Join } from 'src/entity/join.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateJoinDTO } from './dto/create.join.dto';

@EntityRepository(Join)
export class JoinRepository extends Repository<Join> {
  // Createの操作
  async createJoin(createJoin: CreateJoinDTO) {
    const join = this.create({
      ...createJoin,
    });
    await this.save(join);
    return join;
  }

  // findOne
  async findOneJoin(attrs: Partial<Join>) {
    const join = await this.findOne({
      where: attrs,
      relations: ['user', 'recruit'],
    });
    if (!join) {
      throw new NotFoundException('Join Not Found');
    }
    return join;
  }

  // findWhere
  async findWhereLikeJoin(attrs: Partial<Join>) {
    const parseAttrs: Partial<Join> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const joins = await this.find({
      where: parseAttrs,
      relations: ['user', 'recruit'],
    });
    if (!joins) {
      throw new NotFoundException('Join Not Found');
    }
    return joins;
  }

  // update
  async updateJoin(id: string, attrs: Partial<Join>) {
    const join = await this.findOneJoin({ id });
    Object.assign(join, attrs);
    await this.save(join);
    return join;
  }

  // softDelete
  async softDeleteJoin(id: string) {
    const join = await this.findOneJoin({ id });
    await this.softRemove(join);
    return join;
  }
}
