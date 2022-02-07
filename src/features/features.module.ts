import { Module } from '@nestjs/common';
import { FeaturesService } from './features.service';
import { FeaturesResolver } from './features.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeaturesRepository } from './features.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FeaturesRepository])],
  providers: [FeaturesService, FeaturesResolver],
  exports: [FeaturesService],
})
export class FeaturesModule {}
