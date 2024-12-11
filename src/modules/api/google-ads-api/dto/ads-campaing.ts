import { Field, Float, Int, ObjectType } from "@nestjs/graphql"; // Assuming GraphQL is being used
import { enums } from "google-ads-api"; // Import your enums from the correct module

@ObjectType()
export class AdsCampaignDto {
  @Field(() => String, { nullable: true })
  accessible_bidding_strategy?: string;

  @Field(() => String, { nullable: true })
  ad_serving_optimization_status?: string | enums.AdServingOptimizationStatus;

  @Field(() => String, { nullable: true })
  advertising_channel_sub_type?: string | enums.AdvertisingChannelSubType;

  @Field(() => String, { nullable: true })
  advertising_channel_type?: string | enums.AdvertisingChannelType;

  @Field(() => String, { nullable: true })
  app_campaign_setting_app_id?: string;

  @Field(() => String, { nullable: true })
  app_campaign_setting_app_store?: string | enums.AppCampaignAppStore;

  @Field(() => String, { nullable: true })
  app_campaign_setting_bidding_strategy_goal_type?: string | enums.AppCampaignBiddingStrategyGoalType;

  @Field(() => String, { nullable: true })
  asset_automation_settings?: string;

  @Field(() => Boolean, { nullable: true })
  audience_setting_use_audience_grouped?: boolean;

  @Field(() => String, { nullable: true })
  base_campaign?: string;

  @Field(() => String, { nullable: true })
  bidding_strategy?: string;

  @Field(() => String, { nullable: true })
  bidding_strategy_system_status?: string | enums.BiddingStrategySystemStatus;

  @Field(() => String, { nullable: true })
  bidding_strategy_type?: string | enums.BiddingStrategyType;

  @Field(() => String, { nullable: true })
  campaign_budget?: string;

  @Field(() => String, { nullable: true })
  campaign_group?: string;

  @Field(() => Float, { nullable: true })
  commission_commission_rate_micros?: number;

  @Field(() => Boolean, { nullable: true })
  demand_gen_campaign_settings_upgraded_targeting?: boolean;

  @Field(() => String, { nullable: true })
  dynamic_search_ads_setting_domain_name?: string;

  @Field(() => [String], { nullable: true })
  dynamic_search_ads_setting_feeds?: string[];

  @Field(() => String, { nullable: true })
  dynamic_search_ads_setting_language_code?: string;

  @Field(() => Boolean, { nullable: true })
  dynamic_search_ads_setting_use_supplied_urls_only?: boolean;

  @Field(() => String, { nullable: true })
  end_date?: string;

  @Field(() => [String], { nullable: true })
  excluded_parent_asset_field_types?: string[];

  @Field(() => [String], { nullable: true })
  excluded_parent_asset_set_types?: string[];

  @Field(() => String, { nullable: true })
  experiment_type?: string | enums.CampaignExperimentType;

  @Field(() => String, { nullable: true })
  final_url_suffix?: string;

  @Field(() => String, { nullable: true })
  fixed_cpm_goal?: string | enums.FixedCpmGoal;

  @Field(() => Float, { nullable: true })
  fixed_cpm_target_frequency_info_target_count?: number;

  @Field(() => String, { nullable: true })
  fixed_cpm_target_frequency_info_time_unit?: string | enums.FixedCpmTargetFrequencyTimeUnit;

  @Field(() => String, { nullable: true })
  frequency_caps?: string;

  @Field(() => String, { nullable: true })
  geo_target_type_setting_negative_geo_target_type?: string | enums.NegativeGeoTargetType;

  @Field(() => String, { nullable: true })
  geo_target_type_setting_positive_geo_target_type?: string | enums.PositiveGeoTargetType;

  @Field(() => String, { nullable: true })
  hotel_property_asset_set?: string;

  @Field(() => Float, { nullable: true })
  hotel_setting_hotel_center_id?: number;

  @Field(() => Float, { nullable: true })
  campaign_id?: number;

  @Field(() => String, { nullable: true })
  keyword_match_type?: string | enums.CampaignKeywordMatchType;

  @Field(() => [String], { nullable: true })
  labels?: string[];

  @Field(() => String, { nullable: true })
  listing_type?: string | enums.ListingType;

  @Field(() => String, { nullable: true })
  local_campaign_setting_location_source_type?: string | enums.LocationSourceType;

  @Field(() => String, { nullable: true })
  local_services_campaign_settings_category_bids?: string;

  @Field(() => String, { nullable: true })
  manual_cpa?: string;

  @Field(() => Boolean, { nullable: true })
  manual_cpc_enhanced_cpc_enabled?: boolean;

  @Field(() => String, { nullable: true })
  manual_cpm?: string;

  @Field(() => String, { nullable: true })
  manual_cpv?: string;

  @Field(() => Float, { nullable: true })
  maximize_conversion_value_target_roas?: number;

  @Field(() => Float, { nullable: true })
  maximize_conversions_target_cpa_micros?: number;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Boolean, { nullable: true })
  network_settings_target_content_network?: boolean;

  @Field(() => Boolean, { nullable: true })
  network_settings_target_google_search?: boolean;

  @Field(() => Boolean, { nullable: true })
  network_settings_target_google_tv_network?: boolean;

  @Field(() => Boolean, { nullable: true })
  network_settings_target_partner_search_network?: boolean;

  @Field(() => Boolean, { nullable: true })
  network_settings_target_search_network?: boolean;

  @Field(() => Boolean, { nullable: true })
  network_settings_target_youtube?: boolean;

  @Field(() => [String], { nullable: true })
  optimization_goal_setting_optimization_goal_types?: string[];

  @Field(() => Float, { nullable: true })
  optimization_score?: number;

  @Field(() => String, { nullable: true })
  payment_mode?: string | enums.PaymentMode;

  @Field(() => Float, { nullable: true })
  percent_cpc_cpc_bid_ceiling_micros?: number;

  @Field(() => Boolean, { nullable: true })
  percent_cpc_enhanced_cpc_enabled?: boolean;

  @Field(() => String, { nullable: true })
  performance_max_upgrade_performance_max_campaign?: string;

  @Field(() => String, { nullable: true })
  performance_max_upgrade_pre_upgrade_campaign?: string;

  @Field(() => String, { nullable: true })
  performance_max_upgrade_status?: string | enums.PerformanceMaxUpgradeStatus;

  @Field(() => String, { nullable: true })
  primary_status?: string | enums.CampaignPrimaryStatus;

  @Field(() => [String], { nullable: true })
  primary_status_reasons?: string[];

  @Field(() => Boolean, { nullable: true })
  real_time_bidding_setting_opt_in?: boolean;

  @Field(() => String, { nullable: true })
  resource_name?: string;

  @Field(() => [String], { nullable: true })
  selective_optimization_conversion_actions?: string[];

  @Field(() => String, { nullable: true })
  serving_status?: string | enums.CampaignServingStatus;

  @Field(() => [Float], { nullable: true })
  shopping_setting_advertising_partner_ids?: number[];

  @Field(() => Float, { nullable: true })
  shopping_setting_campaign_priority?: number;

  @Field(() => Boolean, { nullable: true })
  shopping_setting_disable_product_feed?: boolean;

  @Field(() => Boolean, { nullable: true })
  shopping_setting_enable_local?: boolean;

  @Field(() => String, { nullable: true })
  shopping_setting_feed_label?: string;

  @Field(() => Float, { nullable: true })
  shopping_setting_merchant_id?: number;

  @Field(() => Boolean, { nullable: true })
  shopping_setting_use_vehicle_inventory?: boolean;

  @Field(() => String, { nullable: true })
  start_date?: string;

  @Field(() => String, { nullable: true })
  status?: string | enums.CampaignStatus;

  @Field(() => Float, { nullable: true })
  target_cpa_cpc_bid_ceiling_micros?: number;

  //

  @Field(() => Float, { nullable: true })
  target_cpa_cpc_bid_floor_micros?: number;

  @Field(() => Float, { nullable: true })
  target_cpa_target_cpa_micros?: number;

  @Field(() => Float, { nullable: true })
  target_cpm_target_frequency_goal_target_count?: number;

  @Field(() => String, { nullable: true })
  target_cpm_target_frequency_goal_time_unit?: string | enums.TargetFrequencyTimeUnit;

  @Field(() => String, { nullable: true })
  target_cpv?: string;

  @Field(() => Float, { nullable: true })
  target_impression_share_cpc_bid_ceiling_micros?: number;

  @Field(() => String, { nullable: true })
  target_impression_share_location?: string | enums.TargetImpressionShareLocation;

  @Field(() => Float, { nullable: true })
  target_impression_share_location_fraction_micros?: number;

  @Field(() => Float, { nullable: true })
  target_roas_cpc_bid_ceiling_micros?: number;

  @Field(() => Float, { nullable: true })
  target_roas_cpc_bid_floor_micros?: number;

  @Field(() => Float, { nullable: true })
  target_roas_target_roas?: number;

  @Field(() => Float, { nullable: true })
  target_spend_cpc_bid_ceiling_micros?: number;

  @Field(() => Float, { nullable: true })
  target_spend_target_spend_micros?: number;

  @Field(() => String, { nullable: true })
  targeting_setting_target_restrictions?: string;

  @Field(() => String, { nullable: true })
  tracking_setting_tracking_url?: string;

  @Field(() => String, { nullable: true })
  tracking_url_template?: string;

  @Field(() => Float, { nullable: true })
  travel_campaign_settings_travel_account_id?: number;

  @Field(() => String, { nullable: true })
  url_custom_parameters?: string;

  @Field(() => Boolean, { nullable: true })
  url_expansion_opt_out?: boolean;

  @Field(() => String, { nullable: true })
  vanity_pharma_vanity_pharma_display_url_mode?: string | enums.VanityPharmaDisplayUrlMode;

  @Field(() => String, { nullable: true })
  vanity_pharma_vanity_pharma_text?: string | enums.VanityPharmaText;

  @Field(() => String, { nullable: true })
  video_brand_safety_suitability?: string | enums.BrandSafetySuitability;

  @Field(() => Boolean, { nullable: true })
  video_campaign_settings_video_ad_inventory_control_allow_in_feed?: boolean;

  @Field(() => Boolean, { nullable: true })
  video_campaign_settings_video_ad_inventory_control_allow_in_stream?: boolean;

  @Field(() => Boolean, { nullable: true })
  video_campaign_settings_video_ad_inventory_control_allow_shorts?: boolean;


  // Segments fields as flat properties
  // @Field(() => String, { nullable: true })
  // segments_ad_destination_type?: string | enums.AdDestinationType;

  // @Field(() => String, { nullable: true })
  // segments_ad_format_type?: string | enums.AdFormatType;

  @Field(() => String, { nullable: true })
  segments_ad_network_type?: string | enums.AdNetworkType;

  // @Field(() => String, { nullable: true })
  // segments_asset_interaction_target_asset?: string;

  // @Field(() => Boolean, { nullable: true })
  // segments_asset_interaction_target_interaction_on_this_asset?: boolean;

  // @Field(() => String, { nullable: true })
  // segments_auction_insight_domain?: string;

  // @Field(() => String, { nullable: true })
  // segments_click_type?: string | enums.ClickType;

  @Field(() => String, { nullable: true })
  segments_conversion_action?: string;

  @Field(() => String, { nullable: true })
  segments_conversion_action_category?: string | enums.ConversionActionCategory;

  @Field(() => String, { nullable: true })
  segments_conversion_action_name?: string;

  @Field(() => Boolean, { nullable: true })
  segments_conversion_adjustment?: boolean;

  @Field(() => String, { nullable: true })
  segments_conversion_attribution_event_type?: string | enums.ConversionAttributionEventType;

  @Field(() => String, { nullable: true })
  segments_conversion_lag_bucket?: string | enums.ConversionLagBucket;

  @Field(() => String, { nullable: true })
  segments_conversion_or_adjustment_lag_bucket?: string | enums.ConversionOrAdjustmentLagBucket;

  // @Field(() => String, { nullable: true })
  // segments_conversion_value_rule_primary_dimension?: string | enums.ConversionValueRulePrimaryDimension;

  // @Field(() => String, { nullable: true })
  // segments_date?: string;

  @Field(() => String, { nullable: true })
  segments_day_of_week?: string | enums.DayOfWeek;

  // @Field(() => String, { nullable: true })
  // segments_device?: string | enums.Device;

  @Field(() => String, { nullable: true })
  segments_external_conversion_source?: string | enums.ExternalConversionSource;

  // @Field(() => Float, { nullable: true })
  // segments_hour?: number;

  // @Field(() => String, { nullable: true })
  // segments_month?: string;

  // @Field(() => String, { nullable: true })
  // segments_month_of_year?: string | enums.MonthOfYear;

  @Field(() => String, { nullable: true })
  segments_new_versus_returning_customers?: string | enums.ConvertingUserPriorEngagementTypeAndLtvBucket;

  // @Field(() => String, { nullable: true })
  // segments_quarter?: string;

  // @Field(() => String, { nullable: true })
  // segments_recommendation_type?: string | enums.RecommendationType;

  // @Field(() => String, { nullable: true })
  // segments_sk_ad_network_ad_event_type?: string | enums.SkAdNetworkAdEventType;

  // @Field(() => String, { nullable: true })
  // segments_sk_ad_network_attribution_credit?: string | enums.SkAdNetworkAttributionCredit;

  // @Field(() => String, { nullable: true })
  // segments_sk_ad_network_coarse_conversion_value?: string | enums.SkAdNetworkCoarseConversionValue;

  // @Field(() => Float, { nullable: true })
  // segments_sk_ad_network_fine_conversion_value?: number;

  // @Field(() => Float, { nullable: true })
  // segments_sk_ad_network_postback_sequence_index?: number;

  // @Field(() => Float, { nullable: true })
  // segments_sk_ad_network_redistributed_fine_conversion_value?: number;

  // @Field(() => String, { nullable: true })
  // segments_sk_ad_network_source_app_id?: string;

  // @Field(() => String, { nullable: true })
  // segments_sk_ad_network_source_domain?: string;

  // @Field(() => String, { nullable: true })
  // segments_sk_ad_network_source_type?: string | enums.SkAdNetworkSourceType;

  // @Field(() => String, { nullable: true })
  // segments_sk_ad_network_user_type?: string | enums.SkAdNetworkUserType;

  // @Field(() => String, { nullable: true })
  // segments_sk_ad_network_version?: string;

  // @Field(() => String, { nullable: true })
  // segments_slot?: string | enums.Slot;

  // @Field(() => String, { nullable: true })
  // segments_week?: string;

  // @Field(() => Float, { nullable: true })
  // segments_year?: number;

  // Metrics

  // @Field(() => Float, { nullable: true })
  // metrics_absolute_top_impression_percentage?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_active_view_cpm?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_active_view_ctr?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_active_view_impressions?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_active_view_measurability?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_active_view_measurable_cost_micros?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_active_view_measurable_impressions?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_active_view_viewability?: number;

  @Field(() => Float, { nullable: true })
  metrics_all_conversions?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_all_conversions_by_conversion_date?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_all_conversions_from_click_to_call?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_all_conversions_from_directions?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_all_conversions_from_interactions_rate?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_all_conversions_from_location_asset_click_to_call?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_all_conversions_from_location_asset_directions?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_all_conversions_from_location_asset_menu?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_all_conversions_from_location_asset_order?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_all_conversions_from_location_asset_other_engagement?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_all_conversions_from_location_asset_store_visits?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_all_conversions_from_location_asset_website?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_all_conversions_from_menu?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_all_conversions_from_order?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_all_conversions_from_other_engagement?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_all_conversions_from_store_visit?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_all_conversions_from_store_website?: number;

  @Field(() => Float, { nullable: true })
  metrics_all_conversions_value?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_all_conversions_value_by_conversion_date?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_all_new_customer_lifetime_value?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_auction_insight_search_absolute_top_impression_percentage?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_auction_insight_search_impression_share?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_auction_insight_search_outranking_share?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_auction_insight_search_overlap_rate?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_auction_insight_search_position_above_rate?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_auction_insight_search_top_impression_percentage?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_average_cart_size?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_average_cost?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_average_cpc?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_average_cpe?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_average_cpm?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_average_cpv?: number;


  // @Field(() => Float, { nullable: true })
  // metrics_average_impression_frequency_per_user?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_average_order_value_micros?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_average_page_views?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_average_target_cpa_micros?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_average_target_roas?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_average_time_on_site?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_bounce_rate?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_clicks?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_content_budget_lost_impression_share?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_content_impression_share?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_content_rank_lost_impression_share?: number;

  @Field(() => Float, { nullable: true })
  metrics_conversions?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_conversions_by_conversion_date?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_conversions_from_interactions_rate?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_conversions_value?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_conversions_value_by_conversion_date?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_cost_micros?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_cost_of_goods_sold_micros?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_cost_per_all_conversions?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_cost_per_conversion?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_cost_per_current_model_attributed_conversion?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_cross_device_conversions?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_cross_device_conversions_value_micros?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_cross_sell_cost_of_goods_sold_micros?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_cross_sell_gross_profit_micros?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_cross_sell_revenue_micros?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_cross_sell_units_sold?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_ctr?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_current_model_attributed_conversions?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_current_model_attributed_conversions_from_interactions_rate?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_current_model_attributed_conversions_from_interactions_value_per_interaction?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_current_model_attributed_conversions_value?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_current_model_attributed_conversions_value_per_cost?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_eligible_impressions_from_location_asset_store_reach?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_engagement_rate?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_engagements?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_gmail_forwards?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_gmail_saves?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_gmail_secondary_clicks?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_gross_profit_margin?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_gross_profit_micros?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_impressions?: number;

  // @Field(() => [String], { nullable: true })
  // metrics_interaction_event_types?: string[];

  // @Field(() => Float, { nullable: true })
  // metrics_interaction_rate?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_interactions?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_invalid_click_rate?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_invalid_clicks?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_lead_cost_of_goods_sold_micros?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_lead_gross_profit_micros?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_lead_revenue_micros?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_lead_units_sold?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_new_customer_lifetime_value?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_optimization_score_uplift?: number;

  // @Field(() => [String], { nullable: true })
  // metrics_optimization_score_url?: string;

  // @Field(() => Float, { nullable: true })
  // metrics_orders?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_percent_new_visitors?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_phone_calls?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_phone_impressions?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_phone_through_rate?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_publisher_organic_clicks?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_publisher_purchased_clicks?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_publisher_unknown_clicks?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_relative_ctr?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_revenue_micros?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_search_absolute_top_impression_share?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_search_budget_lost_absolute_top_impression_share?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_search_budget_lost_impression_share?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_search_budget_lost_top_impression_share?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_search_click_share?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_search_exact_match_impression_share?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_search_impression_share?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_search_rank_lost_absolute_top_impression_share?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_search_rank_lost_impression_share?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_search_rank_lost_top_impression_share?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_search_top_impression_share?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_sk_ad_network_installs?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_sk_ad_network_total_conversions?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_top_impression_percentage?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_unique_users?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_units_sold?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_value_per_all_conversions?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_value_per_all_conversions_by_conversion_date?: number;

  @Field(() => Float, { nullable: true })
  metrics_value_per_conversion?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_value_per_conversions_by_conversion_date?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_value_per_current_model_attributed_conversion?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_video_quartile_p100_rate?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_video_quartile_p25_rate?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_video_quartile_p50_rate?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_video_quartile_p75_rate?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_video_view_rate?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_video_views?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_view_through_conversions?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_view_through_conversions_from_location_asset_click_to_call?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_view_through_conversions_from_location_asset_directions?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_view_through_conversions_from_location_asset_menu?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_view_through_conversions_from_location_asset_order?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_view_through_conversions_from_location_asset_other_engagement?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_view_through_conversions_from_location_asset_store_visits?: number;

  // @Field(() => Float, { nullable: true })
  // metrics_view_through_conversions_from_location_asset_website?: number;
}
