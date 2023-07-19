import { Resolver } from '@nestjs/graphql';
import { ConstructedPreviewService } from './constructed-preview.service';

@Resolver()
export class ConstructedPreviewResolver {
  constructor(
    private readonly constructedPreviewService: ConstructedPreviewService,
  ) {}
}
