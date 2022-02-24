import { Module } from '@nestjs/common';
import { JoinService } from './join.service';
import { JoinResolver } from './join.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JoinRepository } from './join.repository';
import { UserModule } from 'src/user/user.module';
import { WorkspaceModule } from 'src/workspace/workspace.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([JoinRepository]),
    UserModule,
    WorkspaceModule,
  ],
  providers: [JoinService, JoinResolver],
  exports: [JoinService],
})
export class JoinModule {}
