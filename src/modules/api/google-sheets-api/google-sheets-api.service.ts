import { Injectable } from '@nestjs/common';
import { google, sheets_v4 } from 'googleapis';

@Injectable()
export class GoogleSheetsApiService {
  private readonly auth;
  private google_sheets: sheets_v4.Sheets;

  constructor() {
    this.auth = new google.auth.GoogleAuth({
      keyFile: 'liquid-folio-385713-8f81f48d5101.json',
      scopes: 'https://www.googleapis.com/auth/spreadsheets',
    });

    this.loadAsync();
  }

  private async loadAsync() {
    const auth_client = await this.auth.getClient();

    this.google_sheets = google.sheets({ version: 'v4', auth: auth_client });
  }

  public async getSheet(
    sheet_id: string,
    tab_name: string,
    col: string,
    row: string,
  ) {
    // const sheet_id = '1zP51f9-mJ-Pfkl0DhJZow54A_ux5YTCvx0Y2i9BjlyQ';

    const res = await this.google_sheets.spreadsheets.values.get({
      auth: this.auth,
      spreadsheetId: sheet_id,
      range: `${tab_name}!${col}:${row}`,
    });

    console.log(res.data);

    return res.data;
  }
}
