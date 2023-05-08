import { Injectable } from '@nestjs/common';
import { GoogleAdsApi } from 'google-ads-api';
import { enums } from 'google-ads-api';

@Injectable()
export class GoogleAdsApiService {
  private readonly googleAdsClient: GoogleAdsApi;

  constructor() {
    this.googleAdsClient = new GoogleAdsApi({
      client_id:
        '1070488779420-4gll6h342doo5amo4jqc4t9hge6r6jbg.apps.googleusercontent.com',
      client_secret: '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',
      developer_token: 'jiS5ku6b6BGlYPIQLrIgSg',
    });
  }

  public async getListCustomers(refresh_token: string) {
    const res = await this.googleAdsClient.listAccessibleCustomers(
      refresh_token,
    );

    return res;
  }

  public async getCampaigns(
    login_customer_id: string,
    customer_id: string,
    refresh_token: string,
  ) {
    const customer = this.googleAdsClient.Customer({
      login_customer_id,
      customer_id,
      refresh_token,
    });

    const campaigns = await customer
      .report({
        entity: 'campaign',
        attributes: [
          'campaign.id',
          'campaign.name',
          'campaign.bidding_strategy_type',
          'campaign_budget.amount_micros',
        ],
        metrics: [
          'metrics.cost_micros',
          'metrics.clicks',
          'metrics.impressions',
          'metrics.all_conversions',
        ],
        constraints: {
          'campaign.status': enums.CampaignStatus.ENABLED,
        },
        limit: 20,
      })
      .catch((err) => {
        console.log(err);
      });

    console.log({ campaigns });

    return campaigns;
  }
}
