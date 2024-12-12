import { Field, ID, Float, ObjectType } from '@nestjs/graphql';
import { enums } from 'google-ads-api';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

const prepareEnum = <T>(en: T): string[] => {
  return Object.values(en).filter(e => typeof e === 'string')
}
@Entity('ad-campaign')
@ObjectType()
export class AdCampaign {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  accessible_bidding_strategy?: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.AdServingOptimizationStatus), default: null })
  ad_serving_optimization_status?: string | enums.AdServingOptimizationStatus;

  @Field(() => String, { nullable: true })
  @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.AdvertisingChannelSubType), default: null })
  advertising_channel_sub_type?: string | enums.AdvertisingChannelSubType;

  @Field(() => String, { nullable: true })
  @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.AdvertisingChannelType), default: null })
  advertising_channel_type?: string | enums.AdvertisingChannelType;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  app_campaign_setting_app_id?: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.AppCampaignAppStore), default: null })
  app_campaign_setting_app_store?: string | enums.AppCampaignAppStore;

  @Field(() => String, { nullable: true })
  @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.AppCampaignBiddingStrategyGoalType), default: null })
  app_campaign_setting_bidding_strategy_goal_type?: string | enums.AppCampaignBiddingStrategyGoalType;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  asset_automation_settings?: string;

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true })
  audience_setting_use_audience_grouped?: boolean;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  base_campaign?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  bidding_strategy?: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.BiddingStrategySystemStatus), default: null })
  bidding_strategy_system_status?: string | enums.BiddingStrategySystemStatus;

  @Field(() => String, { nullable: true })
  // @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.BiddingStrategyType), default: null })
  bidding_strategy_type?: string | enums.BiddingStrategyType;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  campaign_budget?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  campaign_group?: string;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  commission_commission_rate_micros?: number;

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true })
  demand_gen_campaign_settings_upgraded_targeting?: boolean;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  dynamic_search_ads_setting_domain_name?: string;

  @Field(() => [String], { nullable: true })
  @Column({ nullable: true, array: true, type: 'text', default: [] })
  dynamic_search_ads_setting_feeds?: string[];

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  dynamic_search_ads_setting_language_code?: string;

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true })
  dynamic_search_ads_setting_use_supplied_urls_only?: boolean;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  end_date?: string;

  @Field(() => [String], { nullable: true })
  @Column({ nullable: true, array: true, type: 'text', default: [] })
  excluded_parent_asset_field_types?: string[];

  @Field(() => [String], { nullable: true })
  @Column({ nullable: true, array: true, type: 'text', default: [] })
  excluded_parent_asset_set_types?: string[];

  @Field(() => String, { nullable: true })
  // @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.CampaignExperimentType), default: null })
  experiment_type?: string | enums.CampaignExperimentType;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  final_url_suffix?: string;

  @Field(() => String, { nullable: true })
  // @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.FixedCpmGoal), default: null })
  fixed_cpm_goal?: string | enums.FixedCpmGoal;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  fixed_cpm_target_frequency_info_target_count?: number;

  @Field(() => String, { nullable: true })
  // @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.FixedCpmTargetFrequencyTimeUnit), default: null })
  fixed_cpm_target_frequency_info_time_unit?: string | enums.FixedCpmTargetFrequencyTimeUnit;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  frequency_caps?: string;

  @Field(() => String, { nullable: true })
  // @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.NegativeGeoTargetType), default: null })
  geo_target_type_setting_negative_geo_target_type?: string | enums.NegativeGeoTargetType;

  @Field(() => String, { nullable: true })
  // @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.PositiveGeoTargetType), default: null })
  geo_target_type_setting_positive_geo_target_type?: string | enums.PositiveGeoTargetType;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  hotel_property_asset_set?: string;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'int' })
  hotel_setting_hotel_center_id?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'int' })
  campaign_id?: number;

  @Field(() => String, { nullable: true })
  // @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.CampaignKeywordMatchType), default: null })
  keyword_match_type?: string | enums.CampaignKeywordMatchType;

  @Field(() => [String], { nullable: true })
  @Column({ nullable: true, array: true, type: 'text', default: [] })
  labels?: string[];

  @Field(() => String, { nullable: true })
  // @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.ListingType), default: null })
  listing_type?: string | enums.ListingType;

  @Field(() => String, { nullable: true })
  // @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.LocationSourceType), default: null })
  local_campaign_setting_location_source_type?: string | enums.LocationSourceType;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  local_services_campaign_settings_category_bids?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  manual_cpa?: string;

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true })
  manual_cpc_enhanced_cpc_enabled?: boolean;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  manual_cpm?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  manual_cpv?: string;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  maximize_conversion_value_target_roas?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  maximize_conversions_target_cpa_micros?: number;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  name?: string;

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true })
  network_settings_target_content_network?: boolean;

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true })
  network_settings_target_google_search?: boolean;

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true })
  network_settings_target_google_tv_network?: boolean;

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true })
  network_settings_target_partner_search_network?: boolean;

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true })
  network_settings_target_search_network?: boolean;

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true })
  network_settings_target_youtube?: boolean;

  @Field(() => [String], { nullable: true })
  @Column({ nullable: true, array: true, type: 'text', default: [] })
  optimization_goal_setting_optimization_goal_types?: string[];

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  optimization_score?: number;

  @Field(() => String, { nullable: true })
  // @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.PaymentMode), default: null })
  payment_mode?: string | enums.PaymentMode;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  percent_cpc_cpc_bid_ceiling_micros?: number;

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true })
  percent_cpc_enhanced_cpc_enabled?: boolean;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  performance_max_upgrade_performance_max_campaign?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  performance_max_upgrade_pre_upgrade_campaign?: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.PerformanceMaxUpgradeStatus), default: null })
  performance_max_upgrade_status?: string | enums.PerformanceMaxUpgradeStatus;

  @Field(() => String, { nullable: true })
  // @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.CampaignPrimaryStatus), default: null })
  primary_status?: string | enums.CampaignPrimaryStatus;

  @Field(() => [String], { nullable: true })
  @Column({ nullable: true, array: true, type: 'text', default: [] })
  primary_status_reasons?: string[];

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true })
  real_time_bidding_setting_opt_in?: boolean;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  resource_name?: string;

  @Field(() => [String], { nullable: true })
  @Column({ nullable: true, array: true, type: 'text', default: [] })
  selective_optimization_conversion_actions?: string[];

  @Field(() => String, { nullable: true })
  // @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.CampaignServingStatus), default: null })
  serving_status?: string | enums.CampaignServingStatus;

  // @Field(() => [Float], { nullable: true })
  // @Column({type: 'float', nullable: true, array: true })
  // shopping_setting_advertising_partner_ids?: number[];

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  shopping_setting_campaign_priority?: number;

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true })
  shopping_setting_disable_product_feed?: boolean;

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true })
  shopping_setting_enable_local?: boolean;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  shopping_setting_feed_label?: string;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  shopping_setting_merchant_id?: number;

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true })
  shopping_setting_use_vehicle_inventory?: boolean;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  start_date?: string;

  @Field(() => String, { nullable: true })
  // @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.CampaignStatus), default: null })
  status?: string | enums.CampaignStatus;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  target_cpa_cpc_bid_ceiling_micros?: number;

  //

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  target_cpa_cpc_bid_floor_micros?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  target_cpa_target_cpa_micros?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  target_cpm_target_frequency_goal_target_count?: number;

  @Field(() => String, { nullable: true })
  // @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.TargetFrequencyTimeUnit), default: null })
  target_cpm_target_frequency_goal_time_unit?: string | enums.TargetFrequencyTimeUnit;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  target_cpv?: string;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  target_impression_share_cpc_bid_ceiling_micros?: number;

  @Field(() => String, { nullable: true })
  @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.TargetImpressionShareLocation), default: null })
  target_impression_share_location?: string | enums.TargetImpressionShareLocation;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  target_impression_share_location_fraction_micros?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  target_roas_cpc_bid_ceiling_micros?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  target_roas_cpc_bid_floor_micros?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  target_roas_target_roas?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  target_spend_cpc_bid_ceiling_micros?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  target_spend_target_spend_micros?: number;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  targeting_setting_target_restrictions?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  tracking_setting_tracking_url?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  tracking_url_template?: string;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  travel_campaign_settings_travel_account_id?: number;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  url_custom_parameters?: string;

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true })
  url_expansion_opt_out?: boolean;

  @Field(() => String, { nullable: true })
  // @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.VanityPharmaDisplayUrlMode), default: null })
  vanity_pharma_vanity_pharma_display_url_mode?: string | enums.VanityPharmaDisplayUrlMode;

  @Field(() => String, { nullable: true })
  @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.VanityPharmaText), default: null })
  vanity_pharma_vanity_pharma_text?: string | enums.VanityPharmaText;

  @Field(() => String, { nullable: true })
  @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.BrandSafetySuitability), default: null })
  video_brand_safety_suitability?: string | enums.BrandSafetySuitability;

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true })
  video_campaign_settings_video_ad_inventory_control_allow_in_feed?: boolean;

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true })
  video_campaign_settings_video_ad_inventory_control_allow_in_stream?: boolean;

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true })
  video_campaign_settings_video_ad_inventory_control_allow_shorts?: boolean;


  @Field(() => String, { nullable: true })
  // @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.AdNetworkType), default: null })
  segments_ad_network_type?: string | enums.AdNetworkType;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  segments_conversion_action?: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.ConversionActionCategory), default: null })
  segments_conversion_action_category?: string | enums.ConversionActionCategory;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  segments_conversion_action_name?: string;

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true })
  segments_conversion_adjustment?: boolean;

  @Field(() => String, { nullable: true })
  // @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.ConversionAttributionEventType), default: null })
  segments_conversion_attribution_event_type?: string | enums.ConversionAttributionEventType;

  @Field(() => String, { nullable: true })
  @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.ConversionLagBucket), default: null })
  segments_conversion_lag_bucket?: string | enums.ConversionLagBucket;

  @Field(() => String, { nullable: true })
  // @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.ConversionOrAdjustmentLagBucket), default: null })
  segments_conversion_or_adjustment_lag_bucket?: string | enums.ConversionOrAdjustmentLagBucket;

  @Field(() => String, { nullable: true })
  // @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.DayOfWeek), default: null })
  segments_day_of_week?: string | enums.DayOfWeek;

  @Field(() => String, { nullable: true })
  @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.ExternalConversionSource), default: null })
  segments_external_conversion_source?: string | enums.ExternalConversionSource;

  @Field(() => String, { nullable: true })
  @Column({ type: 'enum', nullable: true, enum: prepareEnum(enums.ConvertingUserPriorEngagementTypeAndLtvBucket), default: null })
  segments_new_versus_returning_customers?: string | enums.ConvertingUserPriorEngagementTypeAndLtvBucket;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_all_conversions?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_all_conversions_value?: number;


  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_conversions?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true, type: 'float' })
  metrics_value_per_conversion?: number;
}