import { Module } from '@nestjs/common';
import { JoinService } from './join.service';
import { JoinResolver } from './join.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JoinRepository } from './join.repository';

@Module({
  imports: [TypeOrmModule.forFeature([JoinRepository])],
  providers: [JoinService, JoinResolver],
  exports: [JoinService],
})
export class JoinModule {}
