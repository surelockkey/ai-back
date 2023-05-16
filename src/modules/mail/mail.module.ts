import { Global, Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailConfigService } from 'src/core/service/mail.service';

@Global()
@Module({
  imports: [MailerModule.forRootAsync({ useClass: MailConfigService })],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
