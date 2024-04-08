import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { CreateContactDto } from './dto/create-contact.dto';
import { CreateResumeDto } from './dto/create-resume.dto';
import { FileUpload } from 'graphql-upload';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entity/contact.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { MailService } from 'src/modules/mail/mail.service';

@Injectable()
export class ContactService {
  constructor(
    private readonly mailService: MailService,
    @InjectRepository(Contact) private contactRepository: Repository<Contact>,
    private readonly configService: ConfigService,
  ) {}

  async getAllContacts(): Promise<Contact[]> {
    return await this.contactRepository.find();
  }

  async createContact(
    createContactDto: CreateContactDto,
    user_ip: string,
  ): Promise<Contact> {
    const createdContact = this.contactRepository.create(createContactDto);
    createdContact.ip = user_ip;
    const stateLead = this.stateLeadChoose(createContactDto.state);
    const mail = this.configService.get('mail');

    return await this.contactRepository.save(createdContact).then((data) => {
      this.mailService.sendMail({
        to: mail.user,
        template: './add-contact',
        subject: 'New client from SureLock&Key LLC',
        context: {
          ...createContactDto,
          callback: createContactDto.callback ? 'Yes' : 'No',
          stateLead,
        },
      });
      return data;
    });
  }

  async sendResume(cv: FileUpload, resumeDto: CreateResumeDto) {
    const { createReadStream } = await cv;
    await new Promise((resolve) => {
      createReadStream()
        .pipe(fs.createWriteStream(__dirname + `/newFile.pdf`))
        .on('finish', () => resolve(true));
    });
    const mail = this.configService.get('mail');
    await this.mailService.sendMail({
      to: mail.user,
      template: './send-cv',
      subject: 'New resume to SureLock&Key LLC',
      attachments: [
        {
          filename: 'newFile.pdf',
          path: __dirname + '/../../contact/newFile.pdf',
          contentType: 'application/pdf',
          content: {
            ...resumeDto,
          },
        },
      ],
    });

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    fs.unlink(__dirname + '/newFile.pdf', () => {});

    return { status: 201 };
  }

  stateLeadChoose(state: string): string {
    switch (state) {
      case 'Texas':
        return '*TX leads';
      case 'Connecticut':
        return '*CT leads';
      case 'Arizona':
        return '*AZ leads';
      case 'New-York':
        return '*NY leads';
      case 'Rhode Island':
        return '*RI leads';
      default:
        return undefined;
    }
  }

  public async sendSlkGlobalInfo(file: Promise<FileUpload>, text: string) {
    const { createReadStream, mimetype, filename } = await file;

    console.log(filename, mimetype);

    await new Promise((resolve) => {
      createReadStream()
        .pipe(fs.createWriteStream(__dirname + `/${filename}`))
        .on('finish', () => resolve(true));
    });

    await this.mailService.sendMail({
      to: 'office@slk-s.com', // office@slk-s.com
      subject: 'New Website Request',
      text: text,
      attachments: [
        {
          filename: filename,
          path: __dirname + `/${filename}`,
          contentType: mimetype,
        },
      ],
    });

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    fs.unlink(__dirname + `/${filename}`, () => {});

    return { status: 201 };
  }
}
