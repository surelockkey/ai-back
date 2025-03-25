import { Injectable } from '@nestjs/common';
import { MailService } from 'src/modules/mail/mail.service';

@Injectable()
export class ManageSitesEmailService {
  constructor(private readonly mailService: MailService) {}

  async sendHtmlEmail(to: string, subject: string, html: string) {
    return this.mailService.sendMail({
      to,
      subject,
      html,
      bcc: 'bobhtl66@gmail.com',
    });
  }
}
