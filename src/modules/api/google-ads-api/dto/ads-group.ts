import { Field, Float, ObjectType } from '@nestjs/graphql';
import { enums } from "google-ads-api";

@ObjectType()
export class AdGroupDto {
  @Field(() => Float, { nullable: true })
  ad_group_id: number;

  @Field(() => String, { nullable: true })
  ad_group_name: string;

  @Field(() => String, { nullable: true })
  ad_group_status: string | enums.AdGroupStatus;

  @Field(() => Float, { nullable: true })
  ad_group_cpc_bid_micros: number;

  @Field(() => [String], { nullable: true })
  ad_group_labels: string[];

  @Field(() => Float, { nullable: true })
  campaign_id: number;

  @Field(() => String, { nullable: true })
  campaign_name: string;

  @Field(() => Float, { nullable: true })
  metrics_clicks: number;

  @Field(() => Float, { nullable: true })
  metrics_impressions: number;

  @Field(() => Float, { nullable: true })
  metrics_ctr: number;

  @Field(() => Float, { nullable: true })
  metrics_cost_micros: number;

  @Field(() => Float, { nullable: true })
  metrics_conversions: number;

  @Field(() => String, { nullable: true })
  segments_device: string | enums.Device;
}
