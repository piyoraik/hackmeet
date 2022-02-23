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
import { ChatGroupModule } from 'src/chat-group/chat-group.module';
import { ChatGroupRepository } from 'src/chat-group/chat-group.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([RecruitsRepository, ChatGroupRepository]),
    LanguagesModule,
    FrameworksModule,
    FeaturesModule,
    UserModule,
    WorkspaceModule,
    ChatGroupModule,
  ],
  providers: [RecruitsService, RecruitsResolver],
  exports: [RecruitsService],
})
export class RecruitsModule {}
