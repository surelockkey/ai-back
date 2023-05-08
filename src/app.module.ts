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
// import { GoogleApiModule } from './modules/google-api/google-api.module';
import { ApiModule } from './modules/api/api.module';

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
    // GoogleApiModule,
    ApiModule,
  ],
})
export class AppModule {}
