import { Injectable } from '@nestjs/common';
import { GoogleAdsApi, Customer, enums } from 'google-ads-api';
import { AdsCampaignDto } from './dto/ads-campaing';
import { AdGroupDto } from './dto/ads-group';
import { AdDto } from './dto/ads-ad';
@Injectable()
export class GoogleAdsApiService {
  private readonly credentials = {
    client_id: process.env.GOOGLE_ADS_CLIENT_ID,
    client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET,
    developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN,
  }

  private readonly customer_credentials = {
    customer_id: process.env.GOOGLE_ADS_CUSTOMER_ID,
    refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN,
  }

  private readonly googleAdsClient: GoogleAdsApi;

  constructor() {
    this.googleAdsClient = new GoogleAdsApi(this.credentials);
  }

  public async getListCustomers() {
    const res = await this.googleAdsClient.listAccessibleCustomers(
      this.customer_credentials.refresh_token,
    );

    return res.resource_names.map(cid => cid.split('customers/')[1]);
  }

  private createCustomer = (customer_id: string) => {
    return this.googleAdsClient.Customer({ ...this.customer_credentials, customer_id })
  }

  public getCampaigns = async (customer_id = process.env.GOOGLE_ADS_CUSTOMER_ID): Promise<AdsCampaignDto[]> => {
    const customer = this.createCustomer(customer_id)

    try {
      const query = `
        SELECT 
          campaign.id, 
          campaign.name, 
          campaign.status, 
          campaign.primary_status, 
          campaign.bidding_strategy_type, 
          campaign_budget.amount_micros, 
          campaign.labels, 
          metrics.cost_micros, 
          metrics.clicks, 
          metrics.impressions, 
          metrics.all_conversions, 
          metrics.conversions 
        FROM campaign 
        WHERE 
          campaign.primary_status IN ('ELIGIBLE', 'LIMITED')
      `;

      const response = await customer.query(query)

      return response
        .map(({ campaign, metrics, campaign_budget }) => {
          return ({
            campaign_id: campaign.id,
            campaign_name: campaign.name,
            campaign_status: enums.CampaignStatus[campaign.status],
            campaign_primary_status: enums.CampaignPrimaryStatus[campaign.primary_status],
            campaign_bidding_strategy_type: enums.BiddingStrategyType[campaign.bidding_strategy_type],
            campaign_budget_amount_micros: campaign_budget.amount_micros,
            campaign_labels: campaign.labels,
            metrics_cost_micros: metrics.cost_micros,
            metrics_clicks: metrics.clicks,
            metrics_impressions: metrics.impressions,
            metrics_all_conversions: metrics.all_conversions,
            metrics_conversions: metrics.conversions
          })
        });


    } catch (error) {
      console.error("Google Ads API Error:", error);
      throw new Error(`Google Ads API Error: ${JSON.stringify(error, null, 2)}`);
    }
  }

  private getDataByAllSettledStrategy = async <T>(method: (cid: string) => Promise<T>) => {
    const customer_ids = await this.getListCustomers()

    let collect_data = [];

    const promises = customer_ids.map((cid) =>
      method(cid).then((r) => r)
    );

    const results = await Promise.allSettled(promises);

    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        collect_data = collect_data.concat(result.value);
      } else {
        console.error(`ERROR: ${result.reason}`);
      }
    });

    return collect_data;
  }

  public async getAllCampaigns(): Promise<AdsCampaignDto[]> {
    return this.getDataByAllSettledStrategy(this.getCampaigns)
  }

  public getGroups = async (customer_id = process.env.GOOGLE_ADS_CUSTOMER_ID): Promise<AdGroupDto[]> => {
    const customer = this.createCustomer(customer_id)

    try {
      const query = `
        SELECT
          ad_group.ad_rotation_mode
          ad_group.audience_setting
          ad_group.base_ad_group
          ad_group.campaign
          ad_group.cpc_bid_micros
          ad_group.cpm_bid_micros
          ad_group.cpv_bid_micros
          ad_group.display_custom_bid_dimension
          ad_group.effective_cpc_bid_micros
          ad_group.effective_target_cpa_micros
          ad_group.effective_target_cpa_source
          ad_group.effective_target_roas
          ad_group.effective_target_roas_source
          ad_group.excluded_parent_asset_field_types
          ad_group.excluded_parent_asset_set_types
          ad_group.final_url_suffix
          ad_group.fixed_cpm_micros
          ad_group.id
          ad_group.labels
          ad_group.name
          ad_group.optimized_targeting_enabled
          ad_group.percent_cpc_bid_micros
          ad_group.primary_status
          ad_group.primary_status_reasons
          ad_group.resource_name
          ad_group.status
          ad_group.target_cpa_micros
          ad_group.target_cpm_micros
          ad_group.target_cpv_micros
          ad_group.target_roas
          ad_group.targeting_setting.target_restrictions
          ad_group.tracking_url_template
          ad_group.type
          ad_group.url_custom_parameters
          segments.activity_account_id
          segments.activity_city
          segments.activity_country
          segments.activity_rating
          segments.activity_state
          segments.ad_destination_type
          segments.ad_format_type
          segments.ad_network_type
          segments.asset_interaction_target.asset
          segments.asset_interaction_target.interaction_on_this_asset
          segments.auction_insight_domain
          segments.click_type
          segments.conversion_action
          segments.conversion_action_category
          segments.conversion_action_name
          segments.conversion_adjustment
          segments.conversion_attribution_event_type
          segments.conversion_lag_bucket
          segments.conversion_or_adjustment_lag_bucket
          segments.date
          segments.day_of_week
          segments.device
          segments.external_activity_id
          segments.external_conversion_source
          segments.geo_target_airport
          segments.geo_target_canton
          segments.geo_target_city
          segments.geo_target_country
          segments.geo_target_county
          segments.geo_target_district
          segments.geo_target_metro
          segments.geo_target_most_specific_location
          segments.geo_target_postal_code
          segments.geo_target_province
          segments.geo_target_region
          segments.geo_target_state
          segments.hotel_booking_window_days
          segments.hotel_center_id
          segments.hotel_check_in_date
          segments.hotel_check_in_day_of_week
          segments.hotel_city
          segments.hotel_class
          segments.hotel_country
          segments.hotel_date_selection_type
          segments.hotel_length_of_stay
          segments.hotel_price_bucket
          segments.hotel_rate_rule_id
          segments.hotel_rate_type
          segments.hotel_state
          segments.hour
          segments.interaction_on_this_extension
          segments.month
          segments.month_of_year
          segments.new_versus_returning_customers
          segments.partner_hotel_id
          segments.placeholder_type
          segments.product_aggregator_id
          segments.product_brand
          segments.product_category_level1
          segments.product_category_level2
          segments.product_category_level3
          segments.product_category_level4
          segments.product_category_level5
          segments.product_channel
          segments.product_channel_exclusivity
          segments.product_condition
          segments.product_country
          segments.product_custom_attribute0
          segments.product_custom_attribute1
          segments.product_custom_attribute2
          segments.product_custom_attribute3
          segments.product_custom_attribute4
          segments.product_feed_label
          segments.product_item_id
          segments.product_language
          segments.product_merchant_id
          segments.product_store_id
          segments.product_title
          segments.product_type_l1
          segments.product_type_l2
          segments.product_type_l3
          segments.product_type_l4
          segments.product_type_l5
          segments.quarter
          segments.search_engine_results_page_type
          segments.slot
          segments.week
          segments.year
          metrics.absolute_top_impression_percentage
          metrics.active_view_cpm
          metrics.active_view_ctr
          metrics.active_view_impressions
          metrics.active_view_measurability
          metrics.active_view_measurable_cost_micros
          metrics.active_view_measurable_impressions
          metrics.active_view_viewability
          metrics.all_conversions
          metrics.all_conversions_by_conversion_date
          metrics.all_conversions_from_interactions_rate
          metrics.all_conversions_from_interactions_value_per_interaction
          metrics.all_conversions_value
          metrics.all_conversions_value_by_conversion_date
          metrics.all_conversions_value_per_cost
          metrics.all_new_customer_lifetime_value
          metrics.auction_insight_search_absolute_top_impression_percentage
          metrics.auction_insight_search_impression_share
          metrics.auction_insight_search_outranking_share
          metrics.auction_insight_search_overlap_rate
          metrics.auction_insight_search_position_above_rate
          metrics.auction_insight_search_top_impression_percentage
          metrics.average_cart_size
          metrics.average_cost
          metrics.average_cpc
          metrics.average_cpe
          metrics.average_cpm
          metrics.average_cpv
          metrics.average_order_value_micros
          metrics.average_page_views
          metrics.average_time_on_site
          metrics.benchmark_average_max_cpc
          metrics.biddable_app_install_conversions
          metrics.biddable_app_post_install_conversions
          metrics.bounce_rate
          metrics.clicks
          metrics.content_budget_lost_impression_share
          metrics.content_impression_share
          metrics.content_rank_lost_impression_share
          metrics.conversions
          metrics.conversions_by_conversion_date
          metrics.conversions_from_interactions_rate
          metrics.conversions_from_interactions_value_per_interaction
          metrics.conversions_value
          metrics.conversions_value_by_conversion_date
          metrics.conversions_value_per_cost
          metrics.cost_micros
          metrics.cost_of_goods_sold_micros
          metrics.cost_per_all_conversions
          metrics.cost_per_conversion
          metrics.cost_per_current_model_attributed_conversion
          metrics.cross_device_conversions
          metrics.cross_device_conversions_value_micros
          metrics.cross_sell_cost_of_goods_sold_micros
          metrics.cross_sell_gross_profit_micros
          metrics.cross_sell_revenue_micros
          metrics.cross_sell_units_sold
          metrics.ctr
          metrics.current_model_attributed_conversions
          metrics.current_model_attributed_conversions_from_interactions_rate
          metrics.current_model_attributed_conversions_from_interactions_value_per_interaction
          metrics.current_model_attributed_conversions_value
          metrics.current_model_attributed_conversions_value_per_cost
          metrics.engagement_rate
          metrics.engagements
          metrics.gmail_forwards
          metrics.gmail_saves
          metrics.gmail_secondary_clicks
          metrics.gross_profit_margin
          metrics.gross_profit_micros
          metrics.historical_creative_quality_score
          metrics.historical_landing_page_quality_score
          metrics.historical_quality_score
          metrics.historical_search_predicted_ctr
          metrics.hotel_average_lead_value_micros
          metrics.hotel_eligible_impressions
          metrics.hotel_price_difference_percentage
          metrics.impressions
          metrics.interaction_event_types
          metrics.interaction_rate
          metrics.interactions
          metrics.lead_cost_of_goods_sold_micros
          metrics.lead_gross_profit_micros
          metrics.lead_revenue_micros
          metrics.lead_units_sold
          metrics.message_chat_rate
          metrics.message_chats
          metrics.message_impressions
          metrics.mobile_friendly_clicks_percentage
          metrics.new_customer_lifetime_value
          metrics.orders
          metrics.percent_new_visitors
          metrics.phone_calls
          metrics.phone_impressions
          metrics.phone_through_rate
          metrics.relative_ctr
          metrics.revenue_micros
          metrics.search_absolute_top_impression_share
          metrics.search_budget_lost_absolute_top_impression_share
          metrics.search_budget_lost_impression_share
          metrics.search_budget_lost_top_impression_share
          metrics.search_click_share
          metrics.search_exact_match_impression_share
          metrics.search_impression_share
          metrics.search_rank_lost_absolute_top_impression_share
          metrics.search_rank_lost_impression_share
          metrics.search_rank_lost_top_impression_share
          metrics.search_top_impression_share
          metrics.speed_score
          metrics.top_impression_percentage
          metrics.units_sold
          metrics.valid_accelerated_mobile_pages_clicks_percentage
          metrics.value_per_all_conversions
          metrics.value_per_all_conversions_by_conversion_date
          metrics.value_per_conversion
          metrics.value_per_conversions_by_conversion_date
          metrics.value_per_current_model_attributed_conversion
          metrics.video_quartile_p100_rate
          metrics.video_quartile_p25_rate
          metrics.video_quartile_p50_rate
          metrics.video_quartile_p75_rate
          metrics.video_view_rate
          metrics.video_views
          metrics.view_through_conversions
        FROM
          ad_group
        WHERE 
          ad_group.primary_status IN ('ELIGIBLE', 'LIMITED')
        `;

      const response = await customer.query(query)

      return response.map(({ ad_group, campaign, metrics, segments }) => ({
        ad_rotation_mode: enums.AdGroupAdRotationMode[ad_group.ad_rotation_mode],
        audience_setting_use_audience_grouped: ad_group.audience_setting.use_audience_grouped,
        base_ad_group: ad_group.base_ad_group,
        campaign: ad_group.campaign,
        cpc_bid_micros: ad_group.cpc_bid_micros,
        cpm_bid_micros: ad_group.cpm_bid_micros,
        cpv_bid_micros: ad_group.cpv_bid_micros,
        display_custom_bid_dimension: enums.TargetingDimension[ad_group.display_custom_bid_dimension],
        effective_cpc_bid_micros: ad_group.effective_cpc_bid_micros,
        effective_target_cpa_micros: ad_group.effective_target_cpa_micros,
        effective_target_cpa_source: enums.BiddingSource[ad_group.effective_target_cpa_source],
        effective_target_roas: ad_group.effective_target_roas,
        effective_target_roas_source: enums.BiddingSource[ad_group.effective_target_roas_source],
        excluded_parent_asset_field_types: ad_group.excluded_parent_asset_field_types.map(type => enums.AssetFieldType[type]),
        excluded_parent_asset_set_types: ad_group.excluded_parent_asset_set_types.map(type => enums.AssetFieldType[type]),
        final_url_suffix: ad_group.final_url_suffix,
        fixed_cpm_micros: ad_group.fixed_cpm_micros,
        ad_group_id: ad_group.id,
        labels: ad_group.labels,
        name: ad_group.name,
        optimized_targeting_enabled: ad_group.optimized_targeting_enabled,
        percent_cpc_bid_micros: ad_group.percent_cpc_bid_micros,
        primary_status: ad_group.primary_status,
        primary_status_reasons: ad_group.primary_status_reasons,
        resource_name: ad_group.resource_name,
        status: ad_group.status,
        target_cpa_micros: ad_group.target_cpa_micros,
        target_cpm_micros: ad_group.target_cpm_micros,
        target_cpv_micros: ad_group.target_cpv_micros,
        target_roas: ad_group.target_roas,
        targeting_setting_target_restrictions: ad_group.targeting_setting.target_restrictions.map(type => enums.TargetingDimension[type.targeting_dimension]),
        tracking_url_template: ad_group.tracking_url_template,
        type: enums.AdGroupType[ad_group.type],
        // url_custom_parameters: ad_group.url_custom_parameters,
        segments_activity_account_id: segments.activity_account_id,
        segments_activity_city: segments.activity_city,
        segments_activity_country: segments.activity_country,
        segments_activity_rating: segments.activity_rating,
        segments_activity_state: segments.activity_state,
        segments_ad_destination_type: enums.AdDestinationType[segments.ad_destination_type],
        segments_ad_format_type: enums.AdFormatType[segments.ad_format_type],
        segments_ad_network_type: enums.AdNetworkType[segments.ad_network_type],
        segments_asset_interaction_target_asset: segments.asset_interaction_target.asset,
        segments_asset_interaction_target_interaction_on_this_asset: segments.asset_interaction_target.interaction_on_this_asset,
        segments_auction_insight_domain: segments.auction_insight_domain,
        segments_click_type: enums.ClickType[segments.click_type],
        segments_conversion_action: segments.conversion_action,
        segments_conversion_action_category: enums.ConversionActionCategory[segments.conversion_action_category],
        segments_conversion_action_name: segments.conversion_action_name,
        segments_conversion_adjustment: segments.conversion_adjustment,
        segments_conversion_attribution_event_type: enums.ConversionAttributionEventType[segments.conversion_attribution_event_type],
        segments_conversion_lag_bucket: enums.ConversionLagBucket[segments.conversion_lag_bucket],
        segments_conversion_or_adjustment_lag_bucket: enums.ConversionOrAdjustmentLagBucket[segments.conversion_or_adjustment_lag_bucket],
        segments_date: segments.date,
        segments_day_of_week: enums.DayOfWeek[segments.day_of_week],
        segments_device: enums.Device[segments.device],
        segments_external_activity_id: segments.external_activity_id,
        segments_external_conversion_source: enums.ExternalConversionSource[segments.external_conversion_source],
        segments_geo_target_airport: segments.geo_target_airport,
        segments_geo_target_canton: segments.geo_target_canton,
        segments_geo_target_city: segments.geo_target_city,
        segments_geo_target_country: segments.geo_target_country,
        segments_geo_target_county: segments.geo_target_county,
        segments_geo_target_district: segments.geo_target_district,
        segments_geo_target_metro: segments.geo_target_metro,
        segments_geo_target_most_specific_location: segments.geo_target_most_specific_location,
        segments_geo_target_postal_code: segments.geo_target_postal_code,
        segments_geo_target_province: segments.geo_target_province,
        segments_geo_target_region: segments.geo_target_region,
        segments_geo_target_state: segments.geo_target_state,
        segments_hotel_booking_window_days: segments.hotel_booking_window_days,
        segments_hotel_center_id: segments.hotel_center_id,
        segments_hotel_check_in_date: segments.hotel_check_in_date,
        segments_hotel_check_in_day_of_week: enums.DayOfWeek[segments.hotel_check_in_day_of_week],
        segments_hotel_city: segments.hotel_city,
        segments_hotel_class: segments.hotel_class,
        segments_hotel_country: segments.hotel_country,
        segments_hotel_date_selection_type: enums.HotelDateSelectionType[segments.hotel_date_selection_type],
        segments_hotel_length_of_stay: segments.hotel_length_of_stay,
        segments_hotel_price_bucket: enums.HotelPriceBucket[segments.hotel_price_bucket],
        segments_hotel_rate_rule_id: segments.hotel_rate_rule_id,
        segments_hotel_rate_type: enums.HotelRateType[segments.hotel_rate_type],
        segments_hotel_state: segments.hotel_state,
        segments_hour: segments.hour,
        segments_interaction_on_this_extension: segments.interaction_on_this_extension,
        segments_month: segments.month,
        segments_month_of_year: enums.MonthOfYear[segments.month_of_year],
        segments_new_versus_returning_customers: enums.ConvertingUserPriorEngagementTypeAndLtvBucket[segments.new_versus_returning_customers],
        segments_partner_hotel_id: segments.partner_hotel_id,
        segments_placeholder_type: enums.PlaceholderType[segments.placeholder_type],
        segments_product_aggregator_id: segments.product_aggregator_id,
        segments_product_brand: segments.product_brand,
        segments_product_category_level1: segments.product_category_level1,
        segments_product_category_level2: segments.product_category_level2,
        segments_product_category_level3: segments.product_category_level3,
        segments_product_category_level4: segments.product_category_level4,
        segments_product_category_level5: segments.product_category_level5,
        segments_product_channel: enums.ProductChannel[segments.product_channel],
        segments_product_channel_exclusivity: enums.ProductChannelExclusivity[segments.product_channel_exclusivity],
        segments_product_condition: enums.ProductCondition[segments.product_condition],
        segments_product_country: segments.product_country,
        segments_product_custom_attribute0: segments.product_custom_attribute0,
        segments_product_custom_attribute1: segments.product_custom_attribute1,
        segments_product_custom_attribute2: segments.product_custom_attribute2,
        segments_product_custom_attribute3: segments.product_custom_attribute3,
        segments_product_custom_attribute4: segments.product_custom_attribute4,
        segments_product_feed_label: segments.product_feed_label,
        segments_product_item_id: segments.product_item_id,
        segments_product_language: segments.product_language,
        segments_product_merchant_id: segments.product_merchant_id,
        segments_product_store_id: segments.product_store_id,
        segments_product_title: segments.product_title,
        segments_product_type_l1: segments.product_type_l1,
        segments_product_type_l2: segments.product_type_l2,
        segments_product_type_l3: segments.product_type_l3,
        segments_product_type_l4: segments.product_type_l4,
        segments_product_type_l5: segments.product_type_l5,
        segments_quarter: segments.quarter,
        segments_search_engine_results_page_type: enums.SearchEngineResultsPageType[segments.search_engine_results_page_type],
        segments_slot: enums.Slot[segments.slot],
        segments_week: segments.week,
        segments_year: segments.year,
        metrics_absolute_top_impression_percentage: metrics.absolute_top_impression_percentage,
        metrics_active_view_cpm: metrics.active_view_cpm,
        metrics_active_view_ctr: metrics.active_view_ctr,
        metrics_active_view_impressions: metrics.active_view_impressions,
        metrics_active_view_measurability: metrics.active_view_measurability,
        metrics_active_view_measurable_cost_micros: metrics.active_view_measurable_cost_micros,
        metrics_active_view_measurable_impressions: metrics.active_view_measurable_impressions,
        metrics_active_view_viewability: metrics.active_view_viewability,
        metrics_all_conversions: metrics.all_conversions,
        metrics_all_conversions_by_conversion_date: metrics.all_conversions_by_conversion_date,
        metrics_all_conversions_from_interactions_rate: metrics.all_conversions_from_interactions_rate,
        metrics_all_conversions_from_interactions_value_per_interaction: metrics.all_conversions_from_interactions_value_per_interaction,
        metrics_all_conversions_value: metrics.all_conversions_value,
        metrics_all_conversions_value_by_conversion_date: metrics.all_conversions_value_by_conversion_date,
        metrics_all_conversions_value_per_cost: metrics.all_conversions_value_per_cost,
        metrics_all_new_customer_lifetime_value: metrics.all_new_customer_lifetime_value,
        metrics_auction_insight_search_absolute_top_impression_percentage: metrics.auction_insight_search_absolute_top_impression_percentage,
        metrics_auction_insight_search_impression_share: metrics.auction_insight_search_impression_share,
        metrics_auction_insight_search_outranking_share: metrics.auction_insight_search_outranking_share,
        metrics_auction_insight_search_overlap_rate: metrics.auction_insight_search_overlap_rate,
        metrics_auction_insight_search_position_above_rate: metrics.auction_insight_search_position_above_rate,
        metrics_auction_insight_search_top_impression_percentage: metrics.auction_insight_search_top_impression_percentage,
        metrics_average_cart_size: metrics.average_cart_size,
        metrics_average_cost: metrics.average_cost,
        metrics_average_cpc: metrics.average_cpc,
        metrics_average_cpe: metrics.average_cpe,
        metrics_average_cpm: metrics.average_cpm,
        metrics_average_cpv: metrics.average_cpv,
        metrics_average_order_value_micros: metrics.average_order_value_micros,
        metrics_average_page_views: metrics.average_page_views,
        metrics_average_time_on_site: metrics.average_time_on_site,
        metrics_benchmark_average_max_cpc: metrics.benchmark_average_max_cpc,
        metrics_biddable_app_install_conversions: metrics.biddable_app_install_conversions,
        metrics_biddable_app_post_install_conversions: metrics.biddable_app_post_install_conversions,
        metrics_bounce_rate: metrics.bounce_rate,
        metrics_clicks: metrics.clicks,
        metrics_content_budget_lost_impression_share: metrics.content_budget_lost_impression_share,
        metrics_content_impression_share: metrics.content_impression_share,
        metrics_content_rank_lost_impression_share: metrics.content_rank_lost_impression_share,
        metrics_conversions: metrics.conversions,
        metrics_conversions_by_conversion_date: metrics.conversions_by_conversion_date,
        metrics_conversions_from_interactions_rate: metrics.conversions_from_interactions_rate,
        metrics_conversions_from_interactions_value_per_interaction: metrics.conversions_from_interactions_value_per_interaction,
        metrics_conversions_value: metrics.conversions_value,
        metrics_conversions_value_by_conversion_date: metrics.conversions_value_by_conversion_date,
        metrics_conversions_value_per_cost: metrics.conversions_value_per_cost,
        metrics_cost_micros: metrics.cost_micros,
        metrics_cost_of_goods_sold_micros: metrics.cost_of_goods_sold_micros,
        metrics_cost_per_all_conversions: metrics.cost_per_all_conversions,
        metrics_cost_per_conversion: metrics.cost_per_conversion,
        metrics_cost_per_current_model_attributed_conversion: metrics.cost_per_current_model_attributed_conversion,
        metrics_cross_device_conversions: metrics.cross_device_conversions,
        metrics_cross_device_conversions_value_micros: metrics.cross_device_conversions_value_micros,
        metrics_cross_sell_cost_of_goods_sold_micros: metrics.cross_sell_cost_of_goods_sold_micros,
        metrics_cross_sell_gross_profit_micros: metrics.cross_sell_gross_profit_micros,
        metrics_cross_sell_revenue_micros: metrics.cross_sell_revenue_micros,
        metrics_cross_sell_units_sold: metrics.cross_sell_units_sold,
        metrics_ctr: metrics.ctr,
        metrics_current_model_attributed_conversions: metrics.current_model_attributed_conversions,
        metrics_current_model_attributed_conversions_from_interactions_rate: metrics.current_model_attributed_conversions_from_interactions_rate,
        metrics_current_model_attributed_conversions_from_interactions_value_per_interaction: metrics.current_model_attributed_conversions_from_interactions_value_per_interaction,
        metrics_current_model_attributed_conversions_value: metrics.current_model_attributed_conversions_value,
        metrics_current_model_attributed_conversions_value_per_cost: metrics.current_model_attributed_conversions_value_per_cost,
        metrics_engagement_rate: metrics.engagement_rate,
        metrics_engagements: metrics.engagements,
        metrics_gmail_forwards: metrics.gmail_forwards,
        metrics_gmail_saves: metrics.gmail_saves,
        metrics_gmail_secondary_clicks: metrics.gmail_secondary_clicks,
        metrics_gross_profit_margin: metrics.gross_profit_margin,
        metrics_gross_profit_micros: metrics.gross_profit_micros,
        metrics_historical_creative_quality_score: metrics.historical_creative_quality_score,
        metrics_historical_landing_page_quality_score: metrics.historical_landing_page_quality_score,
        metrics_historical_quality_score: metrics.historical_quality_score,
        metrics_historical_search_predicted_ctr: metrics.historical_search_predicted_ctr,
        metrics_hotel_average_lead_value_micros: metrics.hotel_average_lead_value_micros,
        metrics_hotel_eligible_impressions: metrics.hotel_eligible_impressions,
        metrics_hotel_price_difference_percentage: metrics.hotel_price_difference_percentage,
        metrics_impressions: metrics.impressions,
        metrics_interaction_event_types: metrics.interaction_event_types,
        metrics_interaction_rate: metrics.interaction_rate,
        metrics_interactions: metrics.interactions,
        metrics_lead_cost_of_goods_sold_micros: metrics.lead_cost_of_goods_sold_micros,
        metrics_lead_gross_profit_micros: metrics.lead_gross_profit_micros,
        metrics_lead_revenue_micros: metrics.lead_revenue_micros,
        metrics_lead_units_sold: metrics.lead_units_sold,
        metrics_message_chat_rate: metrics.message_chat_rate,
        metrics_message_chats: metrics.message_chats,
        metrics_message_impressions: metrics.message_impressions,
        metrics_mobile_friendly_clicks_percentage: metrics.mobile_friendly_clicks_percentage,
        metrics_new_customer_lifetime_value: metrics.new_customer_lifetime_value,
        metrics_orders: metrics.orders,
        metrics_percent_new_visitors: metrics.percent_new_visitors,
        metrics_phone_calls: metrics.phone_calls,
        metrics_phone_impressions: metrics.phone_impressions,
        metrics_phone_through_rate: metrics.phone_through_rate,
        metrics_relative_ctr: metrics.relative_ctr,
        metrics_revenue_micros: metrics.revenue_micros,
        metrics_search_absolute_top_impression_share: metrics.search_absolute_top_impression_share,
        metrics_search_budget_lost_absolute_top_impression_share: metrics.search_budget_lost_absolute_top_impression_share,
        metrics_search_budget_lost_impression_share: metrics.search_budget_lost_impression_share,
        metrics_search_budget_lost_top_impression_share: metrics.search_budget_lost_top_impression_share,
        metrics_search_click_share: metrics.search_click_share,
        metrics_search_exact_match_impression_share: metrics.search_exact_match_impression_share,
        metrics_search_impression_share: metrics.search_impression_share,
        metrics_search_rank_lost_absolute_top_impression_share: metrics.search_rank_lost_absolute_top_impression_share,
        metrics_search_rank_lost_impression_share: metrics.search_rank_lost_impression_share,
        metrics_search_rank_lost_top_impression_share: metrics.search_rank_lost_top_impression_share,
        metrics_search_top_impression_share: metrics.search_top_impression_share,
        metrics_speed_score: metrics.speed_score,
        metrics_top_impression_percentage: metrics.top_impression_percentage,
        metrics_units_sold: metrics.units_sold,
        metrics_valid_accelerated_mobile_pages_clicks_percentage: metrics.valid_accelerated_mobile_pages_clicks_percentage,
        metrics_value_per_all_conversions: metrics.value_per_all_conversions,
        metrics_value_per_all_conversions_by_conversion_date: metrics.value_per_all_conversions_by_conversion_date,
        metrics_value_per_conversion: metrics.value_per_conversion,
        metrics_value_per_conversions_by_conversion_date: metrics.value_per_conversions_by_conversion_date,
        metrics_value_per_current_model_attributed_conversion: metrics.value_per_current_model_attributed_conversion,
        metrics_video_quartile_p100_rate: metrics.video_quartile_p100_rate,
        metrics_video_quartile_p25_rate: metrics.video_quartile_p25_rate,
        metrics_video_quartile_p50_rate: metrics.video_quartile_p50_rate,
        metrics_video_quartile_p75_rate: metrics.video_quartile_p75_rate,
        metrics_video_view_rate: metrics.video_view_rate,
        metrics_video_views: metrics.video_views,
        metrics_view_through_conversions: metrics.view_through_conversions,
        // ad_group_id: ad_group.id,
        // name: ad_group.name,
        // status: enums.AdGroupStatus[ad_group.status],
        // primary_status: enums.AdGroupPrimaryStatus[ad_group.primary_status],
        // cpc_bid_micros: ad_group.cpc_bid_micros,
        // labels: ad_group.labels,
        // tracking_url_template: ad_group.tracking_url_template,
        // primary_status_reasons: ad_group.primary_status_reasons,
        // campaign_id: campaign.id,
        // campaign_name: campaign.name,
        // campaign_primary_status: enums.CampaignPrimaryStatus[campaign.primary_status],
        // campaign_status: enums.CampaignStatus[campaign.status],
        // metrics_clicks: metrics.clicks,
        // metrics_impressions: metrics.impressions,
        // metrics_ctr: metrics.ctr,
        // metrics_cost_micros: metrics.cost_micros,
        // metrics_conversions: metrics.conversions,
        // segments_device: enums.Device[segments.device],
      }));


    } catch (error) {
      throw new Error(`Google Ads API Error: ${JSON.stringify(error, null, 2)}`);
    }
  }

  public async getAllGroups(): Promise<AdGroupDto[]> {
    return this.getDataByAllSettledStrategy(this.getGroups);
  }

  public getAD = async (customer_id = process.env.GOOGLE_ADS_CUSTOMER_ID): Promise<AdDto[]> => {
    const customer = this.createCustomer(customer_id)

    try {
      const query = `
        SELECT
          ad.added_by_google_ads,
          ad.app_ad.descriptions,
          ad.app_ad.headlines,
          ad.app_ad.html5_media_bundles,
          ad.app_ad.images,
          ad.app_ad.mandatory_ad_text,
          ad.app_ad.youtube_videos,
          ad.app_engagement_ad.descriptions,
          ad.app_engagement_ad.headlines,
          ad.app_engagement_ad.images,
          ad.app_engagement_ad.videos,
          ad.app_pre_registration_ad.descriptions,
          ad.app_pre_registration_ad.headlines,
          ad.app_pre_registration_ad.images,
          ad.app_pre_registration_ad.youtube_videos,
          ad.call_ad.business_name,
          ad.call_ad.call_tracked,
          ad.call_ad.conversion_action,
          ad.call_ad.conversion_reporting_state,
          ad.call_ad.country_code,
          ad.call_ad.description1,
          ad.call_ad.description2,
          ad.call_ad.disable_call_conversion,
          ad.call_ad.headline1,
          ad.call_ad.headline2,
          ad.call_ad.path1,
          ad.call_ad.path2,
          ad.call_ad.phone_number,
          ad.call_ad.phone_number_verification_url,
          ad.demand_gen_carousel_ad.business_name,
          ad.demand_gen_carousel_ad.call_to_action_text,
          ad.demand_gen_carousel_ad.carousel_cards,
          ad.demand_gen_carousel_ad.description,
          ad.demand_gen_carousel_ad.headline,
          ad.demand_gen_carousel_ad.logo_image,
          ad.demand_gen_multi_asset_ad.business_name,
          ad.demand_gen_multi_asset_ad.call_to_action_text,
          ad.demand_gen_multi_asset_ad.descriptions,
          ad.demand_gen_multi_asset_ad.headlines,
          ad.demand_gen_multi_asset_ad.lead_form_only,
          ad.demand_gen_multi_asset_ad.logo_images,
          ad.demand_gen_multi_asset_ad.marketing_images,
          ad.demand_gen_multi_asset_ad.portrait_marketing_images,
          ad.demand_gen_multi_asset_ad.square_marketing_images,
          ad.demand_gen_product_ad.breadcrumb1,
          ad.demand_gen_product_ad.breadcrumb2,
          ad.demand_gen_product_ad.business_name,
          ad.demand_gen_product_ad.call_to_action,
          ad.demand_gen_product_ad.description,
          ad.demand_gen_product_ad.headline,
          ad.demand_gen_product_ad.logo_image,
          ad.demand_gen_video_responsive_ad.breadcrumb1,
          ad.demand_gen_video_responsive_ad.breadcrumb2,
          ad.demand_gen_video_responsive_ad.business_name,
          ad.demand_gen_video_responsive_ad.call_to_actions,
          ad.demand_gen_video_responsive_ad.descriptions,
          ad.demand_gen_video_responsive_ad.headlines,
          ad.demand_gen_video_responsive_ad.logo_images,
          ad.demand_gen_video_responsive_ad.long_headlines,
          ad.demand_gen_video_responsive_ad.videos,
          ad.device_preference,
          ad.display_upload_ad.display_upload_product_type,
          ad.display_upload_ad.media_bundle,
          ad.display_url,
          ad.expanded_dynamic_search_ad.description,
          ad.expanded_dynamic_search_ad.description2,
          ad.expanded_text_ad.description,
          ad.expanded_text_ad.description2,
          ad.expanded_text_ad.headline_part1,
          ad.expanded_text_ad.headline_part2,
          ad.expanded_text_ad.headline_part3,
          ad.expanded_text_ad.path1,
          ad.expanded_text_ad.path2,
          ad.final_app_urls,
          ad.final_mobile_urls,
          ad.final_url_suffix,
          ad.final_urls,
          ad.hotel_ad,
          ad.id,
          ad.image_ad.image_url,
          ad.image_ad.mime_type,
          ad.image_ad.name,
          ad.image_ad.pixel_height,
          ad.image_ad.pixel_width,
          ad.image_ad.preview_image_url,
          ad.image_ad.preview_pixel_height,
          ad.image_ad.preview_pixel_width,
          ad.legacy_app_install_ad,
          ad.legacy_responsive_display_ad.accent_color,
          ad.legacy_responsive_display_ad.allow_flexible_color,
          ad.legacy_responsive_display_ad.business_name,
          ad.legacy_responsive_display_ad.call_to_action_text,
          ad.legacy_responsive_display_ad.description,
          ad.legacy_responsive_display_ad.format_setting,
          ad.legacy_responsive_display_ad.logo_image,
          ad.legacy_responsive_display_ad.long_headline,
          ad.legacy_responsive_display_ad.main_color,
          ad.legacy_responsive_display_ad.marketing_image,
          ad.legacy_responsive_display_ad.price_prefix,
          ad.legacy_responsive_display_ad.promo_text,
          ad.legacy_responsive_display_ad.short_headline,
          ad.legacy_responsive_display_ad.square_logo_image,
          ad.legacy_responsive_display_ad.square_marketing_image,
          ad.local_ad.call_to_actions,
          ad.local_ad.descriptions,
          ad.local_ad.headlines,
          ad.local_ad.logo_images,
          ad.local_ad.marketing_images,
          ad.local_ad.path1,
          ad.local_ad.path2,
          ad.local_ad.videos,
          ad.name,
          ad.resource_name,
          ad.responsive_display_ad.accent_color,
          ad.responsive_display_ad.allow_flexible_color,
          ad.responsive_display_ad.business_name,
          ad.responsive_display_ad.call_to_action_text,
          ad.responsive_display_ad.control_spec.enable_asset_enhancements,
          ad.responsive_display_ad.control_spec.enable_autogen_video,
          ad.responsive_display_ad.descriptions,
          ad.responsive_display_ad.format_setting,
          ad.responsive_display_ad.headlines,
          ad.responsive_display_ad.logo_images,
          ad.responsive_display_ad.long_headline,
          ad.responsive_display_ad.main_color,
          ad.responsive_display_ad.marketing_images,
          ad.responsive_display_ad.price_prefix,
          ad.responsive_display_ad.promo_text,
          ad.responsive_display_ad.square_logo_images,
          ad.responsive_display_ad.square_marketing_images,
          ad.responsive_display_ad.youtube_videos,
          ad.responsive_search_ad.descriptions,
          ad.responsive_search_ad.headlines,
          ad.responsive_search_ad.path1,
          ad.responsive_search_ad.path2,
          ad.shopping_comparison_listing_ad.headline,
          ad.shopping_product_ad,
          ad.shopping_smart_ad,
          ad.smart_campaign_ad.descriptions,
          ad.smart_campaign_ad.headlines,
          ad.system_managed_resource_source,
          ad.tracking_url_template,
          ad.travel_ad,
          ad.type,
          ad.url_collections,
          ad.url_custom_parameters,
          ad.video_ad.bumper.action_button_label,
          ad.video_ad.bumper.action_headline,
          ad.video_ad.in_feed.description1,
          ad.video_ad.in_feed.description2,
          ad.video_ad.in_feed.headline,
          ad.video_ad.in_feed.thumbnail,
          ad.video_ad.in_stream.action_button_label,
          ad.video_ad.in_stream.action_headline,
          ad.video_ad.non_skippable.action_button_label,
          ad.video_ad.non_skippable.action_headline,
          ad.video_ad.out_stream.description,
          ad.video_ad.out_stream.headline,
          ad.video_responsive_ad.breadcrumb1,
          ad.video_responsive_ad.breadcrumb2,
          ad.video_responsive_ad.call_to_actions,
          ad.video_responsive_ad.companion_banners,
          ad.video_responsive_ad.descriptions,
          ad.video_responsive_ad.headlines,
          ad.video_responsive_ad.long_headlines,
          ad.video_responsive_ad.videos
        FROM ad
      `;

      const response = await customer.query(query);

      return response.map(({ ad }) => ({
        added_by_google_ads: ad?.added_by_google_ads,
        app_ad_descriptions: ad?.app_ad?.descriptions?.map(item => item.text),
        app_ad_headlines: ad?.app_ad?.headlines?.map(item => item.text),
        app_ad_html5_media_bundles: ad?.app_ad?.html5_media_bundles?.map(item => item.asset),
        app_ad_images: ad?.app_ad?.images?.map(item => item.asset),
        app_ad_mandatory_ad_text: ad?.app_ad?.mandatory_ad_text.text,
        app_ad_youtube_videos: ad?.app_ad?.youtube_videos?.map(item => item.asset),
        app_engagement_ad_descriptions: ad?.app_engagement_ad?.descriptions?.map(item => item.text),
        app_engagement_ad_headlines: ad?.app_engagement_ad?.headlines?.map(item => item.text),
        app_engagement_ad_images: ad?.app_engagement_ad?.images?.map(item => item.asset),
        app_engagement_ad_videos: ad?.app_engagement_ad?.videos?.map(item => item.asset),
        app_pre_registration_ad_descriptions: ad?.app_pre_registration_ad?.descriptions?.map(item => item.text),
        app_pre_registration_ad_headlines: ad?.app_pre_registration_ad?.headlines?.map(item => item.text),
        app_pre_registration_ad_images: ad?.app_pre_registration_ad?.images?.map(item => item.asset),
        app_pre_registration_ad_youtube_videos: ad?.app_pre_registration_ad?.youtube_videos?.map(item => item.asset),
        call_ad_business_name: ad?.call_ad?.business_name,
        call_ad_call_tracked: ad?.call_ad?.call_tracked,
        call_ad_conversion_action: ad?.call_ad?.conversion_action,
        call_ad_conversion_reporting_state: ad?.call_ad?.conversion_reporting_state,
        call_ad_country_code: ad?.call_ad?.country_code,
        call_ad_description1: ad?.call_ad?.description1,
        call_ad_description2: ad?.call_ad?.description2,
        call_ad_disable_call_conversion: ad?.call_ad?.disable_call_conversion,
        call_ad_headline1: ad?.call_ad?.headline1,
        call_ad_headline2: ad?.call_ad?.headline2,
        call_ad_path1: ad?.call_ad?.path1,
        call_ad_path2: ad?.call_ad?.path2,
        call_ad_phone_number: ad?.call_ad?.phone_number,
        call_ad_phone_number_verification_url: ad?.call_ad?.phone_number_verification_url,
        demand_gen_carousel_ad_business_name: ad?.demand_gen_carousel_ad?.business_name,
        demand_gen_carousel_ad_call_to_action_text: ad?.demand_gen_carousel_ad?.call_to_action_text,
        demand_gen_carousel_ad_carousel_cards: ad?.demand_gen_carousel_ad?.carousel_cards?.map(item => item.asset),
        demand_gen_carousel_ad_description: ad?.demand_gen_carousel_ad?.description.text,
        demand_gen_carousel_ad_headline: ad?.demand_gen_carousel_ad?.headline?.text,
        demand_gen_carousel_ad_logo_image: ad?.demand_gen_carousel_ad?.logo_image?.asset,
        demand_gen_multi_asset_ad_business_name: ad?.demand_gen_multi_asset_ad?.business_name,
        demand_gen_multi_asset_ad_call_to_action_text: ad?.demand_gen_multi_asset_ad?.call_to_action_text,
        demand_gen_multi_asset_ad_descriptions: ad?.demand_gen_multi_asset_ad?.descriptions?.map(item => item.text),
        demand_gen_multi_asset_ad_headlines: ad?.demand_gen_multi_asset_ad?.headlines?.map(item => item.text),
        demand_gen_multi_asset_ad_lead_form_only: ad?.demand_gen_multi_asset_ad?.lead_form_only,
        demand_gen_multi_asset_ad_logo_images: ad?.demand_gen_multi_asset_ad?.logo_images?.map(item => item.asset),
        demand_gen_multi_asset_ad_marketing_images: ad?.demand_gen_multi_asset_ad?.marketing_images?.map(item => item.asset),
        demand_gen_multi_asset_ad_portrait_marketing_images: ad?.demand_gen_multi_asset_ad?.portrait_marketing_images?.map(item => item.asset),
        demand_gen_multi_asset_ad_square_marketing_images: ad?.demand_gen_multi_asset_ad?.square_marketing_images?.map(item => item.asset),
        demand_gen_product_ad_breadcrumb1: ad?.demand_gen_product_ad?.breadcrumb1,
        demand_gen_product_ad_breadcrumb2: ad?.demand_gen_product_ad?.breadcrumb2,
        demand_gen_product_ad_business_name: ad?.demand_gen_product_ad?.business_name?.text,
        demand_gen_product_ad_call_to_action: ad?.demand_gen_product_ad?.call_to_action?.asset,
        demand_gen_product_ad_description: ad?.demand_gen_product_ad?.description?.text,
        demand_gen_product_ad_headline: ad?.demand_gen_product_ad?.headline?.text,
        demand_gen_product_ad_logo_image: ad?.demand_gen_product_ad?.logo_image.asset,
        demand_gen_video_responsive_ad_breadcrumb1: ad?.demand_gen_video_responsive_ad?.breadcrumb1,
        demand_gen_video_responsive_ad_breadcrumb2: ad?.demand_gen_video_responsive_ad?.breadcrumb2,
        demand_gen_video_responsive_ad_business_name: ad?.demand_gen_video_responsive_ad?.business_name?.text,
        demand_gen_video_responsive_ad_call_to_actions: ad?.demand_gen_video_responsive_ad?.call_to_actions?.map(item => item.asset),
        demand_gen_video_responsive_ad_descriptions: ad?.demand_gen_video_responsive_ad?.descriptions?.map(item => item.text),
        demand_gen_video_responsive_ad_headlines: ad?.demand_gen_video_responsive_ad?.headlines?.map(item => item.text),
        demand_gen_video_responsive_ad_logo_images: ad?.demand_gen_video_responsive_ad?.logo_images?.map(item => item.asset),
        demand_gen_video_responsive_ad_long_headlines: ad?.demand_gen_video_responsive_ad?.long_headlines?.map(item => item.text),
        demand_gen_video_responsive_ad_videos: ad?.demand_gen_video_responsive_ad?.videos?.map(item => item.asset),
        device_preference: enums.Device[ad?.device_preference],
        display_upload_ad_display_upload_product_type: enums.DisplayUploadProductType[ad?.display_upload_ad?.display_upload_product_type],
        display_upload_ad_media_bundle: ad?.display_upload_ad?.media_bundle.asset,
        display_url: ad?.display_url,
        expanded_dynamic_search_ad_description: ad?.expanded_dynamic_search_ad?.description,
        expanded_dynamic_search_ad_description2: ad?.expanded_dynamic_search_ad?.description2,
        expanded_text_ad_description: ad?.expanded_text_ad?.description,
        expanded_text_ad_description2: ad?.expanded_text_ad?.description2,
        expanded_text_ad_headline_part1: ad?.expanded_text_ad?.headline_part1,
        expanded_text_ad_headline_part2: ad?.expanded_text_ad?.headline_part2,
        expanded_text_ad_headline_part3: ad?.expanded_text_ad?.headline_part3,
        expanded_text_ad_path1: ad?.expanded_text_ad?.path1,
        expanded_text_ad_path2: ad?.expanded_text_ad?.path2,
        final_app_urls: ad?.final_app_urls?.map(item => item.url),
        final_mobile_urls: ad?.final_mobile_urls,
        final_url_suffix: ad?.final_url_suffix,
        final_urls: ad?.final_urls,
        // hotel_ad: ad?.hotel_ad,
        ad_id: ad?.id,
        image_ad_image_url: ad?.image_ad?.image_url,
        image_ad_mime_type: enums.MimeType[ad?.image_ad?.mime_type],
        image_ad_name: ad?.image_ad?.name,
        image_ad_pixel_height: ad?.image_ad?.pixel_height,
        image_ad_pixel_width: ad?.image_ad?.pixel_width,
        image_ad_preview_image_url: ad?.image_ad?.preview_image_url,
        image_ad_preview_pixel_height: ad?.image_ad?.preview_pixel_height,
        image_ad_preview_pixel_width: ad?.image_ad?.preview_pixel_width,
        legacy_app_install_ad: ad?.legacy_app_install_ad?.app_id,
        legacy_responsive_display_ad_accent_color: ad?.legacy_responsive_display_ad?.accent_color,
        legacy_responsive_display_ad_allow_flexible_color: ad?.legacy_responsive_display_ad?.allow_flexible_color,
        legacy_responsive_display_ad_business_name: ad?.legacy_responsive_display_ad?.business_name,
        legacy_responsive_display_ad_call_to_action_text: ad?.legacy_responsive_display_ad?.call_to_action_text,
        legacy_responsive_display_ad_description: ad?.legacy_responsive_display_ad?.description,
        legacy_responsive_display_ad_format_setting: enums.DisplayAdFormatSetting[ad?.legacy_responsive_display_ad?.format_setting],
        legacy_responsive_display_ad_logo_image: ad?.legacy_responsive_display_ad?.logo_image,
        legacy_responsive_display_ad_long_headline: ad?.legacy_responsive_display_ad?.long_headline,
        legacy_responsive_display_ad_main_color: ad?.legacy_responsive_display_ad?.main_color,
        legacy_responsive_display_ad_marketing_image: ad?.legacy_responsive_display_ad?.marketing_image,
        legacy_responsive_display_ad_price_prefix: ad?.legacy_responsive_display_ad?.price_prefix,
        legacy_responsive_display_ad_promo_text: ad?.legacy_responsive_display_ad?.promo_text,
        legacy_responsive_display_ad_short_headline: ad?.legacy_responsive_display_ad?.short_headline,
        legacy_responsive_display_ad_square_logo_image: ad?.legacy_responsive_display_ad?.square_logo_image,
        legacy_responsive_display_ad_square_marketing_image: ad?.legacy_responsive_display_ad?.square_marketing_image,
        local_ad_call_to_actions: ad?.local_ad?.call_to_actions?.map(item => item.text),
        local_ad_descriptions: ad?.local_ad?.descriptions?.map(item => item.text),
        local_ad_headlines: ad?.local_ad?.headlines?.map(item => item.text),
        local_ad_logo_images: ad?.local_ad?.logo_images?.map(item => item.asset),
        local_ad_marketing_images: ad?.local_ad?.marketing_images?.map(item => item.asset),
        local_ad_path1: ad?.local_ad?.path1,
        local_ad_path2: ad?.local_ad?.path2,
        local_ad_videos: ad?.local_ad?.videos?.map(item => item.asset),
        name: ad?.name,
        resource_name: ad?.resource_name,
        responsive_display_ad_accent_color: ad?.responsive_display_ad?.accent_color,
        responsive_display_ad_allow_flexible_color: ad?.responsive_display_ad?.allow_flexible_color,
        responsive_display_ad_business_name: ad?.responsive_display_ad?.business_name,
        responsive_display_ad_call_to_action_text: ad?.responsive_display_ad?.call_to_action_text,
        responsive_display_ad_control_spec_enable_asset_enhancements: ad?.responsive_display_ad?.control_spec?.enable_asset_enhancements,
        responsive_display_ad_control_spec_enable_autogen_video: ad?.responsive_display_ad?.control_spec?.enable_autogen_video,
        responsive_display_ad_descriptions: ad?.responsive_display_ad?.descriptions?.map(item => item.text),
        responsive_display_ad_format_setting: ad?.responsive_display_ad?.format_setting,
        responsive_display_ad_headlines: ad?.responsive_display_ad?.headlines?.map(item => item.text),
        responsive_display_ad_logo_images: ad?.responsive_display_ad?.logo_images?.map(item => item.asset),
        responsive_display_ad_long_headline: ad?.responsive_display_ad?.long_headline.text,
        responsive_display_ad_main_color: ad?.responsive_display_ad?.main_color,
        responsive_display_ad_marketing_images: ad?.responsive_display_ad?.marketing_images?.map(item => item.asset),
        responsive_display_ad_price_prefix: ad?.responsive_display_ad?.price_prefix,
        responsive_display_ad_promo_text: ad?.responsive_display_ad?.promo_text,
        responsive_display_ad_square_logo_images: ad?.responsive_display_ad?.square_logo_images?.map(item => item.asset),
        responsive_display_ad_square_marketing_images: ad?.responsive_display_ad?.square_marketing_images?.map(item => item.asset),
        responsive_display_ad_youtube_videos: ad?.responsive_display_ad?.youtube_videos?.map(item => item.asset),
        responsive_search_ad_descriptions: ad?.responsive_search_ad?.descriptions?.map(item => item.text),
        responsive_search_ad_headlines: ad?.responsive_search_ad?.headlines?.map(item => item.text),
        responsive_search_ad_path1: ad?.responsive_search_ad?.path1,
        responsive_search_ad_path2: ad?.responsive_search_ad?.path2,
        shopping_comparison_listing_ad_headline: ad?.shopping_comparison_listing_ad?.headline,
        // shopping_product_ad: ad?.shopping_product_ad,
        // shopping_smart_ad: ad?.shopping_smart_ad,
        smart_campaign_ad_descriptions: ad?.smart_campaign_ad?.descriptions?.map(item => item.text),
        smart_campaign_ad_headlines: ad?.smart_campaign_ad?.headlines?.map(item => item.text),
        system_managed_resource_source: enums.SystemManagedResourceSource[ad?.system_managed_resource_source],
        tracking_url_template: ad?.tracking_url_template,
        // travel_ad: ad?.travel_ad,
        type: enums.AdType[ad?.type],
        url_collections: ad?.url_collections?.map(item => item.final_urls).flat(1),
        // url_custom_parameters: ad?.url_custom_parameters,
        video_ad_bumper_action_button_label: ad?.video_ad?.bumper?.action_button_label,
        video_ad_bumper_action_headline: ad?.video_ad?.bumper?.action_headline,
        video_ad_in_feed_description1: ad?.video_ad?.in_feed?.description1,
        video_ad_in_feed_description2: ad?.video_ad?.in_feed?.description2,
        video_ad_in_feed_headline: ad?.video_ad?.in_feed?.headline,
        video_ad_in_feed_thumbnail: ad?.video_ad?.in_feed?.thumbnail,
        video_ad_in_stream_action_button_label: ad?.video_ad?.in_stream?.action_button_label,
        video_ad_in_stream_action_headline: ad?.video_ad?.in_stream?.action_headline,
        video_ad_non_skippable_action_button_label: ad?.video_ad?.non_skippable?.action_button_label,
        video_ad_non_skippable_action_headline: ad?.video_ad?.non_skippable?.action_headline,
        video_ad_out_stream_description: ad?.video_ad?.out_stream?.description,
        video_ad_out_stream_headline: ad?.video_ad?.out_stream?.headline,
        video_responsive_ad_breadcrumb1: ad?.video_responsive_ad?.breadcrumb1,
        video_responsive_ad_breadcrumb2: ad?.video_responsive_ad?.breadcrumb2,
        video_responsive_ad_call_to_actions: ad?.video_responsive_ad?.call_to_actions?.map(item => item.text),
        video_responsive_ad_companion_banners: ad?.video_responsive_ad?.companion_banners?.map(item => item.asset),
        video_responsive_ad_descriptions: ad?.video_responsive_ad?.descriptions?.map(item => item.text),
        video_responsive_ad_headlines: ad?.video_responsive_ad?.headlines?.map(item => item.text),
        video_responsive_ad_long_headlines: ad?.video_responsive_ad?.long_headlines?.map(item => item.text),
        video_responsive_ad_videos: ad?.video_responsive_ad?.videos?.map(item => item.asset)
      }))

    } catch (error) {
      throw new Error(`Google Ads API Error: ${JSON.stringify(error, null, 2)}`);
    }
  }

}
