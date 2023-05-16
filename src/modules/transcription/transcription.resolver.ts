import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TranscriptionService } from './transcription.service';
import { Transcription } from './entity/transcription.entity';

@Resolver()
export class TranscriptionResolver {
  constructor(
    private readonly transcriptionService: TranscriptionService,
  ) {}

  @Query(() => Transcription)
  findTranscription(
    @Args('call_id', { type: () => String })
    call_id: string
  ): Promise<Transcription> {
    return this.transcriptionService.findOne({ ctm_call_id: call_id });
  }

  @Mutation(() => Transcription)
  speechToText(
    @Args('call_id', { type: () => String })
    call_id: string
  ): Promise<Transcription> {
    return this.transcriptionService.speechToText(call_id);
  }
}
