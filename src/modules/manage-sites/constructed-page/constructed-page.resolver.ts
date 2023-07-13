import { Resolver } from '@nestjs/graphql';
import { ConstructedPageService } from './constructed-page.service';

@Resolver()
export class ConstructedPageResolver {
  constructor(
    private readonly constructedPageService: ConstructedPageService,
  ) {}
}
