import { ArgsType, Field, ID } from '@nestjs/graphql';
import { FindPaginationDto } from 'src/core/dto/pagination.dto';
import { ConstructedPageType } from '../enum/constructed-page-type.enum';

@ArgsType()
export class GetConstructedPagesArgs {
  @Field(() => FindPaginationDto, { nullable: true })
  pagination?: FindPaginationDto;

  @Field(() => ConstructedPageType, { nullable: true })
  type?: ConstructedPageType;

  @Field(() => Boolean, { nullable: true })
  is_posted?: boolean;

  @Field(() => ID, { nullable: true })
  constructed_page_company_id?: string;
}
