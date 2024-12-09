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
  @Field(() => Float)
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

  @Field(() => [String], { nullable: true })
  url_custom_parameters?: string[];

  @Field(() => Float, { nullable: true })
  segments_activity_account_id?: number;

  // @Field(() => String, { nullable: true })
  // segments_activity_city?: string;

  // @Field(() => String, { nullable: true })
  // segments_activity_country?: string;

  // @Field(() => Float, { nullable: true })
  // segments_activity_rating?: number;

  // @Field(() => String, { nullable: true })
  // segments_activity_state?: string;

  // @Field(() => String, { nullable: true })
  // segments_ad_destination_type?: string | enums.AdDestinationType;

  // @Field(() => String, { nullable: true })
  // segments_ad_format_type?: string | enums.AdFormatType;

  // @Field(() => String, { nullable: true })
  // segments_ad_network_type?: string | enums.AdNetworkType;

  // @Field(() => String, { nullable: true })
  // segments_asset_interaction_target_asset?: string;

  // @Field(() => Boolean, { nullable: true })
  // segments_asset_interaction_target_interaction_on_this_asset?: boolean;

  // @Field(() => String, { nullable: true })
  // segments_auction_insight_domain?: string;

  // @Field(() => String, { nullable: true })
  // segments_click_type?: string | enums.ClickType;

  // @Field(() => String, { nullable: true })
  // segments_conversion_action?: string;

  // @Field(() => String, { nullable: true })
  // segments_conversion_action_category?: string | enums.ConversionActionCategory;

  // @Field(() => String, { nullable: true })
  // segments_conversion_action_name?: string;

  // @Field(() => Boolean, { nullable: true })
  // segments_conversion_adjustment?: boolean;

  // @Field(() => String, { nullable: true })
  // segments_conversion_attribution_event_type?: string | enums.ConversionAttributionEventType;

  // @Field(() => String, { nullable: true })
  // segments_conversion_lag_bucket?: string | enums.ConversionLagBucket;

  // @Field(() => String, { nullable: true })
  // segments_conversion_or_adjustment_lag_bucket?: string | enums.ConversionOrAdjustmentLagBucket;

  // @Field(() => String, { nullable: true })
  // segments_date?: string;

  // @Field(() => String, { nullable: true })
  // segments_day_of_week?: string | enums.DayOfWeek;

  // @Field(() => String, { nullable: true })
  // segments_device?: string | enums.Device;

  // @Field(() => String, { nullable: true })
  // segments_external_activity_id?: string;

  // @Field(() => String, { nullable: true })
  // segments_external_conversion_source?: string | enums.ExternalConversionSource;

  // @Field(() => String, { nullable: true })
  // segments_geo_target_airport?: string;

  // @Field(() => String, { nullable: true })
  // segments_geo_target_canton?: string;

  // @Field(() => String, { nullable: true })
  // segments_geo_target_city?: string;

  // @Field(() => String, { nullable: true })
  // segments_geo_target_country?: string;

  // @Field(() => String, { nullable: true })
  // segments_geo_target_county?: string;

  // @Field(() => String, { nullable: true })
  // segments_geo_target_district?: string;

  // @Field(() => String, { nullable: true })
  // segments_geo_target_metro?: string;

  // @Field(() => String, { nullable: true })
  // segments_geo_target_most_specific_location?: string;

  // @Field(() => String, { nullable: true })
  // segments_geo_target_postal_code?: string;

  // @Field(() => String, { nullable: true })
  // segments_geo_target_province?: string;

  // @Field(() => String, { nullable: true })
  // segments_geo_target_region?: string;

  // @Field(() => String, { nullable: true })
  // segments_geo_target_state?: string;

  // @Field(() => Int, { nullable: true })
  // segments_hotel_booking_window_days?: number;

  // @Field(() => Float, { nullable: true })
  // segments_hotel_center_id?: number;

  // @Field(() => String, { nullable: true })
  // segments_hotel_check_in_date?: string;

  // @Field(() => String, { nullable: true })
  // segments_hotel_check_in_day_of_week?: string | enums.DayOfWeek;

  // @Field(() => String, { nullable: true })
  // segments_hotel_city?: string;

  // @Field(() => Int, { nullable: true })
  // segments_hotel_class?: number;

  // @Field(() => String, { nullable: true })
  // segments_hotel_country?: string;

  // @Field(() => String, { nullable: true })
  // segments_hotel_date_selection_type?: string | enums.HotelDateSelectionType;

  // @Field(() => Int, { nullable: true })
  // segments_hotel_length_of_stay?: number;

  // @Field(() => String, { nullable: true })
  // segments_hotel_price_bucket?: string | enums.HotelPriceBucket;

  // @Field(() => String, { nullable: true })
  // segments_hotel_rate_rule_id?: string;

  // @Field(() => String, { nullable: true })
  // segments_hotel_rate_type?: string | enums.HotelRateType;

  // @Field(() => String, { nullable: true })
  // segments_hotel_state?: string;

  // @Field(() => Int, { nullable: true })
  // segments_hour?: number;

  // @Field(() => Boolean, { nullable: true })
  // segments_interaction_on_this_extension?: boolean;

  // @Field(() => String, { nullable: true })
  // segments_month?: string;

  // @Field(() => String, { nullable: true })
  // segments_month_of_year?: string | enums.MonthOfYear;

  // @Field(() => String, { nullable: true })
  // segments_new_versus_returning_customers?: string | enums.ConvertingUserPriorEngagementTypeAndLtvBucket;

  // @Field(() => String, { nullable: true })
  // segments_partner_hotel_id?: string;

  // @Field(() => String, { nullable: true })
  // segments_placeholder_type?: string | enums.PlaceholderType;

  // @Field(() => Int, { nullable: true })
  // segments_product_aggregator_id?: number;

  // @Field(() => String, { nullable: true })
  // segments_product_brand?: string;

  // @Field(() => String, { nullable: true })
  // segments_product_category_level1?: string;

  // @Field(() => String, { nullable: true })
  // segments_product_category_level2?: string;

  // @Field(() => String, { nullable: true })
  // segments_product_category_level3?: string;

  // @Field(() => String, { nullable: true })
  // segments_product_category_level4?: string;

  // @Field(() => String, { nullable: true })
  // segments_product_category_level5?: string;

  // @Field(() => String, { nullable: true })
  // segments_product_channel?: string | enums.ProductChannel;

  // @Field(() => String, { nullable: true })
  // segments_product_channel_exclusivity?: string | enums.ProductChannelExclusivity;

  // @Field(() => String, { nullable: true })
  // segments_product_condition?: string | enums.ProductCondition;

  // @Field(() => String, { nullable: true })
  // segments_product_country?: string;

  // @Field(() => String, { nullable: true })
  // segments_product_custom_attribute0?: string;

  // @Field(() => String, { nullable: true })
  // segments_product_custom_attribute1?: string;

  // @Field(() => String, { nullable: true })
  // segments_product_custom_attribute2?: string;

  // @Field(() => String, { nullable: true })
  // segments_product_custom_attribute3?: string;

  // @Field(() => String, { nullable: true })
  // segments_product_custom_attribute4?: string;

  // @Field(() => String, { nullable: true })
  // segments_product_feed_label?: string;

  // @Field(() => String, { nullable: true })
  // segments_product_item_id?: string;

  // @Field(() => String, { nullable: true })
  // segments_product_language?: string;

  // @Field(() => Int, { nullable: true })
  // segments_product_merchant_id?: number;

  // @Field(() => String, { nullable: true })
  // segments_product_store_id?: string;

  // @Field(() => String, { nullable: true })
  // segments_product_title?: string;

  // @Field(() => String, { nullable: true })
  // segments_product_type_l1?: string;

  // @Field(() => String, { nullable: true })
  // segments_product_type_l2?: string;

  // @Field(() => String, { nullable: true })
  // segments_product_type_l3?: string;

  // @Field(() => String, { nullable: true })
  // segments_product_type_l4?: string;

  // @Field(() => String, { nullable: true })
  // segments_product_type_l5?: string;

  // @Field(() => String, { nullable: true })
  // segments_quarter?: string;

  // @Field(() => String, { nullable: true })
  // segments_search_engine_results_page_type?: string | enums.SearchEngineResultsPageType;

  @Field(() => String, { nullable: true })
  segments_slot?: string | enums.Slot;

  @Field(() => Float, { nullable: true })
  metrics_active_view_ctr?: number;

  @Field(() => Float, { nullable: true })
  metrics_all_conversions?: number;

  @Field(() => Float, { nullable: true })
  metrics_average_cart_size?: number;

  @Field(() => Float, { nullable: true })
  metrics_average_cost?: number;

  @Field(() => Float, { nullable: true })
  metrics_average_cpc?: number;

  @Field(() => Float, { nullable: true })
  metrics_average_cpe?: number;

  @Field(() => Float, { nullable: true })
  metrics_average_cpm?: number;

  @Field(() => Float, { nullable: true })
  metrics_average_cpv?: number;

  @Field(() => Int, { nullable: true })
  metrics_average_order_value_micros?: number;

  @Field(() => Int, { nullable: true })
  metrics_clicks?: number;


  @Field(() => Float, { nullable: true })
  metrics_conversions?: number;


  @Field(() => Float, { nullable: true })
  metrics_conversions_from_interactions_rate?: number;

  @Field(() => Float, { nullable: true })
  metrics_conversions_from_interactions_value_per_interaction?: number;

  @Field(() => Float, { nullable: true })
  metrics_conversions_value?: number;


  @Field(() => Float, { nullable: true })
  metrics_cost_micros?: number;

  @Field(() => Int, { nullable: true })
  metrics_cost_of_goods_sold_micros?: number;


  @Field(() => Float, { nullable: true })
  metrics_cost_per_conversion?: number;


  @Field(() => Int, { nullable: true })
  metrics_cross_sell_cost_of_goods_sold_micros?: number;

  @Field(() => Int, { nullable: true })
  metrics_cross_sell_gross_profit_micros?: number;

  @Field(() => Int, { nullable: true })
  metrics_cross_sell_revenue_micros?: number;

  @Field(() => Int, { nullable: true })
  metrics_cross_sell_units_sold?: number;

  @Field(() => Float, { nullable: true })
  metrics_ctr?: number;


  @Field(() => Float, { nullable: true })
  metrics_engagement_rate?: number;

  @Field(() => Int, { nullable: true })
  metrics_engagements?: number;

  @Field(() => Int, { nullable: true })
  metrics_gmail_forwards?: number;

  @Field(() => Int, { nullable: true })
  metrics_gmail_saves?: number;

  @Field(() => Int, { nullable: true })
  metrics_gmail_secondary_clicks?: number;

  @Field(() => Float, { nullable: true })
  metrics_gross_profit_margin?: number;

  @Field(() => Int, { nullable: true })
  metrics_gross_profit_micros?: number;

  @Field(() => Int, { nullable: true })
  metrics_impressions?: number;

  @Field(() => Float, { nullable: true })
  metrics_interaction_rate?: number;

  @Field(() => [String], { nullable: true })
  metrics_interaction_event_types?: string[];

  @Field(() => Int, { nullable: true })
  metrics_interactions?: number;

  @Field(() => Float, { nullable: true })
  metrics_value_per_all_conversions?: number;

  @Field(() => Float, { nullable: true })
  metrics_lead_cost_of_goods_sold_micros: number;

  @Field(() => Float, { nullable: true })
  metrics_lead_gross_profit_micros: number;

  @Field(() => Float, { nullable: true })
  metrics_lead_revenue_micros: number;

  @Field(() => Float, { nullable: true })
  metrics_lead_units_sold: number;

  @Field(() => Float, { nullable: true })
  metrics_new_customer_lifetime_value: number;

  @Field(() => Float, { nullable: true })
  metrics_orders: number;

  @Field(() => Float, { nullable: true })
  metrics_revenue_micros: number;

  @Field(() => Float, { nullable: true })
  metrics_units_sold: number;

  @Field(() => Float, { nullable: true })
  metrics_value_per_conversion: number;

  @Field(() => Float, { nullable: true })
  metrics_view_through_conversions: number;
}
