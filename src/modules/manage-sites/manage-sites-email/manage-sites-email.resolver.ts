import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { ManageSitesEmailService } from './manage-sites-email.service';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { FileUpload } from 'graphql-upload';

@Resolver('ManageSitesEmail')
export class ManageSitesEmailResolver {
  constructor(
    private readonly manageSitesEmailService: ManageSitesEmailService,
  ) { }

  @Mutation(() => Boolean)
  async sendManageSitesHtmlEmail(
    @Args('to') to: string,
    @Args('subject') subject: string,
    @Args('html') html: string,
    @Args({ name: 'attachments', type: () => [GraphQLUpload], nullable: true })
    attachments?: FileUpload[],
  ): Promise<boolean> {
    try {
      await this.manageSitesEmailService.sendHtmlEmail(
        to,
        subject,
        html,
        attachments,
      );
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }
}
