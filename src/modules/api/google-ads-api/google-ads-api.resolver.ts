import { Resolver, Query } from '@nestjs/graphql';
import { GoogleAdsApiService } from './google-ads-api.service';
import { AdCampaignDto } from './dto/ads-campaign.dto';
import { AdGroupDto } from './dto/ads-group.dto';
import { AdPageDto } from './dto/ads-page.dto';
import { AdAdUserLocationMetricsDto } from './dto/ad-user-location-view.dto';

@Resolver()
export class GoogleAdsApiResolver {
  constructor(private readonly googleAdsApiService: GoogleAdsApiService) { }

  // @UseGuards(GqlAuthGuard)
  @Query(() => String)
  async getAdAll(): Promise<String> {
    return await Promise.all([
      this.getAdAllCampaigns(),
      this.getAdAllGroups(),
      this.getAdAllPages(),
      this.getAdAllUserLocationMetrics(),
    ])
      .then(() => 'parsed')
      .catch((e) => {
        console.log(e);
        return 'failed';
      });
  }

  @Query(() => String)
  async getPreparedCampaign(): Promise<string> {
    await this.googleAdsApiService.getPreparedCampaign();
    return 'parsed';
  }

  @Query(() => [AdCampaignDto])
  async getAdCampaigns(): Promise<AdCampaignDto[]> {
    return await this.googleAdsApiService.getCampaignsByCustomer();
  }

  @Query(() => [AdCampaignDto])
  async getAdAllCampaigns(): Promise<AdCampaignDto[]> {
    return await this.googleAdsApiService.getAllCampaigns();
  }

  @Query(() => [AdGroupDto])
  async getAdGroups(): Promise<AdGroupDto[]> {
    return await this.googleAdsApiService.getGroups();
  }

  @Query(() => [AdGroupDto])
  async getAdAllGroups(): Promise<AdGroupDto[]> {
    return await this.googleAdsApiService.getAllGroups();
  }

  @Query(() => [String])
  async getAdCustomer(): Promise<string[]> {
    return await this.googleAdsApiService.getListCustomers();
  }

  @Query(() => [AdPageDto])
  async getAdPages(): Promise<AdPageDto[]> {
    return await this.googleAdsApiService.getADPages();
  }

  @Query(() => [AdPageDto])
  async getAdAllPages(): Promise<AdPageDto[]> {
    return await this.googleAdsApiService.getAllAdPages();
  }
  @Query(() => [AdAdUserLocationMetricsDto])
  async getAdAllUserLocationMetrics(): Promise<AdAdUserLocationMetricsDto[]> {
    return await this.googleAdsApiService.getAllAdUserLocationMetrics();
  }
}
