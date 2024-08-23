import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { Referral } from './entity/referral.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReferralDto, ReferralDto } from './dto/referral.dto';
import { MailService } from '../mail/mail.service';

@Injectable()
export class ReferralService extends CrudService<Referral> {
  constructor(
    @InjectRepository(Referral)
    private readonly referralRepository: Repository<Referral>,
    private readonly mailService: MailService,
  ) {
    super(referralRepository);
  }

  public async createReferral(referral: CreateReferralDto) {
    const created_referral = await this.create(referral);

    await this.mailService.sendMail({
      to: 'platinum@surelockkey.com',
      subject: 'New Referral',
      text: `
        First name: ${referral.first_name}\n
        ${referral.last_name ? `Last name: ${referral.last_name}\n` : ''}
        Phone: ${referral.phone}\n
        ${referral.address ? `Address: ${referral.address}\n` : ''}
        ${referral.service_type ? `Service type: ${referral.service_type}` : ''}
      `,
    });

    return created_referral;
  }
}
