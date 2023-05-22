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
import { TechModule } from './modules/tech/tech.module';
import { JobModule } from './modules/job/job.module';
import { MailModule } from './modules/mail/mail.module';
import { TranscriptionModule } from './modules/transcription/transcription.module';
import { ItemTemplateModule } from './modules/car-inventory/item-template/item-template.module';
import { CarInventoryModule } from './modules/car-inventory/car-inventory.module';

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
    TechModule,
    JobModule,
    MailModule,
    TranscriptionModule,
    CarInventoryModule,
  ],
})
export class AppModule {}
