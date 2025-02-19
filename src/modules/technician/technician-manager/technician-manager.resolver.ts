import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TechnicianManagerService } from './technician-manager.service';
import { TechnicianManager } from './entity/technician-manager.entity';
import {
  CreateTechnicianManagerDto,
  UpdateTechnicianManagerDto,
} from './dto/technician-manager.dto';

@Resolver()
export class TechnicianManagerResolver {
  constructor(
    private readonly technicianManagerService: TechnicianManagerService,
  ) {}

  @Mutation(() => TechnicianManager)
  createTechnicianManager(
    @Args('technician_manager', { type: () => CreateTechnicianManagerDto })
    technician_manager: CreateTechnicianManagerDto,
  ) {
    return this.technicianManagerService.create(technician_manager);
  }

  @Mutation(() => TechnicianManager)
  updateTechnicianManager(
    @Args('technician_manager', { type: () => UpdateTechnicianManagerDto })
    technician_manager: UpdateTechnicianManagerDto,
  ) {
    return this.technicianManagerService.updateAndReturn(
      technician_manager.id,
      technician_manager,
    );
  }

  @Mutation(() => ID)
  deleteTechnicianManager(@Args('id', { type: () => ID }) id: string) {
    return this.technicianManagerService.deleteByIdReturnId(id);
  }

  @Query(() => [TechnicianManager])
  getTechnicianManagers() {
    return this.technicianManagerService.findAll();
  }
}
