import { Module } from '@nestjs/common';
import { JoinService } from './join.service';
import { JoinResolver } from './join.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JoinRepository } from './join.repository';
import { UserModule } from 'src/user/user.module';
import { RecruitsModule } from 'src/recruits/recruits.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([JoinRepository]),
    UserModule,
    RecruitsModule,
  ],
  providers: [JoinService, JoinResolver],
  exports: [JoinService],
})
export class JoinModule {}
