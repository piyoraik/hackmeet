import { Query, Resolver } from '@nestjs/graphql';
import { Join } from 'src/entity/join.entity';
import { JoinService } from './join.service';

@Resolver()
export class JoinResolver {
  constructor(private readonly joinService: JoinService) {}

  @Query(() => [Join], { name: 'joins' })
  findAll() {
    return this.joinService.findAll();
  }
}
