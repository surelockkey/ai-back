import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDto {
  @ApiProperty({ type: () => String, example: 'TEST' }) //required: false,
  phone_number: string;

  @ApiProperty({ type: () => String, example: 'TEST' })
  name: string;

  @ApiProperty({ type: () => String, example: 'TEST' })
  email: string;

  @ApiProperty({ type: () => String, example: 'TEST' })
  message: string;

  @ApiProperty({ type: () => Boolean, example: true })
  callback: boolean;

  @ApiProperty({ type: () => String, example: 'TEST' })
  state: string;

  @ApiProperty({ type: () => String, example: 'TEST' })
  url: string;

  @ApiProperty({ type: () => String, example: 'TEST' })
  site: string;
}
