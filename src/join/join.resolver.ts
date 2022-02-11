import { UseGuards } from '@nestjs/common';
import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { GraphqlAuthGuard } from 'src/authz/authz.guard';
import { JwtPayload } from 'src/authz/types/jwt-payload.type';
import { Join } from 'src/entity/join.entity';
import { InputJoinDTO } from './dto/create.join.dto';
import { JoinService } from './join.service';

@Resolver()
export class JoinResolver {
  constructor(private readonly joinService: JoinService) {}

  @Query(() => [Join], { name: 'joins' })
  findAll() {
    return this.joinService.findAll();
  }

  @UseGuards(GraphqlAuthGuard)
  create(@Args('createJoin') join: InputJoinDTO, @Context() context: any) {
    const payload = context.req.user as JwtPayload;
    return this.joinService.create(join, payload.sub);
  }
}
