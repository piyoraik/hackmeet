import { Module } from '@nestjs/common';
import { RecruitsService } from './recruits.service';
import { RecruitsResolver } from './recruits.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecruitsRepository } from './recruits.repository';
import { LanguagesModule } from 'src/languages/languages.module';
import { FrameworksModule } from 'src/frameworks/frameworks.module';
import { FeaturesModule } from 'src/features/features.module';
import { UserModule } from 'src/user/user.module';
import { WorkspaceModule } from 'src/workspace/workspace.module';
import { ChannelModule } from 'src/channel/channel.module';
import { ChannelRepository } from 'src/channel/channel.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([RecruitsRepository, ChannelRepository]),
    LanguagesModule,
    FrameworksModule,
    FeaturesModule,
    UserModule,
    WorkspaceModule,
    ChannelModule,
  ],
  providers: [RecruitsService, RecruitsResolver],
  exports: [RecruitsService],
})
export class RecruitsModule {}
