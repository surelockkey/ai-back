import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class ContactSpamGuard implements CanActivate {
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const userIP = context.switchToHttp().getRequest().headers['x-real-ip'];

    const nowMinusHour = new Date();
    nowMinusHour.setHours(nowMinusHour.getHours() - 1);

    const createdWithThisIp = await this.dataSource
      .getRepository('Contact')
      .find({ where: { ip: userIP } });

    if (createdWithThisIp.length < 10) {
      return true;
    } else {
      return false;
    }
  }
}
