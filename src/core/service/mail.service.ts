import { Injectable } from '@nestjs/common';
import { MailerOptionsFactory } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
// import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Injectable()
export class MailConfigService implements MailerOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  createMailerOptions() {
    return {
      transport: {
        host: this.configService.get('mail.host'),
        port: 465,
        secure: true,
        tls: { ciphers: 'SSLv3' },
        auth: {
          user: this.configService.get('mail.user'),
          pass: this.configService.get('mail.password'),
        },
      },
      defaults: {
        from: `"No Reply" <${this.configService.get('mail.from')}>`,
      },
      // template: {
      //   dir: __dirname + '/../../static/email-templates',
      //   adapter: new HandlebarsAdapter(),
      //   options: {
      //     strict: true,
      //   },
      // },
    };
  }
}
