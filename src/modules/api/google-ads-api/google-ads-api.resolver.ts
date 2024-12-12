import { Resolver, Query } from '@nestjs/graphql';
import { GoogleAdsApiService } from './google-ads-api.service';
import { AdCampaignDto } from './dto/ads-campaign.dto';
import { AdGroupDto } from './dto/ads-group.dto';
import { AdDto } from './dto/ads-ad.dto';
import { AdCampaign } from './entity/ad-campaign.entity';

@Resolver()
export class GoogleAdsApiResolver {
  constructor(
    private readonly googleAdsApiService: GoogleAdsApiService,
  ) { }

  // @UseGuards(GqlAuthGuard)
  @Query(() => [AdCampaignDto])
  async getAdsCampaigns(): Promise<AdCampaignDto[]> {
    return await this.googleAdsApiService.getCampaignsByCustomer();
  }

  @Query(() => [AdCampaignDto])
  async getAdsAllCampaigns(): Promise<AdCampaignDto[]> {
    return await this.googleAdsApiService.getAllCampaigns();
  }

  @Query(() => [AdGroupDto])
  async getAdsGroups(): Promise<AdGroupDto[]> {
    return await this.googleAdsApiService.getGroups();
  }

  @Query(() => [AdGroupDto])
  async getAdsAllGroups(): Promise<AdGroupDto[]> {
    return await this.googleAdsApiService.getAllGroups();
  }

  @Query(() => [String])
  async getAdsCustomer(): Promise<string[]> {
    return await this.googleAdsApiService.getListCustomers();
  }

  @Query(() => [AdDto])
  async getADs(): Promise<AdDto[]> {
    return await this.googleAdsApiService.getAD();
  }
}
