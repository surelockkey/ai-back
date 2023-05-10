import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { OpenAiModule } from './modules/open-ai/open-ai.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SystemSettingsModule } from './modules/system-settings/system-settings.module';
import { ChatModule } from './modules/chat/chat.module';
import { FineTuneModule } from './modules/fine-tune/fine-tune.module';
import config, {
  GqlConfigService,
  TypeOrmConfigService,
} from './core/config/config';
import { AuthorizationModule } from './modules/authorization/authorization.module';
import { LoggerModule } from './modules/logger/logger.module';
import { ApiModule } from './modules/api/api.module';
import { JobModule } from './modules/job/job.module';
import { TechScheduleModule } from './modules/tech-schedule/tech-schedule.module';
import { TechModule } from './modules/tech/tech.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: config,
      envFilePath: ['.env'],
    }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useClass: GqlConfigService,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    OpenAiModule,
    ChatModule,
    FineTuneModule,
    SystemSettingsModule,
    AuthorizationModule,
    LoggerModule,
    ApiModule,
    TechScheduleModule,
    TechModule,
    // JobModule,
  ],
})
export class AppModule {}
