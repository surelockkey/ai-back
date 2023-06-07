import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactController } from './contact.controller';
import { ContactResolver } from './contact.resolver';
import { ContactService } from './contact.service';
import { Contact } from './entity/contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contact])],
  controllers: [ContactController],
  providers: [ContactService, ContactResolver],
})
export class ContactModule {}
