import { Query, Resolver } from '@nestjs/graphql';
import { FrameworksService } from './frameworks.service';
import { FrameWork } from '../entity/frameworks.entity';

@Resolver()
export class FrameworksResolver {
  constructor(private readonly frameworkService: FrameworksService) {}

  @Query(() => [FrameWork], { name: 'frameworks' })
  findAll() {
    return this.frameworkService.findAll();
  }
}
