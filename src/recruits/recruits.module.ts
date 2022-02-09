import { Module } from '@nestjs/common';
import { RecruitsService } from './recruits.service';
import { RecruitsResolver } from './recruits.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecruitsRepository } from './recruits.repository';
import { LanguagesModule } from 'src/languages/languages.module';
import { FrameworksModule } from 'src/frameworks/frameworks.module';
import { FeaturesModule } from 'src/features/features.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([RecruitsRepository]),
    LanguagesModule,
    FrameworksModule,
    FeaturesModule,
    UserModule,
  ],
  providers: [RecruitsService, RecruitsResolver],
})
export class RecruitsModule {}
