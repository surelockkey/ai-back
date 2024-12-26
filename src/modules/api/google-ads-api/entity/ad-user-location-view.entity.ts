import { enums } from "google-ads-api";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field, Float } from "@nestjs/graphql";

const prepareEnum = <T>(en: T): string[] => {
  return Object.values(en).filter((e) => typeof e === 'string');
};

@Entity("ad-location-view")
@ObjectType()
export class AdUserLocationMetrics {
  @Field(() => String, { nullable: true })
  @PrimaryGeneratedColumn()
  id?: string;

  // @Field(() => Number, { nullable: true })
  // @Column({ nullable: true, type: 'bigint' })
  // user_location_view_country_criterion_id?: number;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  location_view_resource_name?: string;


  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  campaign_name?: string;

  @Field(() => String, { nullable: true })
  @Column({
    type: 'enum',
    nullable: true,
    enum: prepareEnum(enums.CampaignStatus),
    default: null,
  })
  campaign_status?: string | enums.CampaignStatus;

  @Field(() => String, { nullable: true })
  @Column({
    type: 'enum',
    nullable: true,
    enum: prepareEnum(enums.CampaignPrimaryStatus),
    default: null,
  })
  campaign_primary_status?: string | enums.CampaignPrimaryStatus;


  // @Field(() => Boolean, { nullable: true })
  // @Column({ nullable: true })
  // user_location_view_targeting_location?: boolean;

  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // segments_geo_target_airport?: string;

  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // segments_geo_target_canton?: string;

  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // segments_geo_target_city?: string;

  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // segments_geo_target_county?: string;

  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // segments_geo_target_district?: string;

  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // segments_geo_target_metro?: string;

  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // segments_geo_target_postal_code?: string;

  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // segments_geo_target_most_specific_location?: string;

  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // segments_geo_target_province?: string;

  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // segments_geo_target_region?: string;

  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // segments_geo_target_state?: string;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'float', nullable: true })
  metrics_all_conversions?: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'float', nullable: true })
  metrics_all_conversions_from_interactions_rate?: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'float', nullable: true })
  metrics_all_conversions_value?: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'float', nullable: true })
  metrics_average_cost?: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'float', nullable: true })
  metrics_average_cpc?: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'float', nullable: true })
  metrics_average_cpm?: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'float', nullable: true })
  metrics_average_cpv?: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'float', nullable: true })
  metrics_average_cpe?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float', })
  metrics_clicks?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float', })
  metrics_conversions?: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'float', nullable: true })
  metrics_conversions_from_interactions_rate?: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'float', nullable: true })
  metrics_conversions_value?: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'float', nullable: true })
  metrics_cost_micros?: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'float', nullable: true })
  metrics_cost_per_all_conversions?: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'float', nullable: true })
  metrics_cost_per_conversion?: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'float', nullable: true })
  metrics_cross_device_conversions?: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'float', nullable: true })
  metrics_ctr?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_impressions?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_engagement_rate?: number;

  @Field(() => [String], { nullable: true })
  @Column({ nullable: true, array: true, type: 'text', default: [], enum: prepareEnum(enums.InteractionEventType) })
  metrics_interaction_event_types?: (string | enums.InteractionEventType)[];

  @Field(() => Float, { nullable: true })
  @Column({ type: 'float', nullable: true })
  metrics_interaction_rate?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_interactions?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_engagements?: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'float', nullable: true })
  metrics_value_per_all_conversions?: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'float', nullable: true })
  metrics_value_per_conversion?: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'float', nullable: true })
  metrics_video_view_rate?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_video_views?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_view_through_conversions?: number;

  // @Field(() => String, { nullable: true })
  // @Column({
  //   type: 'enum',
  //   nullable: true,
  //   enum: prepareEnum(enums.DayOfWeek),
  // default: null,
  // })
  // segments_day_of_week?: string | enums.DayOfWeek;

  // @Field(() => String, { nullable: true })
  // @Column({
  //   type: 'enum',
  //   nullable: true,
  //   enum: prepareEnum(enums.Device),
  // default: null,
  // })
  // segments_device?: string | enums.Device;
}
