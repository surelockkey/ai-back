import { Resolver } from '@nestjs/graphql';
import { ConstructedMetaInfoService } from './constructed-meta-info.service';

@Resolver()
export class ConstructedMetaInfoResolver {
  constructor(
    private readonly constructedMetaInfoService: ConstructedMetaInfoService,
  ) {}
}
