import { Resolver, Query } from '@nestjs/graphql';
import { GoogleAdsApiService } from './google-ads-api.service';
import { AdsCampaignDto } from './dto/ads-campaing';
import { AdGroupDto } from './dto/ads-group';

@Resolver()
export class GoogleAdsApiResolver {
  constructor(
    private readonly googleAdsApiService: GoogleAdsApiService,
  ) { }

  // @UseGuards(GqlAuthGuard)
  @Query(() => [AdsCampaignDto])
  async getAdsCampaigns(): Promise<AdsCampaignDto[]> {
    return await this.googleAdsApiService.getCampaigns();
  }

  @Query(() => [AdGroupDto])
  async getAdsGroups(): Promise<AdGroupDto[]> {
    return await this.googleAdsApiService.getGroups();
  }

  @Query(() => String)
  async getAdsCustomer(): Promise<any> {
    return await this.googleAdsApiService.getListCustomers();
  }
}
