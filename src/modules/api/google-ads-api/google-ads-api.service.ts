import { Injectable } from '@nestjs/common';
import { GoogleAdsApi, Customer, enums } from 'google-ads-api';
import { AdsCampaignDto } from './dto/ads-campaing';
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

  public async getCampaigns(): Promise<AdsCampaignDto[]> {

    try {
      const query = `
      SELECT
        campaign.id,
        campaign.name,
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
      WHERE
        campaign.status = 'ENABLED'
        `;
      // LIMIT 20

      const response = await this.customer.query(query)

      return response.map(({ campaign, metrics, campaign_budget }) => ({
        campaign_id: campaign.id,
        campaign_name: campaign.name,
        campaign_bidding_strategy_type: campaign.bidding_strategy_type as enums.BiddingStrategyType,
        campaign_budget_amount_micros: campaign_budget.amount_micros,
        campaign_labels: campaign.labels,
        metrics_cost_micros: metrics.cost_micros,
        metrics_clicks: metrics.clicks,
        metrics_impressions: metrics.impressions,
        metrics_all_conversions: metrics.all_conversions,
        metrics_conversions: metrics.conversions
      }));;


    } catch (error) {
      console.error("Google Ads API Error:", error);
      throw new Error(`Google Ads API Error: ${JSON.stringify(error, null, 2)}`);
    }
  }
}
