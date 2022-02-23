import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { RecruitsModule } from './recruits/recruits.module';
import { LanguagesModule } from './languages/languages.module';
import { FrameworksModule } from './frameworks/frameworks.module';
import { FeaturesModule } from './features/features.module';
import { AuthzModule } from './authz/authz.module';
import { UserModule } from './user/user.module';
import { JoinModule } from './join/join.module';
import { WorkspaceModule } from './workspace/workspace.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      playground: true,
    }),
    TypeOrmModule.forRoot(),
    RecruitsModule,
    LanguagesModule,
    FrameworksModule,
    FeaturesModule,
    AuthzModule,
    UserModule,
    JoinModule,
    WorkspaceModule,
  ],
})
export class AppModule {}
