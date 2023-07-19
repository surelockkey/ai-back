import { Resolver } from '@nestjs/graphql';
import { ConstructedPhotoService } from './constructed-photo.service';

@Resolver()
export class ConstructedPhotoResolver {
  constructor(
    private readonly constructedPhotoService: ConstructedPhotoService,
  ) {}
}
