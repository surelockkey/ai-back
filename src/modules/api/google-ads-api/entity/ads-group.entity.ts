import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';
import { enums } from "google-ads-api";
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

const prepareEnum = <T>(en: T): string[] => {
  return Object.values(en).filter((e) => typeof e === 'string');
};

@Entity('ad-group')
@ObjectType()
export class AdGroup {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Number)
  @Column({ nullable: true, type: 'bigint' })
  ad_group_id: number;

  @Field(() => String, { nullable: true })
  @Column({
    type: 'enum',
    nullable: true,
    enum: prepareEnum(enums.AdGroupAdRotationMode),
    default: null,
  })
  ad_rotation_mode?: string | enums.AdGroupAdRotationMode;

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true, type: 'boolean' })
  audience_setting_use_audience_grouped?: boolean;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  base_ad_group?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  campaign?: string;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true, type: 'bigint' })
  cpc_bid_micros?: number;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true, type: 'bigint' })
  cpm_bid_micros?: number;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true, type: 'bigint' })
  cpv_bid_micros?: number;

  @Field(() => String, { nullable: true })
  @Column({
    type: 'enum',
    nullable: true,
    enum: prepareEnum(enums.TargetingDimension),
    default: null,
  })
  display_custom_bid_dimension?: string | enums.TargetingDimension;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true, type: 'int' })
  effective_cpc_bid_micros?: number;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true, type: 'int' })
  effective_target_cpa_micros?: number;

  @Field(() => String, { nullable: true })
  @Column({
    type: 'enum',
    nullable: true,
    enum: prepareEnum(enums.BiddingSource),
    default: null,
  })
  effective_target_cpa_source?: string | enums.BiddingSource;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true, type: 'int' })
  effective_target_roas?: number;

  @Field(() => String, { nullable: true })
  @Column({
    type: 'enum',
    nullable: true,
    enum: prepareEnum(enums.BiddingSource),
    default: null,
  })
  effective_target_roas_source?: string | enums.BiddingSource;

  @Field(() => [String], { nullable: true })
  @Column({
    type: 'enum',
    nullable: true,
    enum: prepareEnum(enums.AssetFieldType),
    default: null,
  })
  excluded_parent_asset_field_types?: (string | enums.AssetFieldType)[];

  @Field(() => [String], { nullable: true })
  @Column({ nullable: true, array: true, type: 'text', default: [] })
  excluded_parent_asset_set_types?: string[];

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  final_url_suffix?: string;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true, type: 'int' })
  fixed_cpm_micros?: number;

  @Field(() => [String], { nullable: true })
  @Column({ nullable: true, array: true, type: 'text', default: [] })
  labels?: string[];

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  name?: string;

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true, type: 'boolean' })
  optimized_targeting_enabled?: boolean;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true, type: 'int' })
  percent_cpc_bid_micros?: number;

  @Field(() => String, { nullable: true })
  status: string | enums.AdGroupStatus;

  @Field(() => [String], { nullable: true })
  @Column({ nullable: true, array: true, type: 'text', default: [] })
  primary_status_reasons: string[] | enums.AdGroupPrimaryStatusReason[];

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  resource_name?: string;

  @Field(() => String, { nullable: true })
  @Column({
    type: 'enum',
    nullable: true,
    enum: prepareEnum(enums.AdGroupPrimaryStatus),
    default: null,
  })
  primary_status: string | enums.AdGroupPrimaryStatus;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true, type: 'int' })
  target_cpa_micros?: number;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true, type: 'int' })
  target_cpm_micros?: number;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true, type: 'int' })
  target_cpv_micros?: number;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true, type: 'int' })
  target_roas?: number;

  @Field(() => [String], { nullable: true })
  @Column({
    type: 'enum',
    array: true,
    nullable: true,
    enum: prepareEnum(enums.TargetingDimension),
    default: null,
  })
  targeting_setting_target_restrictions?: (string | enums.TargetingDimension)[];

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  tracking_url_template: string;

  @Field(() => String, { nullable: true })
  @Column({
    type: 'enum',
    nullable: true,
    enum: prepareEnum(enums.AdGroupType),
    default: null,
  })
  type?: string | enums.AdGroupType;

  @Field(() => [String], { nullable: true })
  @Column({ nullable: true, array: true, type: 'text', default: [] })
  url_custom_parameters?: string[];

  @Field(() => String, { nullable: true })
  @Column({
    type: 'enum',
    nullable: true,
    enum: prepareEnum(enums.Slot),
    default: null,
  })
  segments_slot?: string | enums.Slot;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_active_view_ctr?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_all_conversions?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_average_cart_size?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_average_cost?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_average_cpc?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_average_cpe?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_average_cpm?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_average_cpv?: number;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true, type: 'int' })
  metrics_average_order_value_micros?: number;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true, type: 'int' })
  metrics_clicks?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_conversions?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_conversions_from_interactions_rate?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_conversions_from_interactions_value_per_interaction?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_conversions_value?: number;


  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_cost_micros?: number;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true, type: 'int' })
  metrics_cost_of_goods_sold_micros?: number;


  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_cost_per_conversion?: number;


  @Field(() => Int, { nullable: true })
  @Column({ nullable: true, type: 'int' })
  metrics_cross_sell_cost_of_goods_sold_micros?: number;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true, type: 'int' })
  metrics_cross_sell_gross_profit_micros?: number;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true, type: 'int' })
  metrics_cross_sell_revenue_micros?: number;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true, type: 'int' })
  metrics_cross_sell_units_sold?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_ctr?: number;


  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_engagement_rate?: number;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true, type: 'int' })
  metrics_engagements?: number;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true, type: 'int' })
  metrics_gmail_forwards?: number;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true, type: 'int' })
  metrics_gmail_saves?: number;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true, type: 'int' })
  metrics_gmail_secondary_clicks?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_gross_profit_margin?: number;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true, type: 'int' })
  metrics_gross_profit_micros?: number;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true, type: 'int' })
  metrics_impressions?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_interaction_rate?: number;

  @Field(() => [String], { nullable: true })
  @Column({ nullable: true, array: true, type: 'text', default: [] })
  metrics_interaction_event_types?: string[];

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true, type: 'int' })
  metrics_interactions?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_value_per_all_conversions?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_lead_cost_of_goods_sold_micros: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_lead_gross_profit_micros: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_lead_revenue_micros: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_lead_units_sold: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_new_customer_lifetime_value: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_orders: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_revenue_micros: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_units_sold: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_value_per_conversion: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_view_through_conversions: number;
}
