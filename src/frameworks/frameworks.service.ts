import { Injectable } from '@nestjs/common';
import { FrameWork } from 'src/entity/frameworks.entity';
import { CreateFrameWorksDTO } from './dto/create.frameworks.dto';
import { FrameworksRepository } from './frameworks.repository';

@Injectable()
export class FrameworksService {
  constructor(private readonly frameworksRepository: FrameworksRepository) {}

  // create
  async create(createFrameWorksDTO: CreateFrameWorksDTO) {
    return await this.frameworksRepository.createFrameWork(createFrameWorksDTO);
  }

  // findAll
  async findAll() {
    return await this.frameworksRepository.find();
  }

  // findOneID
  async findOneID(id: string) {
    return await this.frameworksRepository.findOneFrameWork({ id });
  }

  // findOne
  async findOne(attrs: Partial<FrameWork>) {
    return await this.frameworksRepository.findOneFrameWork(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<FrameWork>) {
    return await this.frameworksRepository.findWhereLikeFrameWork(attrs);
  }

  // update
  async update(id: string, attrs: Partial<FrameWork>) {
    return await this.frameworksRepository.updateFrameWork(id, attrs);
  }

  // softDelete
  async softDelete(id: string) {
    return await this.frameworksRepository.softDeleteFrameWork(id);
  }
}
