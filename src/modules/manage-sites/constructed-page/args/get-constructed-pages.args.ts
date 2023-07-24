import { ArgsType, Field } from '@nestjs/graphql';
import { FindPaginationDto } from 'src/core/dto/pagination.dto';
import { ConstructedPageType } from '../enum/constructed-page-type.enum';

@ArgsType()
export class GetConstructedPagesArgs {
  @Field(() => FindPaginationDto)
  pagination: FindPaginationDto;

  @Field(() => ConstructedPageType, { nullable: true })
  type?: ConstructedPageType;

  @Field(() => Boolean, { nullable: true })
  is_posted?: boolean;
}
