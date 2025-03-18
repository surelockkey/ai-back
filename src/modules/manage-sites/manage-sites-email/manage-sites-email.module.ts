import { Module } from '@nestjs/common';
import { ManageSitesEmailService } from './manage-sites-email.service';
import { ManageSitesEmailResolver } from './manage-sites-email.resolver';
import { MailModule } from 'src/modules/mail/mail.module';

@Module({
  imports: [MailModule],
  providers: [ManageSitesEmailService, ManageSitesEmailResolver],
  exports: [ManageSitesEmailService],
})
export class ManageSitesEmailModule {}
