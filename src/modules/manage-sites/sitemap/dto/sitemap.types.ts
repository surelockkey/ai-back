import { InputType, OmitType } from '@nestjs/graphql';
import { Sitemap } from '../entity/sitemap.entity';

@InputType()
export class SitemapInput extends OmitType(
  Sitemap,
  ['id', 'company', 'company_id'],
  InputType,
) {}
