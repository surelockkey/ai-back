import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ContactService } from './contact.service';
import { UploadCV } from './args/upload-cv.args';
import { SlkGlobalInfoDto } from './dto/slk-global-info.dto';

@Resolver()
export class ContactResolver {
  constructor(private readonly contactService: ContactService) {}

  @Mutation(() => String)
  async uploadCV(
    @Args() { name, last_name, phone, email, file }: UploadCV,
  ): Promise<string> {
    await this.contactService.sendResume(await file, {
      name,
      last_name,
      phone,
      email,
    });
    return 'CV sended';
  }

  @Mutation(() => String)
  async sendSlkGlobalInfo(
    @Args() { file, text }: SlkGlobalInfoDto,
  ): Promise<string> {
    await this.contactService.sendSlkGlobalInfo(text, file);
    return 'Info sended';
  }
}
