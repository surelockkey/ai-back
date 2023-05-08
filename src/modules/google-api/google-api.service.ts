import { Injectable } from '@nestjs/common';
import { google, sheets_v4 } from 'googleapis';
import { GoogleAdsApi } from 'google-ads-api';
import { enums } from 'google-ads-api';

@Injectable()
export class GoogleApiService {
  private readonly auth;
  private google_sheets: sheets_v4.Sheets;
  private readonly googleAdsClient: GoogleAdsApi;

  constructor() {
    this.auth = new google.auth.GoogleAuth({
      keyFile: 'liquid-folio-385713-8f81f48d5101.json',
      scopes: 'https://www.googleapis.com/auth/spreadsheets',
    });
    this.googleAdsClient = new GoogleAdsApi({
      client_id:
        '1070488779420-4gll6h342doo5amo4jqc4t9hge6r6jbg.apps.googleusercontent.com',
      client_secret: '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',
      developer_token: 'jiS5ku6b6BGlYPIQLrIgSg',
    });

    this.loadAsync();
  }

  public async getListCustomers(refresh_token: string) {
    const oauth2Client = new google.auth.OAuth2({
      clientId:
        '1070488779420-4gll6h342doo5amo4jqc4t9hge6r6jbg.apps.googleusercontent.com',
      clientSecret: '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',
    });

    console.log('test');

    const tokens = await oauth2Client.getTokenInfo(refresh_token);

    console.log('test2');

    console.log({ tokens });

    const res = await this.googleAdsClient.listAccessibleCustomers(
      refresh_token,
    );

    console.log({ message: 'list', res });

    const customer = this.googleAdsClient.Customer({
      // customer_id: res.resource_names[2].replace('customers/', ''),
      login_customer_id: res.resource_names[2].replace('customers/', ''),
      customer_id: '7515481244',
      // login_customer_id: '7515481244',
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
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log({ campaigns });

    return res;
  }

  private async loadAsync() {
    const auth_client = await this.auth.getClient();

    this.google_sheets = google.sheets({ version: 'v4', auth: auth_client });
  }

  public async getSheets() {
    const sheet_id = '1zP51f9-mJ-Pfkl0DhJZow54A_ux5YTCvx0Y2i9BjlyQ';

    const res = await this.google_sheets.spreadsheets.values.get({
      auth: this.auth,
      spreadsheetId: sheet_id,
      range: 'Sheet1!A:A',
    });

    console.log(res.data);

    return res.data;
  }
}
