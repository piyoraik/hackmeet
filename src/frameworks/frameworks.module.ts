import { Module } from '@nestjs/common';
import { FrameworksService } from './frameworks.service';
import { FrameworksResolver } from './frameworks.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FrameworksRepository } from './frameworks.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FrameworksRepository])],
  providers: [FrameworksService, FrameworksResolver],
  exports: [FrameworksService],
})
export class FrameworksModule {}
