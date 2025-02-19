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
import { MailModule } from './modules/mail/mail.module';
import { TranscriptionModule } from './modules/transcription/transcription.module';
import { CarInventoryModule } from './modules/car-inventory/car-inventory.module';
import { UserModule } from './modules/user/user.module';
import { ManageSitesModule } from './modules/manage-sites/manage-sites.module';
import { CustomerAppModule } from './modules/customer-app/customer-app.module';
import { ReferralModule } from './modules/referral/referral.module';
import { TechnicianModule } from './modules/technician/technician.module';

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
    JobModule,
    MailModule,
    TranscriptionModule,
    CarInventoryModule,
    UserModule,
    ManageSitesModule,
    CustomerAppModule,
    ReferralModule,
    TechnicianModule,
  ],
  providers: [],
})
export class AppModule {}
