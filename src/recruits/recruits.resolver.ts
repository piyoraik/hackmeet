import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRecruitsDTO } from './dto/create.recruits.dto';
import { RecruitsService } from './recruits.service';
import { Recruit } from 'src/entity/recruits.entity';
import { UseGuards } from '@nestjs/common';
import { GraphqlAuthGuard } from 'src/authz/authz.guard';
import { JwtPayload } from 'src/authz/types/jwt-payload.type';
import { SearchRecruitsDTO } from './dto/search.recruit.dto';
import { Workspace } from 'src/entity/workspace.entity';

@Resolver()
export class RecruitsResolver {
  constructor(private readonly recruitsService: RecruitsService) {}

  @Query(() => [Recruit], { name: 'recruits' })
  findAll() {
    return this.recruitsService.findAll();
  }

  @Query(() => Recruit, { name: 'findOneIdRecruit' })
  findOneId(@Args('id') id: string) {
    const recruit = this.recruitsService.findOneID(id);
    return recruit;
  }

  @Query(() => [Recruit], { name: 'searchRecruit', nullable: true })
  search(@Args('searchRecruit') searchWord: SearchRecruitsDTO) {
    return this.recruitsService.findWhere(searchWord);
  }

  @UseGuards(GraphqlAuthGuard)
  @Mutation(() => Workspace, { name: 'createRecruit' })
  create(
    @Args('createRecruit') recruit: CreateRecruitsDTO,
    @Context() context: any,
  ) {
    const payload = context.req.user as JwtPayload;
    return this.recruitsService.create(recruit, payload.sub);
  }

  // @Mutation(() => Recruit, { name: 'updateRecruit' })
  // update(
  //   @Args('id') id: string,
  //   @Args('updateRecruit') adminUpdate: Partial<Recruit>,
  // ) {
  //   return this.recruitsService.update(id, adminUpdate);
  // }

  @Mutation(() => Recruit, { name: 'deleteRecruit' })
  delete(@Args('id') id: string) {
    return this.recruitsService.softDelete(id);
  }
}
