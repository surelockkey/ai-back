import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import {
  ApiBody,
  ApiExtraModels,
  ApiResponse,
  getSchemaPath,
} from '@nestjs/swagger';
import { LocksmithOld } from './entity/locksmith.entity';
import { FormMemberService } from './form-member.service';
import { Request } from './entity/request.entity';

@Controller('form-member')
export class FormMemberController {
  constructor(private readonly formMemberService: FormMemberService) {}

  @Get('search/:key_word')
  searchLocksmith(
    @Param('key_word') key_word?: string,
  ): Promise<LocksmithOld[]> {
    return this.formMemberService.searchLocksmithsFromController(key_word, 10);
  }

  @Get('locksmith-url/:locksmith_url')
  getLocksmithByUrl(
    @Param('locksmith_url') locksmith_url: string,
  ): Promise<LocksmithOld> {
    return this.formMemberService.getLocksmithByUrl(locksmith_url);
  }

  @ApiExtraModels(Request)
  @ApiResponse({
    status: 200,
    schema: {
      $ref: getSchemaPath(Request),
    },
  })
  @ApiBody({ type: () => CreateRequestDto })
  @Post('request')
  createRequest(@Body() createRequestDto: CreateRequestDto) {
    return this.formMemberService.createRequest(createRequestDto);
  }
}
