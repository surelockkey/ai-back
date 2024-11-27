import { Injectable } from '@nestjs/common';
import { GoogleAdsApi, Customer, enums } from 'google-ads-api';
import { AdsCampaignDto } from './dto/ads-campaing';
import { AdGroupDto } from './dto/ads-group';
@Injectable()
export class GoogleAdsApiService {
  private readonly credentials = {
    client_id: process.env.GOOGLE_ADS_CLIENT_ID,
    client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET,
    developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN,
  }

  private readonly customer_credentials = {
    customer_id: process.env.GOOGLE_ADS_CUSTOMER_ID,
    refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN,
  }

  private readonly googleAdsClient: GoogleAdsApi;
  private readonly customer: Customer;

  constructor() {
    this.googleAdsClient = new GoogleAdsApi(this.credentials);
    this.customer = this.googleAdsClient.Customer(this.customer_credentials)

    console.log(this.credentials);

  }

  public async getListCustomers() {
    const res = await this.googleAdsClient.listAccessibleCustomers(
      this.customer_credentials.refresh_token,
    );

    console.log(res);

    return res;
  }

  public async getGroups(): Promise<AdGroupDto[]> {

    try {
      const query = `
        SELECT
          ad_group.id,
          ad_group.name,
          ad_group.status,
          ad_group.primary_status,
          ad_group.cpc_bid_micros,
          ad_group.labels,
          ad_group.tracking_url_template,
          campaign.id,
          campaign.name,
          metrics.clicks,
          metrics.impressions,
          metrics.ctr,
          metrics.cost_micros,
          metrics.conversions,
          segments.device
        FROM
          ad_group
        WHERE
          ad_group.primary_status = 'ELIGIBLE'
        `;


      const response = await this.customer.query(query)

      return response.map(({ ad_group, campaign, metrics, segments }) => ({
        ad_group_id: ad_group.id,
        ad_group_name: ad_group.name,
        ad_group_status: enums.AdGroupStatus[ad_group.status],
        ad_group_primary_status: enums.AdGroupPrimaryStatus[ad_group.primary_status],
        ad_group_cpc_bid_micros: ad_group.cpc_bid_micros,
        ad_group_labels: ad_group.labels,
        ad_group_tracking_url_template: ad_group.tracking_url_template,
        campaign_id: campaign.id,
        campaign_name: campaign.name,
        metrics_clicks: metrics.clicks,
        metrics_impressions: metrics.impressions,
        metrics_ctr: metrics.ctr,
        metrics_cost_micros: metrics.cost_micros,
        metrics_conversions: metrics.conversions,
        segments_device: enums.Device[segments.device],
      }));


    } catch (error) {
      console.error("Google Ads API Error:", error);
      throw new Error(`Google Ads API Error: ${JSON.stringify(error, null, 2)}`);
    }
  }
  public async getCampaigns(): Promise<AdsCampaignDto[]> {

    try {
      const query = `
      SELECT
        campaign.id,
        campaign.name,
        campaign.status,
        campaign.primary_status,
        campaign.bidding_strategy_type,
        campaign_budget.amount_micros,
        campaign.labels,
        metrics.cost_micros,
        metrics.clicks,
        metrics.impressions,
        metrics.all_conversions,
        metrics.conversions
      FROM
        campaign
      `;
      // LIMIT 20

      const response = await this.customer.query(query)

      return response
        .filter(({ campaign }) => campaign.primary_status === 'ELIGIBLE' || campaign.primary_status === null)
        .map(({ campaign, metrics, campaign_budget }) => ({
          campaign_id: campaign.id,
          campaign_name: campaign.name,
          campaign_status: enums.CampaignStatus[campaign.status],
          campaign_primary_status: enums.AdGroupPrimaryStatus[campaign.primary_status],
          campaign_bidding_strategy_type: enums.BiddingStrategyType[campaign.bidding_strategy_type],
          campaign_budget_amount_micros: campaign_budget.amount_micros,
          campaign_labels: campaign.labels,
          metrics_cost_micros: metrics.cost_micros,
          metrics_clicks: metrics.clicks,
          metrics_impressions: metrics.impressions,
          metrics_all_conversions: metrics.all_conversions,
          metrics_conversions: metrics.conversions
        }));


    } catch (error) {
      console.error("Google Ads API Error:", error);
      throw new Error(`Google Ads API Error: ${JSON.stringify(error, null, 2)}`);
    }
  }
}
