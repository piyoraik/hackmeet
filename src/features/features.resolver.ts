import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { Feature } from '../entity/features.entity';
import { FeaturesService } from './features.service';

@Resolver()
export class FeaturesResolver {
  constructor(private readonly featureService: FeaturesService) {}

  @Query(() => [Feature], { name: 'features' })
  findAll() {
    return this.featureService.findAll();
  }
}
