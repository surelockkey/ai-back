import { Injectable } from '@nestjs/common';
import { GoogleAuth } from 'google-auth-library';
import { google } from 'googleapis';

@Injectable()
export class GoogleApiService {
  private auth: GoogleAuth;
  private auth_client;

  constructor() {
    this.auth = new google.auth.GoogleAuth({
      keyFile: 'liquid-folio-385713-8f81f48d5101.json',
      scopes: 'https://www.googleapis.com/auth/spreadsheets',
    });

    // this.auth_client = await this.auth.getClient();
  }

  public static loadAsync() {
    // await this.a;
  }
}
