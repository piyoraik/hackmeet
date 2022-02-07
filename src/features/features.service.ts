import { Injectable } from '@nestjs/common';
import { Feature } from 'src/entity/features.entity';
import { CreateFeaturesDTO } from './dto/create.features.dto';
import { FeaturesRepository } from './features.repository';

@Injectable()
export class FeaturesService {
  constructor(private readonly featureRepository: FeaturesRepository) {}

  // create
  async create(createfeatureDTO: CreateFeaturesDTO) {
    return await this.featureRepository.createFrameWork(createfeatureDTO);
  }

  // findAll
  async findAll() {
    return await this.featureRepository.find();
  }

  // findOneID
  async findOneID(id: string) {
    return await this.featureRepository.findOneFrameWork({ id });
  }

  // findOne
  async findOne(attrs: Partial<Feature>) {
    return await this.featureRepository.findOneFrameWork(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<Feature>) {
    return await this.featureRepository.findWhereLikeFrameWork(attrs);
  }

  // update
  async update(id: string, attrs: Partial<Feature>) {
    return await this.featureRepository.updateFrameWork(id, attrs);
  }

  // softDelete
  async softDelete(id: string) {
    return await this.featureRepository.softDeleteFrameWork(id);
  }
}
