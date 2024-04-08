import {
  Body,
  CallHandler,
  Controller,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
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
  ApiConsumes,
  ApiExtraModels,
  ApiResponse,
  getSchemaPath,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { Observable } from 'rxjs';

@Injectable()
export class FileExtender implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    req.file['comment'] = req.body.comment;
    req.file['outletId'] = Number(req.body.outletId);
    return next.handle();
  }
}

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

  // @ApiConsumes('multipart/form-data')
  // @ApiBody({
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       // text: { type: 'string' },
  //       file: {
  //         type: 'string',
  //         format: 'binary',
  //       },
  //     },
  //   },
  // })
  // @Post('send_global')
  // // @UseInterceptors(FileExtender)
  // @UseInterceptors(FileInterceptor('file'))
  // sendGlobal(@UploadedFile('file') file) {
  //   console.log({
  //     file,
  //     // data,
  //   });
  // }
}
