import { Args, Query, Resolver } from '@nestjs/graphql';
import { GoogleApiService } from './google-api.service';

@Resolver()
export class GoogleApiResolver {
  constructor(private readonly googleApiService: GoogleApiService) {}

  @Query(() => String)
  getSheets() {
    // return this.googleApiService.getSheets();
  }

  @Query(() => String)
  getGoogleAdsCustomers(@Args('refresh_token') refresh_token: string) {
    return this.googleApiService.getListCustomers(refresh_token);
  }
}
