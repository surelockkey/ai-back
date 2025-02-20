import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TechnicianService } from './technician.service';
import { Technician } from './entity/technician.entity';
import { CreateTechnicianDto, UpdateTechnicianDto } from './dto/technician.dto';

@Resolver()
export class TechnicianResolver {
  constructor(private readonly technicianService: TechnicianService) {}

  @Mutation(() => Technician)
  createTechnician(
    @Args('technician', { type: () => CreateTechnicianDto })
    technician: CreateTechnicianDto,
  ) {
    return this.technicianService.createTechnician(technician);
  }

  @Mutation(() => Technician)
  updateTechnician(
    @Args('technician', { type: () => UpdateTechnicianDto })
    technician: UpdateTechnicianDto,
  ) {
    return this.technicianService.updateAndReturn(technician.id, technician);
  }

  @Mutation(() => ID)
  deleteTechnician(@Args('id', { type: () => ID }) id: string) {
    return this.technicianService.deleteByIdReturnId(id);
  }

  @Query(() => [Technician])
  getTechnicians() {
    return this.technicianService.findAll();
  }
}
