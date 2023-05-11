import { Injectable } from '@nestjs/common';
import { GoogleAuth } from 'google-auth-library';
import { sheets } from 'googleapis/build/src/apis/sheets';
import { GoogleSheetsTechSchedule } from './dto/tech-schedule.dto';

@Injectable()
export class GoogleSheetsApiService {
  private readonly auth;
  private google_sheets;

  constructor() {
    this.auth = new GoogleAuth({
      keyFile: 'liquid-folio-385713-8f81f48d5101.json',
      scopes: 'https://www.googleapis.com/auth/spreadsheets',
    });

    this.loadAsync();
  }

  private async loadAsync() {
    const auth_client = await this.auth.getClient();

    this.google_sheets = sheets({ version: 'v4', auth: auth_client });
  }

  public async getTechsSchedule(): Promise<GoogleSheetsTechSchedule[]> {
    const values = await this.getSheet(
      '1Tk9psKa1FaIw9DhttlI9dTV0rV6I29zinKROVCi2P_s',
      'Tech Weekly Schedule',
      'A',
      'K',
    );

    return this.transformTechTable(values);
  }

  private transformTechTable(values: string[][]) {
    const last_data = values[values.length - 1][9];

    let isFirstSkipped = false;
    const states = [
      'CT',
      'TX (Dallas)',
      'Subs Dallas',
      'TX (Houston)',
      'Subs Houston',
      'AZ(Arizona)',
      'AZ SUBS',
    ];
    let active_state = '';

    return values
      .filter((val) => {
        if (
          last_data === val[9] &&
          isFirstSkipped &&
          !states.includes(val[0])
        ) {
          return val;
        }
        if (last_data === val[9] && !isFirstSkipped) {
          isFirstSkipped = true;
        }
      })
      .map((value) => {
        if (last_data === value[9] && !isFirstSkipped) {
          isFirstSkipped = true;
        }

        if (states.includes(value[0])) {
          active_state = value[0];
        }

        return {
          name: value[0],
          monday: value[1],
          tuesday: value[2],
          wednesday: value[3],
          thursday: value[4],
          friday: value[5],
          saturday: value[6],
          sunday: value[7],
          note: value[8],
          week_start: value[9],
          week_end: value[10],
          active_state,
        };
      });
  }

  public async getSheet(
    sheet_id: string,
    tab_name: string,
    col: string,
    row: string,
  ) {
    const res = await this.google_sheets.spreadsheets.values.get({
      auth: this.auth,
      spreadsheetId: sheet_id,
      range: `${tab_name}!${col}:${row}`,
    });

    return res.data.values;
  }
}
