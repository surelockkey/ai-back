import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { Request } from 'express';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactSpamGuard } from './guard/contact-spam.guard';
import { ValidationCreateContactPipe } from './pipe/contact.pipe';
import { Contact } from './entity/contact.entity';
import {
  ApiBody,
  ApiExtraModels,
  ApiResponse,
  getSchemaPath,
} from '@nestjs/swagger';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @ApiExtraModels(Contact)
  @ApiResponse({
    status: 200,
    schema: {
      $ref: getSchemaPath(Contact),
    },
  })
  @ApiBody({ type: () => CreateContactDto })
  @Post('add_contact')
  @UseGuards(ContactSpamGuard)
  @UsePipes(ValidationCreateContactPipe) //TODO FIND OUT WHAT IS THE PURPOSE
  addContact(
    @Body() createContactDto: CreateContactDto,
    @Req() req: Request,
  ): Promise<Contact> {
    return this.contactService.createContact(
      createContactDto,
      (req.headers['x-real-ip'] || req.ip).toString(),
    );
  }
}
