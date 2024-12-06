import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';
import { enums } from "google-ads-api";

// @ObjectType()
// export class AdGroupDto {
//   @Field(() => Float, { nullable: true })
//   ad_group_id: number;

//   @Field(() => String, { nullable: true })
//   ad_group_name: string;

//   @Field(() => String, { nullable: true })
//   ad_group_status: string | enums.AdGroupStatus;

//   @Field(() => String, { nullable: true })
//   ad_group_primary_status: string | enums.AdGroupPrimaryStatus;

//   @Field(() => String, { nullable: true })
//   ad_group_tracking_url_template: string | enums.AdGroupPrimaryStatus;

//   @Field(() => Float, { nullable: true })
//   ad_group_cpc_bid_micros: number;

//   @Field(() => [String], { nullable: true })
//   ad_group_labels: string[];

//   @Field(() => [String], { nullable: true })
//   ad_group_primary_status_reasons: string[] | enums.AdGroupPrimaryStatusReason[];

//   @Field(() => Float, { nullable: true })
//   campaign_id: number;

//   @Field(() => String, { nullable: true })
//   campaign_name: string;

//   @Field(() => String, { nullable: true })
//   campaign_primary_status: string | enums.CampaignPrimaryStatus;

//   @Field(() => String, { nullable: true })
//   campaign_status: string | enums.CampaignStatus;

//   @Field(() => Float, { nullable: true })
//   metrics_clicks: number;

//   @Field(() => Float, { nullable: true })
//   metrics_impressions: number;

//   @Field(() => Float, { nullable: true })
//   metrics_ctr: number;

//   @Field(() => Float, { nullable: true })
//   metrics_cost_micros: number;

//   @Field(() => Float, { nullable: true })
//   metrics_conversions: number;

//   @Field(() => String, { nullable: true })
//   segments_device: string | enums.Device;
// }

@ObjectType()
export class AdGroupDto {
  @Field(() => Int)
  ad_group_id: number;

  @Field(() => String, { nullable: true })
  ad_rotation_mode?: string | enums.AdGroupAdRotationMode;

  @Field(() => Boolean, { nullable: true })
  audience_setting_use_audience_grouped?: boolean;

  @Field(() => String, { nullable: true })
  base_ad_group?: string;

  @Field(() => String, { nullable: true })
  campaign?: string;

  @Field(() => Number, { nullable: true })
  cpc_bid_micros?: number;

  @Field(() => Number, { nullable: true })
  cpm_bid_micros?: number;

  @Field(() => Number, { nullable: true })
  cpv_bid_micros?: number;

  @Field(() => String, { nullable: true })
  display_custom_bid_dimension?: string | enums.TargetingDimension;

  @Field(() => Number, { nullable: true })
  effective_cpc_bid_micros?: number;

  @Field(() => Number, { nullable: true })
  effective_target_cpa_micros?: number;

  @Field(() => String, { nullable: true })
  effective_target_cpa_source?: string | enums.BiddingSource;

  @Field(() => Number, { nullable: true })
  effective_target_roas?: number;

  @Field(() => String, { nullable: true })
  effective_target_roas_source?: string | enums.BiddingSource;

  @Field(() => [String], { nullable: true })
  excluded_parent_asset_field_types?: (string | enums.AssetFieldType)[];

  @Field(() => [String], { nullable: true })
  excluded_parent_asset_set_types?: string[];

  @Field(() => String, { nullable: true })
  final_url_suffix?: string;

  @Field(() => Number, { nullable: true })
  fixed_cpm_micros?: number;

  @Field(() => [String], { nullable: true })
  labels?: string[];

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Boolean, { nullable: true })
  optimized_targeting_enabled?: boolean;

  @Field(() => Number, { nullable: true })
  percent_cpc_bid_micros?: number;

  @Field(() => String, { nullable: true })
  status: string | enums.AdGroupStatus;

  @Field(() => [String], { nullable: true })
  primary_status_reasons: string[] | enums.AdGroupPrimaryStatusReason[];

  @Field(() => String, { nullable: true })
  resource_name?: string;

  @Field(() => String, { nullable: true })
  primary_status: string | enums.AdGroupPrimaryStatus;

  @Field(() => Number, { nullable: true })
  target_cpa_micros?: number;

  @Field(() => Number, { nullable: true })
  target_cpm_micros?: number;

  @Field(() => Number, { nullable: true })
  target_cpv_micros?: number;

  @Field(() => Number, { nullable: true })
  target_roas?: number;

  @Field(() => [String], { nullable: true })
  targeting_setting_target_restrictions?: (string | enums.TargetingDimension)[];

  @Field(() => String, { nullable: true })
  tracking_url_template: string | enums.AdGroupPrimaryStatus;

  @Field(() => String, { nullable: true })
  type?: string | enums.AdGroupType;

  @Field(() => String, { nullable: true })
  url_custom_parameters?: string;

  @Field(() => String, { nullable: true })
  activity_account_id?: string;

  @Field(() => String, { nullable: true })
  activity_city?: string;

  @Field(() => String, { nullable: true })
  activity_country?: string;

  @Field(() => Float, { nullable: true })
  activity_rating?: number;

  @Field(() => String, { nullable: true })
  activity_state?: string;

  @Field(() => String, { nullable: true })
  ad_destination_type?: string;

  @Field(() => String, { nullable: true })
  ad_format_type?: string;

  @Field(() => String, { nullable: true })
  ad_network_type?: string;

  @Field(() => String, { nullable: true })
  asset_interaction_target_asset?: string;

  @Field(() => Boolean, { nullable: true })
  asset_interaction_target_interaction_on_this_asset?: boolean;

  @Field(() => String, { nullable: true })
  auction_insight_domain?: string;

  @Field(() => String, { nullable: true })
  click_type?: string;

  @Field(() => String, { nullable: true })
  conversion_action?: string;

  @Field(() => String, { nullable: true })
  conversion_action_category?: string;

  @Field(() => String, { nullable: true })
  conversion_action_name?: string;

  @Field(() => Boolean, { nullable: true })
  conversion_adjustment?: boolean;

  @Field(() => String, { nullable: true })
  conversion_attribution_event_type?: string;

  @Field(() => String, { nullable: true })
  conversion_lag_bucket?: string;

  @Field(() => String, { nullable: true })
  conversion_or_adjustment_lag_bucket?: string;

  @Field(() => String, { nullable: true })
  date?: string;

  @Field(() => String, { nullable: true })
  day_of_week?: string;

  @Field(() => String, { nullable: true })
  device?: string;

  @Field(() => String, { nullable: true })
  external_activity_id?: string;

  @Field(() => String, { nullable: true })
  external_conversion_source?: string;

  @Field(() => String, { nullable: true })
  geo_target_airport?: string;

  @Field(() => String, { nullable: true })
  geo_target_canton?: string;

  @Field(() => String, { nullable: true })
  geo_target_city?: string;

  @Field(() => String, { nullable: true })
  geo_target_country?: string;

  @Field(() => String, { nullable: true })
  geo_target_county?: string;

  @Field(() => String, { nullable: true })
  geo_target_district?: string;

  @Field(() => String, { nullable: true })
  geo_target_metro?: string;

  @Field(() => String, { nullable: true })
  geo_target_most_specific_location?: string;

  @Field(() => String, { nullable: true })
  geo_target_postal_code?: string;

  @Field(() => String, { nullable: true })
  geo_target_province?: string;

  @Field(() => String, { nullable: true })
  geo_target_region?: string;

  @Field(() => String, { nullable: true })
  geo_target_state?: string;

  @Field(() => Int, { nullable: true })
  hotel_booking_window_days?: number;

  @Field(() => String, { nullable: true })
  hotel_center_id?: string;

  @Field(() => String, { nullable: true })
  hotel_check_in_date?: string;

  @Field(() => String, { nullable: true })
  hotel_check_in_day_of_week?: string;

  @Field(() => String, { nullable: true })
  hotel_city?: string;

  @Field(() => String, { nullable: true })
  hotel_class?: string;

  @Field(() => String, { nullable: true })
  hotel_country?: string;

  @Field(() => String, { nullable: true })
  hotel_date_selection_type?: string;

  @Field(() => Int, { nullable: true })
  hotel_length_of_stay?: number;

  @Field(() => String, { nullable: true })
  hotel_price_bucket?: string;

  @Field(() => String, { nullable: true })
  hotel_rate_rule_id?: string;

  @Field(() => String, { nullable: true })
  hotel_rate_type?: string;

  @Field(() => String, { nullable: true })
  hotel_state?: string;

  @Field(() => Int, { nullable: true })
  hour?: number;

  @Field(() => Boolean, { nullable: true })
  interaction_on_this_extension?: boolean;

  @Field(() => String, { nullable: true })
  month?: string;

  @Field(() => String, { nullable: true })
  month_of_year?: string;

  @Field(() => String, { nullable: true })
  new_versus_returning_customers?: string;

  @Field(() => String, { nullable: true })
  partner_hotel_id?: string;

  @Field(() => String, { nullable: true })
  placeholder_type?: string;

  @Field(() => String, { nullable: true })
  product_aggregator_id?: string;

  @Field(() => String, { nullable: true })
  product_brand?: string;

  @Field(() => String, { nullable: true })
  product_category_level1?: string;

  @Field(() => String, { nullable: true })
  product_category_level2?: string;

  @Field(() => String, { nullable: true })
  product_category_level3?: string;

  @Field(() => String, { nullable: true })
  product_category_level4?: string;

  @Field(() => String, { nullable: true })
  product_category_level5?: string;

  @Field(() => String, { nullable: true })
  product_channel?: string;

  @Field(() => String, { nullable: true })
  product_channel_exclusivity?: string;

  @Field(() => String, { nullable: true })
  product_condition?: string;

  @Field(() => String, { nullable: true })
  product_country?: string;

  @Field(() => String, { nullable: true })
  product_custom_attribute0?: string;

  @Field(() => String, { nullable: true })
  product_custom_attribute1?: string;

  @Field(() => String, { nullable: true })
  product_custom_attribute2?: string;

  @Field(() => String, { nullable: true })
  product_custom_attribute3?: string;

  @Field(() => String, { nullable: true })
  product_custom_attribute4?: string;

  @Field(() => String, { nullable: true })
  product_feed_label?: string;

  @Field(() => String, { nullable: true })
  product_item_id?: string;

  @Field(() => String, { nullable: true })
  product_language?: string;

  @Field(() => String, { nullable: true })
  product_merchant_id?: string;

  @Field(() => String, { nullable: true })
  product_store_id?: string;

  @Field(() => String, { nullable: true })
  product_title?: string;

  @Field(() => String, { nullable: true })
  product_type_l1?: string;

  @Field(() => String, { nullable: true })
  product_type_l2?: string;

  @Field(() => String, { nullable: true })
  product_type_l3?: string;

  @Field(() => String, { nullable: true })
  product_type_l4?: string;

  @Field(() => String, { nullable: true })
  product_type_l5?: string;

  @Field(() => String, { nullable: true })
  quarter?: string;

  @Field(() => String, { nullable: true })
  search_engine_results_page_type?: string;

  @Field(() => String, { nullable: true })
  slot?: string;

  @Field(() => Int, { nullable: true })
  week?: number;

  @Field(() => Int, { nullable: true })
  year?: number;

  @Field(() => Float, { nullable: true })
  absolute_top_impression_percentage?: number;

  @Field(() => Float, { nullable: true })
  active_view_cpm?: number;

  @Field(() => Float, { nullable: true })
  active_view_ctr?: number;

  @Field(() => Int, { nullable: true })
  active_view_impressions?: number;

  @Field(() => Float, { nullable: true })
  active_view_measurability?: number;

  @Field(() => Int, { nullable: true })
  active_view_measurable_cost_micros?: number;

  @Field(() => Int, { nullable: true })
  active_view_measurable_impressions?: number;

  @Field(() => Float, { nullable: true })
  active_view_viewability?: number;

  @Field(() => Float, { nullable: true })
  all_conversions?: number;

  @Field(() => Float, { nullable: true })
  all_conversions_by_conversion_date?: number;

  @Field(() => Float, { nullable: true })
  all_conversions_from_interactions_rate?: number;

  @Field(() => Float, { nullable: true })
  all_conversions_from_interactions_value_per_interaction?: number;

  @Field(() => Float, { nullable: true })
  all_conversions_value?: number;

  @Field(() => Float, { nullable: true })
  all_conversions_value_by_conversion_date?: number;

  @Field(() => Float, { nullable: true })
  all_conversions_value_per_cost?: number;

  @Field(() => Float, { nullable: true })
  all_new_customer_lifetime_value?: number;

  @Field(() => Float, { nullable: true })
  auction_insight_search_absolute_top_impression_percentage?: number;

  @Field(() => Float, { nullable: true })
  auction_insight_search_impression_share?: number;

  @Field(() => Float, { nullable: true })
  auction_insight_search_outranking_share?: number;

  @Field(() => Float, { nullable: true })
  auction_insight_search_overlap_rate?: number;

  @Field(() => Float, { nullable: true })
  auction_insight_search_position_above_rate?: number;

  @Field(() => Float, { nullable: true })
  auction_insight_search_top_impression_percentage?: number;

  @Field(() => Float, { nullable: true })
  average_cart_size?: number;

  @Field(() => Float, { nullable: true })
  average_cost?: number;

  @Field(() => Float, { nullable: true })
  average_cpc?: number;

  @Field(() => Float, { nullable: true })
  average_cpe?: number;

  @Field(() => Float, { nullable: true })
  average_cpm?: number;

  @Field(() => Float, { nullable: true })
  average_cpv?: number;

  @Field(() => Int, { nullable: true })
  average_order_value_micros?: number;

  @Field(() => Float, { nullable: true })
  average_page_views?: number;

  @Field(() => Float, { nullable: true })
  average_time_on_site?: number;

  @Field(() => Float, { nullable: true })
  benchmark_average_max_cpc?: number;

  @Field(() => Float, { nullable: true })
  biddable_app_install_conversions?: number;

  @Field(() => Float, { nullable: true })
  biddable_app_post_install_conversions?: number;

  @Field(() => Float, { nullable: true })
  bounce_rate?: number;

  @Field(() => Int, { nullable: true })
  clicks?: number;

  @Field(() => Float, { nullable: true })
  content_budget_lost_impression_share?: number;

  @Field(() => Float, { nullable: true })
  content_impression_share?: number;

  @Field(() => Float, { nullable: true })
  content_rank_lost_impression_share?: number;

  @Field(() => Float, { nullable: true })
  conversions?: number;

  @Field(() => Float, { nullable: true })
  conversions_by_conversion_date?: number;

  @Field(() => Float, { nullable: true })
  conversions_from_interactions_rate?: number;

  @Field(() => Float, { nullable: true })
  conversions_from_interactions_value_per_interaction?: number;

  @Field(() => Float, { nullable: true })
  conversions_value?: number;

  @Field(() => Float, { nullable: true })
  conversions_value_by_conversion_date?: number;

  @Field(() => Float, { nullable: true })
  conversions_value_per_cost?: number;

  @Field(() => Int, { nullable: true })
  cost_micros?: number;

  @Field(() => Int, { nullable: true })
  cost_of_goods_sold_micros?: number;

  @Field(() => Float, { nullable: true })
  cost_per_all_conversions?: number;

  @Field(() => Float, { nullable: true })
  cost_per_conversion?: number;

  @Field(() => Float, { nullable: true })
  cost_per_current_model_attributed_conversion?: number;

  @Field(() => Float, { nullable: true })
  cross_device_conversions?: number;

  @Field(() => Int, { nullable: true })
  cross_device_conversions_value_micros?: number;

  @Field(() => Int, { nullable: true })
  cross_sell_cost_of_goods_sold_micros?: number;

  @Field(() => Int, { nullable: true })
  cross_sell_gross_profit_micros?: number;

  @Field(() => Int, { nullable: true })
  cross_sell_revenue_micros?: number;

  @Field(() => Int, { nullable: true })
  cross_sell_units_sold?: number;

  @Field(() => Float, { nullable: true })
  ctr?: number;

  @Field(() => Float, { nullable: true })
  current_model_attributed_conversions?: number;

  @Field(() => Float, { nullable: true })
  current_model_attributed_conversions_from_interactions_rate?: number;

  @Field(() => Float, { nullable: true })
  current_model_attributed_conversions_from_interactions_value_per_interaction?: number;

  @Field(() => Float, { nullable: true })
  current_model_attributed_conversions_value?: number;

  @Field(() => Float, { nullable: true })
  current_model_attributed_conversions_value_per_cost?: number;

  @Field(() => Float, { nullable: true })
  engagement_rate?: number;

  @Field(() => Int, { nullable: true })
  engagements?: number;

  @Field(() => Int, { nullable: true })
  gmail_forwards?: number;

  @Field(() => Int, { nullable: true })
  gmail_saves?: number;

  @Field(() => Int, { nullable: true })
  gmail_secondary_clicks?: number;

  @Field(() => Float, { nullable: true })
  gross_profit_margin?: number;

  @Field(() => Int, { nullable: true })
  gross_profit_micros?: number;

  @Field(() => Int, { nullable: true })
  impressions?: number;

  @Field(() => Float, { nullable: true })
  interaction_rate?: number;

  @Field(() => Int, { nullable: true })
  interactions?: number;

  @Field(() => Float, { nullable: true })
  value_per_all_conversions?: number;
}
