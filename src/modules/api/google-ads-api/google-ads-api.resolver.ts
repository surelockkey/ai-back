import { Resolver, Query } from '@nestjs/graphql';
import { GoogleAdsApiService } from './google-ads-api.service';
import { AdsCampaignDto } from './dto/ads-campaing';

@Resolver()
export class GoogleAdsApiResolver {
  constructor(
    private readonly googleAdsApiService: GoogleAdsApiService,
  ) { }

  // @UseGuards(GqlAuthGuard)
  @Query(() => [AdsCampaignDto])
  async getAdsApi(): Promise<AdsCampaignDto[]> {
    return await this.googleAdsApiService.getCampaigns();
  }

  @Query(() => String)
  async getAdsCustomer(): Promise<any> {
    return await this.googleAdsApiService.getListCustomers();
  }
}
