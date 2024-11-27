import { Field, Float, ObjectType } from '@nestjs/graphql';
import { enums } from "google-ads-api";

@ObjectType()
export class AdGroupDto {
  @Field(() => Float)
  ad_group_id: number;

  @Field(() => String)
  ad_group_name: string;

  @Field(() => String)
  ad_group_status: enums.AdGroupStatus;

  @Field(() => Float)
  ad_group_cpc_bid_micros: number;

  @Field(() => [String])
  ad_group_labels: string[];

  @Field(() => Float)
  campaign_id: number;

  @Field(() => String)
  campaign_name: string;

  @Field(() => Float)
  metrics_clicks: number;

  @Field(() => Float)
  metrics_impressions: number;

  @Field(() => Float)
  metrics_ctr: number;

  @Field(() => Float)
  metrics_cost_micros: number;

  @Field(() => Float)
  metrics_conversions: number;

  @Field(() => String)
  segments_device: enums.Device;
}
