import { Module } from '@nestjs/common';
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

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
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
  ],
})
export class AppModule {}
