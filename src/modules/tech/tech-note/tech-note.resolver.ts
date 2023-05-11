import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { TechNoteService } from './tech-note.service';
import { TechNote } from './entity/tech-note.entity';
import { CreateTechNoteDto, UpdateTechNoteDto } from './dto/tech-note.dto';

@Resolver()
export class TechNoteResolver {
  constructor(private readonly techNoteService: TechNoteService) {}

  @Mutation(() => TechNote)
  createTechNote(
    @Args('tech_note', { type: () => CreateTechNoteDto })
    tech_note: CreateTechNoteDto,
  ) {
    return this.techNoteService.create(tech_note);
  }

  @Mutation(() => TechNote)
  updateTechNote(
    @Args('tech_note', { type: () => UpdateTechNoteDto })
    tech_note: UpdateTechNoteDto,
  ) {
    return this.techNoteService.updateAndReturn(tech_note.id, tech_note);
  }

  @Mutation(() => ID)
  deleteTechNote(@Args('id', { type: () => ID }) id: string) {
    return this.techNoteService.deleteById(id);
  }
}
