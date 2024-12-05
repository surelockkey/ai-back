import { Field, Float, ObjectType } from '@nestjs/graphql';
import { enums } from 'google-ads-api';

@ObjectType()
export class AdDto {
  // @Field(() => Float, { nullable: true })
  // ad_group_id: number;

  // @Field(() => String, { nullable: true })
  // ad_group_name: string;

  // @Field(() => String, { nullable: true })
  // ad_group_status: string | enums.AdGroupStatus;

  @Field(() => Float, { nullable: true })
  ad_id: number;

  @Field(() => String, { nullable: true })
  ad_type: string | enums.AdType;

  @Field(() => [String], { nullable: true })
  ad_final_urls?: string[];

  @Field(() => Float, { nullable: true })
  metrics_clicks?: number;

  @Field(() => Float, { nullable: true })
  metrics_impressions?: number;

  @Field(() => Float, { nullable: true })
  metrics_ctr?: number;

  @Field(() => Float, { nullable: true })
  metrics_cost_micros?: number;

  @Field(() => Float, { nullable: true })
  metrics_conversions?: number;
}
