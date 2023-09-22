import { Mutation, Resolver } from '@nestjs/graphql';
import { CountieService } from './countie.service';
import { Countie } from './entity/countie.entity';

@Resolver()
export class CountieResolver {
  constructor(private readonly countieService: CountieService) {}

  @Mutation(() => Countie)
  saveCountie() {
    return this.countieService.saveAllCountie();
  }
}
