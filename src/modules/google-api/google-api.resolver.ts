import { Resolver } from '@nestjs/graphql';
import { GoogleApiService } from './google-api.service';

@Resolver()
export class GoogleApiResolver {
  constructor(private readonly googleApiService: GoogleApiService) {}
}
