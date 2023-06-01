import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ContactService } from './contact.service';
import { UploadCV } from './args/upload-cv.args';

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
}
