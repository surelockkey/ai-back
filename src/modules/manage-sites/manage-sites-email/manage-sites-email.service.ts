import { Injectable } from '@nestjs/common';
import { MailService } from 'src/modules/mail/mail.service';
import { FileUpload } from 'graphql-upload';

@Injectable()
export class ManageSitesEmailService {
  constructor(private readonly mailService: MailService) { }

  async sendHtmlEmail(
    to: string,
    subject: string,
    html: string,
    attachments?: FileUpload[],
  ) {
    const mailOptions: any = {
      to,
      subject,
      html,
      bcc: 'bobhtl66@gmail.com',
    };

    // Process attachments if provided
    if (attachments && attachments.length > 0) {
      mailOptions.attachments = await Promise.all(
        attachments.map(async (fileUpload) => {
          const { createReadStream, filename, mimetype } = await fileUpload;
          const stream = createReadStream();

          // Convert stream to buffer
          const chunks: Buffer[] = [];
          for await (const chunk of stream) {
            chunks.push(chunk);
          }
          const buffer = Buffer.concat(chunks);

          return {
            filename,
            content: buffer,
            contentType: mimetype,
          };
        }),
      );
    }

    return this.mailService.sendMail(mailOptions);
  }
}
