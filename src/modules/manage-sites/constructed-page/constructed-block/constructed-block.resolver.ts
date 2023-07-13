import { Resolver } from '@nestjs/graphql';
import { ConstructedBlockService } from './constructed-block.service';

@Resolver()
export class ConstructedBlockResolver {
  constructor(
    private readonly constructedBlockService: ConstructedBlockService,
  ) {}
}
