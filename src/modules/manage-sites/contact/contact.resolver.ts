import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ContactService } from './contact.service';
import { UploadCV } from './args/upload-cv.args';
import { SlkGlobalInfoDto } from './dto/slk-global-info.dto';
import { RespondToDto } from './dto/respond-to.dto';

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

  @Mutation(() => String)
  async sendRespondTo(
    @Args() { file, text, email, title }: RespondToDto,
  ): Promise<string> {
    await this.contactService.sendSlkGlobalInfo(text, file, email, title);
    return 'Info sended';
  }
}
