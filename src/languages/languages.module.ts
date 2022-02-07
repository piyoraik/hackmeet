import { Module } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { LanguagesResolver } from './languages.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguagesRepository } from './languages.repository';

@Module({
  imports: [TypeOrmModule.forFeature([LanguagesRepository])],
  providers: [LanguagesService, LanguagesResolver],
  exports: [LanguagesService],
})
export class LanguagesModule {}
