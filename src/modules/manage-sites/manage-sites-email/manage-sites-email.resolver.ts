import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { ManageSitesEmailService } from './manage-sites-email.service';

@Resolver('ManageSitesEmail')
export class ManageSitesEmailResolver {
  constructor(
    private readonly manageSitesEmailService: ManageSitesEmailService,
  ) {}

  @Mutation(() => Boolean)
  async sendManageSitesHtmlEmail(
    @Args('to') to: string,
    @Args('subject') subject: string,
    @Args('html') html: string,
  ): Promise<boolean> {
    try {
      await this.manageSitesEmailService.sendHtmlEmail(to, subject, html);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }
}
