import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GoogleAdsApi, enums } from 'google-ads-api';
import { AdCampaignDto } from './dto/ads-campaign.dto';
import { AdGroupDto } from './dto/ads-group.dto';
import { AdPageDto } from './dto/ads-page.dto';
import { AdCampaign } from './entity/ad-campaign.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AdGroup } from './entity/ad-group.entity';
import { AdPage } from './entity/ad-page.entity';
import { AdAdUserLocationMetricsDto } from './dto/ad-user-location-view.dto';
import { AdUserLocationMetrics } from './entity/ad-user-location-view.entity';
import * as moment from 'moment';
@Injectable()
export class GoogleAdsApiService {
  private readonly credentials = {
    client_id: process.env.GOOGLE_ADS_CLIENT_ID,
    client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET,
    developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN,
  };

  private readonly customer_credentials = {
    customer_id: process.env.GOOGLE_ADS_CUSTOMER_ID,
    refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN,
  };

  private readonly googleAdsClient: GoogleAdsApi;

  constructor(
    @InjectRepository(AdCampaign)
    protected readonly categoryRepository: Repository<AdCampaign>,
    @InjectRepository(AdGroup)
    protected readonly groupRepository: Repository<AdGroup>,
    @InjectRepository(AdPage)
    protected readonly pageRepository: Repository<AdPage>,
    @InjectRepository(AdUserLocationMetrics)
    protected readonly userLocationMetricsRepository: Repository<AdUserLocationMetrics>,
  ) {
    this.googleAdsClient = new GoogleAdsApi(this.credentials);
  }

  public async getListCustomers() {
    const res = await this.googleAdsClient.listAccessibleCustomers(
      this.customer_credentials.refresh_token,
    );

    return res.resource_names.map((cid) => cid.split('customers/')[1]);
  }

  private createCustomer = (customer_id: string) => {
    return this.googleAdsClient.Customer({
      ...this.customer_credentials,
      customer_id,
    });
  };

  public getCampaignsByCustomer = async (
    customer_id = process.env.GOOGLE_ADS_CUSTOMER_ID,
  ): Promise<AdCampaignDto[]> => {
    const customer = this.createCustomer(customer_id);

    try {
      const query = `
        SELECT 
          campaign.accessible_bidding_strategy, 
          campaign.ad_serving_optimization_status, 
          campaign.advertising_channel_sub_type, 
          campaign.advertising_channel_type, 
          campaign.app_campaign_setting.app_id, 
          campaign.app_campaign_setting.app_store, 
          campaign.app_campaign_setting.bidding_strategy_goal_type, 
          campaign.asset_automation_settings, 
          campaign.audience_setting.use_audience_grouped, 
          campaign.base_campaign, 
          campaign.bidding_strategy, 
          campaign.bidding_strategy_system_status, 
          campaign.bidding_strategy_type, 
          campaign.campaign_budget, 
          campaign.campaign_group, 
          campaign.commission.commission_rate_micros, 
          campaign.demand_gen_campaign_settings.upgraded_targeting, 
          campaign.dynamic_search_ads_setting.domain_name, 
          campaign.dynamic_search_ads_setting.feeds, 
          campaign.dynamic_search_ads_setting.language_code, 
          campaign.dynamic_search_ads_setting.use_supplied_urls_only, 
          campaign.end_date, 
          campaign.excluded_parent_asset_field_types, 
          campaign.excluded_parent_asset_set_types, 
          campaign.experiment_type, 
          campaign.final_url_suffix, 
          campaign.fixed_cpm.goal, 
          campaign.fixed_cpm.target_frequency_info.target_count, 
          campaign.fixed_cpm.target_frequency_info.time_unit, 
          campaign.frequency_caps, 
          campaign.geo_target_type_setting.positive_geo_target_type, 
          campaign.geo_target_type_setting.negative_geo_target_type, 
          campaign.hotel_property_asset_set, 
          campaign.hotel_setting.hotel_center_id, 
          campaign.id, 
          campaign.keyword_match_type, 
          campaign.labels, 
          campaign.listing_type, 
          campaign.local_campaign_setting.location_source_type, 
          campaign.local_services_campaign_settings.category_bids, 
          campaign.manual_cpa, 
          campaign.manual_cpc.enhanced_cpc_enabled, 
          campaign.manual_cpm, 
          campaign.manual_cpv, 
          campaign.name, 
          campaign.maximize_conversions.target_cpa_micros, 
          campaign.maximize_conversion_value.target_roas, 
          campaign.network_settings.target_content_network, 
          campaign.network_settings.target_google_search, 
          campaign.network_settings.target_google_tv_network, 
          campaign.network_settings.target_partner_search_network, 
          campaign.network_settings.target_search_network, 
          campaign.network_settings.target_youtube, 
          campaign.optimization_goal_setting.optimization_goal_types, 
          campaign.optimization_score, 
          campaign.payment_mode, 
          campaign.percent_cpc.cpc_bid_ceiling_micros, 
          campaign.performance_max_upgrade.performance_max_campaign, 
          campaign.percent_cpc.enhanced_cpc_enabled, 
          campaign.performance_max_upgrade.pre_upgrade_campaign, 
          campaign.performance_max_upgrade.status, 
          campaign.primary_status, 
          campaign.primary_status_reasons, 
          campaign.real_time_bidding_setting.opt_in, 
          campaign.resource_name, 
          campaign.selective_optimization.conversion_actions, 
          campaign.serving_status, 
          campaign.shopping_setting.advertising_partner_ids, 
          campaign.shopping_setting.disable_product_feed, 
          campaign.shopping_setting.campaign_priority, 
          campaign.shopping_setting.enable_local, 
          campaign.shopping_setting.feed_label, 
          campaign.shopping_setting.merchant_id, 
          campaign.shopping_setting.use_vehicle_inventory, 
          campaign.start_date, 
          campaign.status, 
          campaign.target_cpa.cpc_bid_ceiling_micros, 
          campaign.target_cpa.cpc_bid_floor_micros, 
          campaign.target_cpa.target_cpa_micros, 
          campaign.target_cpm.target_frequency_goal.target_count, 
          campaign.target_cpm.target_frequency_goal.time_unit, 
          campaign.target_cpv, 
          campaign.target_impression_share.cpc_bid_ceiling_micros, 
          campaign.target_impression_share.location, 
          campaign.target_impression_share.location_fraction_micros, 
          campaign.target_roas.cpc_bid_ceiling_micros, 
          campaign.target_roas.cpc_bid_floor_micros, 
          campaign.target_roas.target_roas, 
          campaign.target_spend.cpc_bid_ceiling_micros, 
          campaign.target_spend.target_spend_micros, 
          campaign.targeting_setting.target_restrictions, 
          campaign.tracking_setting.tracking_url, 
          campaign.tracking_url_template, 
          campaign.travel_campaign_settings.travel_account_id, 
          campaign.url_custom_parameters, 
          campaign.url_expansion_opt_out, 
          campaign.vanity_pharma.vanity_pharma_display_url_mode, 
          campaign.vanity_pharma.vanity_pharma_text, 
          campaign.video_brand_safety_suitability, 
          campaign.video_campaign_settings.video_ad_inventory_control.allow_in_feed, 
          campaign.video_campaign_settings.video_ad_inventory_control.allow_in_stream, 
          campaign.video_campaign_settings.video_ad_inventory_control.allow_shorts, 
          segments.conversion_action, 
          segments.conversion_action_category, 
          segments.conversion_action_name, 
          segments.conversion_adjustment, 
          segments.conversion_attribution_event_type, 
          segments.conversion_lag_bucket, 
          segments.conversion_or_adjustment_lag_bucket, 
          segments.day_of_week, 
          segments.external_conversion_source, 
          segments.new_versus_returning_customers, 
          segments.ad_network_type,
          metrics.value_per_conversion, 
          metrics.all_conversions, 
          metrics.conversions, 
          metrics.conversions_value
        FROM campaign 
        WHERE 
          campaign.primary_status IN ('ELIGIBLE', 'LIMITED')
      `;

      const response = await customer.query(query);

      return response.map(({ campaign, metrics, segments }) => {
        return {
          accessible_bidding_strategy: campaign?.accessible_bidding_strategy,
          // ad_serving_optimization_status: enums?.AdServingOptimizationStatus[campaign?.ad_serving_optimization_status],
          advertising_channel_sub_type:
            enums?.AdvertisingChannelSubType[
            campaign?.advertising_channel_sub_type
            ],
          advertising_channel_type:
            enums?.AdvertisingChannelType[campaign?.advertising_channel_type],
          app_campaign_setting_app_id: campaign?.app_campaign_setting?.app_id,
          app_campaign_setting_app_store:
            enums?.AppCampaignAppStore[
            campaign?.app_campaign_setting?.app_store
            ],
          app_campaign_setting_bidding_strategy_goal_type:
            enums?.AppCampaignBiddingStrategyGoalType[
            campaign?.app_campaign_setting?.bidding_strategy_goal_type
            ],
          asset_automation_settings: JSON?.stringify(
            campaign?.asset_automation_settings || '',
          ),
          audience_setting_use_audience_grouped:
            campaign?.audience_setting?.use_audience_grouped,
          base_campaign: campaign?.base_campaign,
          bidding_strategy: campaign?.bidding_strategy,
          bidding_strategy_system_status:
            enums?.BiddingStrategySystemStatus[
            campaign?.bidding_strategy_system_status
            ],
          bidding_strategy_type:
            enums?.BiddingStrategyType[campaign?.bidding_strategy_type],
          campaign_budget: campaign?.campaign_budget,
          campaign_group: campaign?.campaign_group,
          commission_commission_rate_micros:
            campaign?.commission?.commission_rate_micros,
          demand_gen_campaign_settings_upgraded_targeting:
            campaign?.demand_gen_campaign_settings?.upgraded_targeting,
          dynamic_search_ads_setting_domain_name:
            campaign?.dynamic_search_ads_setting?.domain_name,
          dynamic_search_ads_setting_feeds:
            campaign?.dynamic_search_ads_setting?.feeds,
          dynamic_search_ads_setting_language_code:
            campaign?.dynamic_search_ads_setting?.language_code,
          dynamic_search_ads_setting_use_supplied_urls_only:
            campaign?.dynamic_search_ads_setting?.use_supplied_urls_only,
          end_date: campaign?.end_date,
          excluded_parent_asset_field_types:
            campaign?.excluded_parent_asset_field_types?.map(
              (t) => enums?.AssetFieldType[t],
            ),
          excluded_parent_asset_set_types:
            campaign?.excluded_parent_asset_set_types?.map(
              (t) => enums?.AssetFieldType[t],
            ),
          experiment_type:
            enums?.CampaignExperimentType[campaign?.experiment_type],
          final_url_suffix: campaign?.final_url_suffix,
          fixed_cpm_goal: enums?.FixedCpmGoal[campaign?.fixed_cpm?.goal],
          fixed_cpm_target_frequency_info_target_count:
            campaign?.fixed_cpm?.target_frequency_info?.target_count,
          fixed_cpm_target_frequency_info_time_unit:
            enums?.FixedCpmTargetFrequencyTimeUnit[
            campaign?.fixed_cpm?.target_frequency_info?.time_unit
            ],
          frequency_caps: JSON?.stringify(campaign?.frequency_caps || ''),
          geo_target_type_setting_negative_geo_target_type:
            enums?.NegativeGeoTargetType[
            campaign?.geo_target_type_setting?.negative_geo_target_type
            ],
          geo_target_type_setting_positive_geo_target_type:
            enums?.PositiveGeoTargetType[
            campaign?.geo_target_type_setting?.positive_geo_target_type
            ],
          hotel_property_asset_set: campaign?.hotel_property_asset_set,
          hotel_setting_hotel_center_id:
            campaign?.hotel_setting?.hotel_center_id,
          campaign_id: campaign?.id,
          keyword_match_type:
            enums?.CampaignKeywordMatchType[campaign?.keyword_match_type],
          labels: campaign?.labels,
          listing_type: enums?.ListingType[campaign?.listing_type],
          local_campaign_setting_location_source_type:
            enums?.LocationSourceType[
            campaign?.local_campaign_setting?.location_source_type
            ],
          local_services_campaign_settings_category_bids: JSON?.stringify(
            campaign?.local_services_campaign_settings?.category_bids || '',
          ),
          manual_cpa: JSON.stringify(campaign?.manual_cpa || ''),
          manual_cpc_enhanced_cpc_enabled:
            campaign?.manual_cpc?.enhanced_cpc_enabled,
          manual_cpm: JSON.stringify(campaign?.manual_cpm || ''),
          manual_cpv: JSON.stringify(campaign?.manual_cpv || ''),
          maximize_conversion_value_target_roas:
            campaign?.maximize_conversion_value?.target_roas,
          maximize_conversions_target_cpa_micros:
            campaign?.maximize_conversions?.target_cpa_micros,
          name: campaign?.name,
          network_settings_target_content_network:
            campaign?.network_settings?.target_content_network,
          network_settings_target_google_search:
            campaign?.network_settings?.target_google_search,
          network_settings_target_google_tv_network:
            campaign?.network_settings?.target_google_tv_network,
          network_settings_target_partner_search_network:
            campaign?.network_settings?.target_partner_search_network,
          network_settings_target_search_network:
            campaign?.network_settings?.target_search_network,
          network_settings_target_youtube:
            campaign?.network_settings?.target_youtube,
          optimization_goal_setting_optimization_goal_types:
            campaign?.optimization_goal_setting?.optimization_goal_types?.map(
              (t) => enums?.OptimizationGoalType[t],
            ),
          optimization_score: campaign?.optimization_score,
          payment_mode: enums?.PaymentMode[campaign?.payment_mode],
          percent_cpc_cpc_bid_ceiling_micros:
            campaign?.percent_cpc?.cpc_bid_ceiling_micros,
          percent_cpc_enhanced_cpc_enabled:
            campaign?.percent_cpc?.enhanced_cpc_enabled,
          performance_max_upgrade_performance_max_campaign:
            campaign?.performance_max_upgrade?.performance_max_campaign,
          performance_max_upgrade_pre_upgrade_campaign:
            campaign?.performance_max_upgrade?.pre_upgrade_campaign,
          performance_max_upgrade_status:
            enums?.PerformanceMaxUpgradeStatus[
            campaign?.performance_max_upgrade?.status
            ],
          primary_status:
            enums?.CampaignPrimaryStatus[campaign?.primary_status],
          primary_status_reasons: campaign?.primary_status_reasons?.map(
            (t) => enums?.CampaignPrimaryStatusReason[t],
          ),
          real_time_bidding_setting_opt_in:
            campaign?.real_time_bidding_setting?.opt_in,
          resource_name: campaign?.resource_name,
          selective_optimization_conversion_actions:
            campaign?.selective_optimization?.conversion_actions,
          serving_status:
            enums?.CampaignServingStatus[campaign?.serving_status],
          shopping_setting_advertising_partner_ids:
            campaign?.shopping_setting?.advertising_partner_ids,
          shopping_setting_campaign_priority:
            campaign?.shopping_setting?.campaign_priority,
          shopping_setting_disable_product_feed:
            campaign?.shopping_setting?.disable_product_feed,
          shopping_setting_enable_local:
            campaign?.shopping_setting?.enable_local,
          shopping_setting_feed_label: campaign?.shopping_setting?.feed_label,
          shopping_setting_merchant_id: campaign?.shopping_setting?.merchant_id,
          shopping_setting_use_vehicle_inventory:
            campaign?.shopping_setting?.use_vehicle_inventory,
          start_date: campaign?.start_date,
          status: enums?.CampaignStatus[campaign?.status],
          target_cpa_cpc_bid_ceiling_micros:
            campaign?.target_cpa?.cpc_bid_ceiling_micros,
          target_cpa_cpc_bid_floor_micros:
            campaign?.target_cpa?.cpc_bid_floor_micros,
          target_cpa_target_cpa_micros: campaign?.target_cpa?.target_cpa_micros,
          target_cpm_target_frequency_goal_target_count:
            campaign?.target_cpm?.target_frequency_goal?.target_count,
          target_cpm_target_frequency_goal_time_unit:
            enums?.TargetFrequencyTimeUnit[
            campaign?.target_cpm?.target_frequency_goal?.time_unit
            ],
          target_cpv: campaign?.target_cpv as string,
          target_impression_share_cpc_bid_ceiling_micros:
            campaign?.target_impression_share?.cpc_bid_ceiling_micros,
          target_impression_share_location:
            enums?.TargetImpressionShareLocation[
            campaign?.target_impression_share?.location
            ],
          target_impression_share_location_fraction_micros:
            campaign?.target_impression_share?.location_fraction_micros,
          target_roas_cpc_bid_ceiling_micros:
            campaign?.target_roas?.cpc_bid_ceiling_micros,
          target_roas_cpc_bid_floor_micros:
            campaign?.target_roas?.cpc_bid_floor_micros,
          target_roas_target_roas: campaign?.target_roas?.target_roas,
          target_spend_cpc_bid_ceiling_micros:
            campaign?.target_spend?.cpc_bid_ceiling_micros,
          target_spend_target_spend_micros:
            campaign?.target_spend?.target_spend_micros,
          targeting_setting_target_restrictions: JSON?.stringify(
            campaign?.targeting_setting?.target_restrictions || '',
          ),
          tracking_setting_tracking_url:
            campaign?.tracking_setting?.tracking_url,
          tracking_url_template: campaign?.tracking_url_template,
          travel_campaign_settings_travel_account_id:
            campaign?.travel_campaign_settings?.travel_account_id,
          url_custom_parameters: JSON?.stringify(
            campaign?.url_custom_parameters || '',
          ),
          url_expansion_opt_out: campaign?.url_expansion_opt_out,
          vanity_pharma_vanity_pharma_display_url_mode:
            enums?.VanityPharmaDisplayUrlMode[
            campaign?.vanity_pharma?.vanity_pharma_display_url_mode
            ],
          vanity_pharma_vanity_pharma_text:
            enums?.VanityPharmaText[
            campaign?.vanity_pharma?.vanity_pharma_text
            ],
          video_brand_safety_suitability:
            enums?.BrandSafetySuitability[
            campaign?.video_brand_safety_suitability
            ],
          // video_campaign_settings_video_ad_inventory_control_allow_in_feed:
          //   campaign?.video_campaign_settings?.video_ad_inventory_control
          //     ?.allow_in_feed,
          video_campaign_settings_video_ad_inventory_control_allow_in_stream:
            campaign?.video_campaign_settings?.video_ad_inventory_control
              ?.allow_in_stream,
          video_campaign_settings_video_ad_inventory_control_allow_shorts:
            campaign?.video_campaign_settings?.video_ad_inventory_control
              ?.allow_shorts,

          // segments

          // segments_ad_destination_type: enums?.AdDestinationType[segments?.ad_destination_type],
          segments_ad_network_type:
            enums?.AdNetworkType[segments?.ad_network_type],
          segments_conversion_action: segments?.conversion_action,
          segments_conversion_action_category:
            enums?.ConversionActionCategory[
            segments?.conversion_action_category
            ],
          segments_conversion_action_name: segments?.conversion_action_name,
          segments_conversion_adjustment: segments?.conversion_adjustment,
          segments_conversion_attribution_event_type:
            enums?.ConversionAttributionEventType[
            segments?.conversion_attribution_event_type
            ],
          segments_conversion_lag_bucket:
            enums?.ConversionLagBucket[segments?.conversion_lag_bucket],
          segments_conversion_or_adjustment_lag_bucket:
            enums?.ConversionOrAdjustmentLagBucket[
            segments?.conversion_or_adjustment_lag_bucket
            ],
          segments_day_of_week: enums?.DayOfWeek[segments?.day_of_week],
          segments_external_conversion_source:
            enums?.ExternalConversionSource[
            segments?.external_conversion_source
            ],
          segments_new_versus_returning_customers:
            enums?.ConvertingUserPriorEngagementTypeAndLtvBucket[
            segments?.new_versus_returning_customers
            ],

          // metrics

          metrics_all_conversions: metrics?.all_conversions,
          metrics_all_conversions_value: metrics?.all_conversions_value,
          metrics_conversions: metrics?.conversions,
          metrics_value_per_conversion: metrics?.value_per_conversion,
        };
      });
    } catch (error) {
      throw new Error(
        `Google Ads API Error: ${JSON.stringify(error, null, 2)}`,
      );
    }
  };

  private getDataByAllSettledStrategy = async <T>(
    method: (cid: string) => Promise<T[]>,
  ): Promise<T[]> => {
    const customer_ids = await this.getListCustomers();

    let collect_data: T[] = [];

    const promises = customer_ids.map((cid) => method(cid).then((r) => r));

    const results = await Promise.allSettled(promises);

    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        collect_data = collect_data.concat(result.value);
      } else {
        console.error(`ERROR: ${JSON.stringify(result.reason, null, 2)}`);
      }
    });

    return collect_data;
  };

  public async getAllCampaigns(): Promise<AdCampaignDto[]> {
    await this.categoryRepository.delete({});

    const campaigns = await this.getDataByAllSettledStrategy<AdCampaignDto>(
      this.getCampaignsByCustomer,
    );

    const campaignsSaved = await this.categoryRepository.save(campaigns, {
      chunk: 100,
    });

    return campaignsSaved;
  }

  public getGroups = async (
    customer_id = process.env.GOOGLE_ADS_CUSTOMER_ID,
  ): Promise<AdGroupDto[]> => {
    const customer = this.createCustomer(customer_id);

    try {
      const query = `
        SELECT
          ad_group.ad_rotation_mode,
          ad_group.audience_setting.use_audience_grouped,
          ad_group.base_ad_group,
          ad_group.campaign,
          ad_group.cpc_bid_micros,
          ad_group.cpm_bid_micros,
          ad_group.cpv_bid_micros,
          ad_group.display_custom_bid_dimension,
          ad_group.effective_cpc_bid_micros,
          ad_group.effective_target_cpa_micros,
          ad_group.effective_target_cpa_source,
          ad_group.effective_target_roas,
          ad_group.effective_target_roas_source,
          ad_group.excluded_parent_asset_field_types,
          ad_group.excluded_parent_asset_set_types,
          ad_group.final_url_suffix,
          ad_group.fixed_cpm_micros,
          ad_group.id,
          ad_group.labels,
          ad_group.name,
          ad_group.optimized_targeting_enabled,
          ad_group.percent_cpc_bid_micros,
          ad_group.primary_status,
          ad_group.primary_status_reasons,
          ad_group.resource_name,
          ad_group.status,
          ad_group.target_cpa_micros,
          ad_group.target_cpm_micros,
          ad_group.target_cpv_micros,
          ad_group.target_roas,
          ad_group.targeting_setting.target_restrictions,
          ad_group.tracking_url_template,
          ad_group.type,
          ad_group.url_custom_parameters,
          segments.slot,
          metrics.all_conversions,
          metrics.average_cart_size,
          metrics.average_cost,
          metrics.average_cpc,
          metrics.average_cpe,
          metrics.average_cpm,
          metrics.average_order_value_micros,
          metrics.clicks,
          metrics.conversions,
          metrics.conversions_from_interactions_rate,
          metrics.conversions_value,
          metrics.cost_micros,
          metrics.cost_of_goods_sold_micros,
          metrics.cost_per_conversion,
          metrics.cross_sell_cost_of_goods_sold_micros,
          metrics.cross_sell_gross_profit_micros,
          metrics.cross_sell_revenue_micros,
          metrics.cross_sell_units_sold,
          metrics.ctr,
          metrics.engagement_rate,
          metrics.engagements,
          metrics.gmail_forwards,
          metrics.gmail_saves,
          metrics.gmail_secondary_clicks,
          metrics.gross_profit_margin,
          metrics.gross_profit_micros,
          metrics.impressions,
          metrics.interaction_event_types,
          metrics.interaction_rate,
          metrics.interactions,
          metrics.lead_cost_of_goods_sold_micros,
          metrics.lead_gross_profit_micros,
          metrics.lead_revenue_micros,
          metrics.lead_units_sold,
          metrics.new_customer_lifetime_value,
          metrics.orders,
          metrics.revenue_micros,
          metrics.units_sold,
          metrics.value_per_conversion,
          metrics.view_through_conversions
        FROM
          ad_group
        WHERE 
          ad_group.primary_status IN ('ELIGIBLE', 'LIMITED')
        `;

      const response = await customer.query(query);

      return response.map(({ ad_group, campaign, metrics, segments }) => ({
        ad_rotation_mode:
          enums.AdGroupAdRotationMode[ad_group?.ad_rotation_mode],
        audience_setting_use_audience_grouped:
          ad_group?.audience_setting?.use_audience_grouped,
        base_ad_group: ad_group?.base_ad_group,
        campaign: ad_group?.campaign,
        cpc_bid_micros: ad_group?.cpc_bid_micros,
        cpm_bid_micros: ad_group?.cpm_bid_micros,
        cpv_bid_micros: ad_group?.cpv_bid_micros,
        display_custom_bid_dimension:
          enums?.TargetingDimension[ad_group?.display_custom_bid_dimension],
        effective_cpc_bid_micros: ad_group?.effective_cpc_bid_micros,
        effective_target_cpa_micros: ad_group?.effective_target_cpa_micros,
        effective_target_cpa_source:
          enums?.BiddingSource[ad_group?.effective_target_cpa_source],
        effective_target_roas: ad_group?.effective_target_roas,
        effective_target_roas_source:
          enums?.BiddingSource[ad_group?.effective_target_roas_source],
        excluded_parent_asset_field_types:
          ad_group?.excluded_parent_asset_field_types?.map(
            (type) => enums?.AssetFieldType[type],
          ),
        excluded_parent_asset_set_types:
          ad_group?.excluded_parent_asset_set_types?.map(
            (type) => enums?.AssetFieldType[type],
          ),
        final_url_suffix: ad_group?.final_url_suffix,
        fixed_cpm_micros: ad_group?.fixed_cpm_micros,
        ad_group_id: ad_group?.id,
        labels: ad_group?.labels,
        name: ad_group?.name,
        optimized_targeting_enabled: ad_group?.optimized_targeting_enabled,
        percent_cpc_bid_micros: ad_group?.percent_cpc_bid_micros,
        primary_status: enums.AdGroupPrimaryStatus[ad_group?.primary_status],
        primary_status_reasons: ad_group?.primary_status_reasons?.map(
          (t) => enums.AdGroupPrimaryStatusReason[t],
        ),
        resource_name: ad_group?.resource_name,
        status: ad_group?.status,
        target_cpa_micros: ad_group?.target_cpa_micros,
        target_cpm_micros: ad_group?.target_cpm_micros,
        target_cpv_micros: ad_group?.target_cpv_micros,
        target_roas: ad_group?.target_roas,
        targeting_setting_target_restrictions:
          ad_group?.targeting_setting?.target_restrictions?.map(
            (type) => enums?.TargetingDimension[type?.targeting_dimension],
          ),
        tracking_url_template: ad_group?.tracking_url_template,
        type: enums?.AdGroupType[ad_group?.type],
        url_custom_parameters: ad_group.url_custom_parameters?.map(
          (t) => t.value,
        ),
        segments_slot: enums.Slot[segments?.slot],
        metrics_active_view_ctr: metrics?.active_view_ctr,
        metrics_all_conversions: metrics?.all_conversions,
        metrics_average_cart_size: metrics?.average_cart_size,
        metrics_average_cost: metrics?.average_cost,
        metrics_average_cpc: metrics?.average_cpc,
        metrics_average_cpe: metrics?.average_cpe,
        metrics_average_cpm: metrics?.average_cpm,
        metrics_average_order_value_micros: metrics?.average_order_value_micros,
        metrics_clicks: metrics?.clicks,
        metrics_conversions: metrics?.conversions,
        metrics_conversions_from_interactions_rate:
          metrics?.conversions_from_interactions_rate,
        metrics_conversions_from_interactions_value_per_interaction:
          metrics?.conversions_from_interactions_value_per_interaction,
        metrics_conversions_value: metrics?.conversions_value,
        metrics_cost_micros: metrics?.cost_micros,
        metrics_cost_of_goods_sold_micros: metrics?.cost_of_goods_sold_micros,
        metrics_cost_per_conversion: metrics?.cost_per_conversion,
        metrics_cross_sell_cost_of_goods_sold_micros:
          metrics?.cross_sell_cost_of_goods_sold_micros,
        metrics_cross_sell_gross_profit_micros:
          metrics?.cross_sell_gross_profit_micros,
        metrics_cross_sell_revenue_micros: metrics?.cross_sell_revenue_micros,
        metrics_cross_sell_units_sold: metrics?.cross_sell_units_sold,
        metrics_ctr: metrics?.ctr,
        metrics_engagement_rate: metrics?.engagement_rate,
        metrics_engagements: metrics?.engagements,
        metrics_gmail_forwards: metrics?.gmail_forwards,
        metrics_gmail_saves: metrics?.gmail_saves,
        metrics_gmail_secondary_clicks: metrics?.gmail_secondary_clicks,
        metrics_gross_profit_margin: metrics?.gross_profit_margin,
        metrics_gross_profit_micros: metrics?.gross_profit_micros,
        metrics_impressions: metrics?.impressions,
        metrics_interaction_event_types: metrics?.interaction_event_types?.map(
          (t) => enums.InteractionEventType[t],
        ),
        metrics_interaction_rate: metrics?.interaction_rate,
        metrics_interactions: metrics?.interactions,
        metrics_lead_cost_of_goods_sold_micros:
          metrics?.lead_cost_of_goods_sold_micros,
        metrics_lead_gross_profit_micros: metrics?.lead_gross_profit_micros,
        metrics_lead_revenue_micros: metrics?.lead_revenue_micros,
        metrics_lead_units_sold: metrics?.lead_units_sold,
        metrics_new_customer_lifetime_value:
          metrics?.new_customer_lifetime_value,
        metrics_orders: metrics?.orders,
        metrics_revenue_micros: metrics?.revenue_micros,
        metrics_units_sold: metrics?.units_sold,
        metrics_value_per_conversion: metrics?.value_per_conversion,
        metrics_view_through_conversions: metrics?.view_through_conversions,
      }));
    } catch (error) {
      throw new Error(
        `Google Ads API Error: ${JSON.stringify(error, null, 2)}`,
      );
    }
  };

  public async getAllGroups(): Promise<AdGroupDto[]> {
    await this.groupRepository.delete({});

    const groups = await this.getDataByAllSettledStrategy(this.getGroups);

    const groupsSaved = await this.groupRepository.save(groups, { chunk: 100 });

    return groupsSaved;
  }

  public getADPages = async (
    customer_id = process.env.GOOGLE_ADS_CUSTOMER_ID,
  ): Promise<AdPageDto[]> => {
    const customer = this.createCustomer(customer_id);

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
        app_ad_descriptions: ad?.app_ad?.descriptions?.map((item) => item.text),
        app_ad_headlines: ad?.app_ad?.headlines?.map((item) => item.text),
        app_ad_html5_media_bundles: ad?.app_ad?.html5_media_bundles?.map(
          (item) => item.asset,
        ),
        app_ad_images: ad?.app_ad?.images?.map((item) => item.asset),
        app_ad_mandatory_ad_text: ad?.app_ad?.mandatory_ad_text.text,
        app_ad_youtube_videos: ad?.app_ad?.youtube_videos?.map(
          (item) => item.asset,
        ),
        app_engagement_ad_descriptions:
          ad?.app_engagement_ad?.descriptions?.map((item) => item.text),
        app_engagement_ad_headlines: ad?.app_engagement_ad?.headlines?.map(
          (item) => item.text,
        ),
        app_engagement_ad_images: ad?.app_engagement_ad?.images?.map(
          (item) => item.asset,
        ),
        app_engagement_ad_videos: ad?.app_engagement_ad?.videos?.map(
          (item) => item.asset,
        ),
        app_pre_registration_ad_descriptions:
          ad?.app_pre_registration_ad?.descriptions?.map((item) => item.text),
        app_pre_registration_ad_headlines:
          ad?.app_pre_registration_ad?.headlines?.map((item) => item.text),
        app_pre_registration_ad_images:
          ad?.app_pre_registration_ad?.images?.map((item) => item.asset),
        app_pre_registration_ad_youtube_videos:
          ad?.app_pre_registration_ad?.youtube_videos?.map(
            (item) => item.asset,
          ),
        call_ad_business_name: ad?.call_ad?.business_name,
        call_ad_call_tracked: ad?.call_ad?.call_tracked,
        call_ad_conversion_action: ad?.call_ad?.conversion_action,
        call_ad_conversion_reporting_state:
          enums.CallConversionReportingState[
          ad?.call_ad?.conversion_reporting_state
          ],
        call_ad_country_code: ad?.call_ad?.country_code,
        call_ad_description1: ad?.call_ad?.description1,
        call_ad_description2: ad?.call_ad?.description2,
        call_ad_disable_call_conversion: ad?.call_ad?.disable_call_conversion,
        call_ad_headline1: ad?.call_ad?.headline1,
        call_ad_headline2: ad?.call_ad?.headline2,
        call_ad_path1: ad?.call_ad?.path1,
        call_ad_path2: ad?.call_ad?.path2,
        call_ad_phone_number: ad?.call_ad?.phone_number,
        call_ad_phone_number_verification_url:
          ad?.call_ad?.phone_number_verification_url,
        demand_gen_carousel_ad_business_name:
          ad?.demand_gen_carousel_ad?.business_name,
        demand_gen_carousel_ad_call_to_action_text:
          ad?.demand_gen_carousel_ad?.call_to_action_text,
        demand_gen_carousel_ad_carousel_cards:
          ad?.demand_gen_carousel_ad?.carousel_cards?.map((item) => item.asset),
        demand_gen_carousel_ad_description:
          ad?.demand_gen_carousel_ad?.description.text,
        demand_gen_carousel_ad_headline:
          ad?.demand_gen_carousel_ad?.headline?.text,
        demand_gen_carousel_ad_logo_image:
          ad?.demand_gen_carousel_ad?.logo_image?.asset,
        demand_gen_multi_asset_ad_business_name:
          ad?.demand_gen_multi_asset_ad?.business_name,
        demand_gen_multi_asset_ad_call_to_action_text:
          ad?.demand_gen_multi_asset_ad?.call_to_action_text,
        demand_gen_multi_asset_ad_descriptions:
          ad?.demand_gen_multi_asset_ad?.descriptions?.map((item) => item.text),
        demand_gen_multi_asset_ad_headlines:
          ad?.demand_gen_multi_asset_ad?.headlines?.map((item) => item.text),
        demand_gen_multi_asset_ad_lead_form_only:
          ad?.demand_gen_multi_asset_ad?.lead_form_only,
        demand_gen_multi_asset_ad_logo_images:
          ad?.demand_gen_multi_asset_ad?.logo_images?.map((item) => item.asset),
        demand_gen_multi_asset_ad_marketing_images:
          ad?.demand_gen_multi_asset_ad?.marketing_images?.map(
            (item) => item.asset,
          ),
        demand_gen_multi_asset_ad_portrait_marketing_images:
          ad?.demand_gen_multi_asset_ad?.portrait_marketing_images?.map(
            (item) => item.asset,
          ),
        demand_gen_multi_asset_ad_square_marketing_images:
          ad?.demand_gen_multi_asset_ad?.square_marketing_images?.map(
            (item) => item.asset,
          ),
        demand_gen_product_ad_breadcrumb1:
          ad?.demand_gen_product_ad?.breadcrumb1,
        demand_gen_product_ad_breadcrumb2:
          ad?.demand_gen_product_ad?.breadcrumb2,
        demand_gen_product_ad_business_name:
          ad?.demand_gen_product_ad?.business_name?.text,
        demand_gen_product_ad_call_to_action:
          ad?.demand_gen_product_ad?.call_to_action?.asset,
        demand_gen_product_ad_description:
          ad?.demand_gen_product_ad?.description?.text,
        demand_gen_product_ad_headline:
          ad?.demand_gen_product_ad?.headline?.text,
        demand_gen_product_ad_logo_image:
          ad?.demand_gen_product_ad?.logo_image.asset,
        demand_gen_video_responsive_ad_breadcrumb1:
          ad?.demand_gen_video_responsive_ad?.breadcrumb1,
        demand_gen_video_responsive_ad_breadcrumb2:
          ad?.demand_gen_video_responsive_ad?.breadcrumb2,
        demand_gen_video_responsive_ad_business_name:
          ad?.demand_gen_video_responsive_ad?.business_name?.text,
        demand_gen_video_responsive_ad_call_to_actions:
          ad?.demand_gen_video_responsive_ad?.call_to_actions?.map(
            (item) => item.asset,
          ),
        demand_gen_video_responsive_ad_descriptions:
          ad?.demand_gen_video_responsive_ad?.descriptions?.map(
            (item) => item.text,
          ),
        demand_gen_video_responsive_ad_headlines:
          ad?.demand_gen_video_responsive_ad?.headlines?.map(
            (item) => item.text,
          ),
        demand_gen_video_responsive_ad_logo_images:
          ad?.demand_gen_video_responsive_ad?.logo_images?.map(
            (item) => item.asset,
          ),
        demand_gen_video_responsive_ad_long_headlines:
          ad?.demand_gen_video_responsive_ad?.long_headlines?.map(
            (item) => item.text,
          ),
        demand_gen_video_responsive_ad_videos:
          ad?.demand_gen_video_responsive_ad?.videos?.map((item) => item.asset),
        device_preference: enums.Device[ad?.device_preference],
        display_upload_ad_display_upload_product_type:
          enums.DisplayUploadProductType[
          ad?.display_upload_ad?.display_upload_product_type
          ],
        display_upload_ad_media_bundle:
          ad?.display_upload_ad?.media_bundle.asset,

        display_url: ad?.display_url,
        expanded_dynamic_search_ad_description:
          ad?.expanded_dynamic_search_ad?.description,
        expanded_dynamic_search_ad_description2:
          ad?.expanded_dynamic_search_ad?.description2,
        expanded_text_ad_description: ad?.expanded_text_ad?.description,
        expanded_text_ad_description2: ad?.expanded_text_ad?.description2,
        expanded_text_ad_headline_part1: ad?.expanded_text_ad?.headline_part1,
        expanded_text_ad_headline_part2: ad?.expanded_text_ad?.headline_part2,
        expanded_text_ad_headline_part3: ad?.expanded_text_ad?.headline_part3,
        expanded_text_ad_path1: ad?.expanded_text_ad?.path1,
        expanded_text_ad_path2: ad?.expanded_text_ad?.path2,
        final_app_urls: ad?.final_app_urls?.map((item) => item.url),
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
        legacy_responsive_display_ad_accent_color:
          ad?.legacy_responsive_display_ad?.accent_color,
        legacy_responsive_display_ad_allow_flexible_color:
          ad?.legacy_responsive_display_ad?.allow_flexible_color,
        legacy_responsive_display_ad_business_name:
          ad?.legacy_responsive_display_ad?.business_name,
        legacy_responsive_display_ad_call_to_action_text:
          ad?.legacy_responsive_display_ad?.call_to_action_text,
        legacy_responsive_display_ad_description:
          ad?.legacy_responsive_display_ad?.description,
        legacy_responsive_display_ad_format_setting:
          enums.DisplayAdFormatSetting[
          ad?.legacy_responsive_display_ad?.format_setting
          ],
        legacy_responsive_display_ad_logo_image:
          ad?.legacy_responsive_display_ad?.logo_image,
        legacy_responsive_display_ad_long_headline:
          ad?.legacy_responsive_display_ad?.long_headline,
        legacy_responsive_display_ad_main_color:
          ad?.legacy_responsive_display_ad?.main_color,
        legacy_responsive_display_ad_marketing_image:
          ad?.legacy_responsive_display_ad?.marketing_image,
        legacy_responsive_display_ad_price_prefix:
          ad?.legacy_responsive_display_ad?.price_prefix,
        legacy_responsive_display_ad_promo_text:
          ad?.legacy_responsive_display_ad?.promo_text,
        legacy_responsive_display_ad_short_headline:
          ad?.legacy_responsive_display_ad?.short_headline,
        legacy_responsive_display_ad_square_logo_image:
          ad?.legacy_responsive_display_ad?.square_logo_image,
        legacy_responsive_display_ad_square_marketing_image:
          ad?.legacy_responsive_display_ad?.square_marketing_image,
        local_ad_call_to_actions: ad?.local_ad?.call_to_actions?.map(
          (item) => item.text,
        ),
        local_ad_descriptions: ad?.local_ad?.descriptions?.map(
          (item) => item.text,
        ),
        local_ad_headlines: ad?.local_ad?.headlines?.map((item) => item.text),
        local_ad_logo_images: ad?.local_ad?.logo_images?.map(
          (item) => item.asset,
        ),
        local_ad_marketing_images: ad?.local_ad?.marketing_images?.map(
          (item) => item.asset,
        ),
        local_ad_path1: ad?.local_ad?.path1,
        local_ad_path2: ad?.local_ad?.path2,
        local_ad_videos: ad?.local_ad?.videos?.map((item) => item.asset),
        name: ad?.name,
        resource_name: ad?.resource_name,
        responsive_display_ad_accent_color:
          ad?.responsive_display_ad?.accent_color,
        responsive_display_ad_allow_flexible_color:
          ad?.responsive_display_ad?.allow_flexible_color,
        responsive_display_ad_business_name:
          ad?.responsive_display_ad?.business_name,
        responsive_display_ad_call_to_action_text:
          ad?.responsive_display_ad?.call_to_action_text,
        responsive_display_ad_control_spec_enable_asset_enhancements:
          ad?.responsive_display_ad?.control_spec?.enable_asset_enhancements,
        responsive_display_ad_control_spec_enable_autogen_video:
          ad?.responsive_display_ad?.control_spec?.enable_autogen_video,
        responsive_display_ad_descriptions:
          ad?.responsive_display_ad?.descriptions?.map((item) => item.text),
        responsive_display_ad_format_setting:
          enums.DisplayAdFormatSetting[
          ad?.responsive_display_ad?.format_setting
          ],
        responsive_display_ad_headlines:
          ad?.responsive_display_ad?.headlines?.map((item) => item.text),
        responsive_display_ad_logo_images:
          ad?.responsive_display_ad?.logo_images?.map((item) => item.asset),
        responsive_display_ad_long_headline:
          ad?.responsive_display_ad?.long_headline.text,
        responsive_display_ad_main_color: ad?.responsive_display_ad?.main_color,
        responsive_display_ad_marketing_images:
          ad?.responsive_display_ad?.marketing_images?.map(
            (item) => item.asset,
          ),
        responsive_display_ad_price_prefix:
          ad?.responsive_display_ad?.price_prefix,
        responsive_display_ad_promo_text: ad?.responsive_display_ad?.promo_text,
        responsive_display_ad_square_logo_images:
          ad?.responsive_display_ad?.square_logo_images?.map(
            (item) => item.asset,
          ),
        responsive_display_ad_square_marketing_images:
          ad?.responsive_display_ad?.square_marketing_images?.map(
            (item) => item.asset,
          ),
        responsive_display_ad_youtube_videos:
          ad?.responsive_display_ad?.youtube_videos?.map((item) => item.asset),
        responsive_search_ad_descriptions:
          ad?.responsive_search_ad?.descriptions?.map((item) => item.text),
        responsive_search_ad_headlines:
          ad?.responsive_search_ad?.headlines?.map((item) => item.text),
        responsive_search_ad_path1: ad?.responsive_search_ad?.path1,
        responsive_search_ad_path2: ad?.responsive_search_ad?.path2,
        shopping_comparison_listing_ad_headline:
          ad?.shopping_comparison_listing_ad?.headline,
        // shopping_product_ad: ad?.shopping_product_ad,
        // shopping_smart_ad: ad?.shopping_smart_ad,
        smart_campaign_ad_descriptions:
          ad?.smart_campaign_ad?.descriptions?.map((item) => item.text),
        smart_campaign_ad_headlines: ad?.smart_campaign_ad?.headlines?.map(
          (item) => item.text,
        ),
        system_managed_resource_source:
          enums.SystemManagedResourceSource[ad?.system_managed_resource_source],
        tracking_url_template: ad?.tracking_url_template,
        // travel_ad: ad?.travel_ad,
        type: enums.AdType[ad?.type],
        url_collections: ad?.url_collections
          ?.map((item) => item.final_urls)
          .flat(1),
        // url_custom_parameters: ad?.url_custom_parameters,
        video_ad_bumper_action_button_label:
          ad?.video_ad?.bumper?.action_button_label,
        video_ad_bumper_action_headline: ad?.video_ad?.bumper?.action_headline,
        video_ad_in_feed_description1: ad?.video_ad?.in_feed?.description1,
        video_ad_in_feed_description2: ad?.video_ad?.in_feed?.description2,
        video_ad_in_feed_headline: ad?.video_ad?.in_feed?.headline,
        video_ad_in_feed_thumbnail: ad?.video_ad?.in_feed?.thumbnail,
        video_ad_in_stream_action_button_label:
          ad?.video_ad?.in_stream?.action_button_label,
        video_ad_in_stream_action_headline:
          ad?.video_ad?.in_stream?.action_headline,
        video_ad_non_skippable_action_button_label:
          ad?.video_ad?.non_skippable?.action_button_label,
        video_ad_non_skippable_action_headline:
          ad?.video_ad?.non_skippable?.action_headline,
        video_ad_out_stream_description: ad?.video_ad?.out_stream?.description,
        video_ad_out_stream_headline: ad?.video_ad?.out_stream?.headline,
        video_responsive_ad_breadcrumb1: ad?.video_responsive_ad?.breadcrumb1,
        video_responsive_ad_breadcrumb2: ad?.video_responsive_ad?.breadcrumb2,
        video_responsive_ad_call_to_actions:
          ad?.video_responsive_ad?.call_to_actions?.map((item) => item.text),
        video_responsive_ad_companion_banners:
          ad?.video_responsive_ad?.companion_banners?.map((item) => item.asset),
        video_responsive_ad_descriptions:
          ad?.video_responsive_ad?.descriptions?.map((item) => item.text),
        video_responsive_ad_headlines: ad?.video_responsive_ad?.headlines?.map(
          (item) => item.text,
        ),
        video_responsive_ad_long_headlines:
          ad?.video_responsive_ad?.long_headlines?.map((item) => item.text),
        video_responsive_ad_videos: ad?.video_responsive_ad?.videos?.map(
          (item) => item.asset,
        ),
      }));
    } catch (error) {
      throw new Error(
        `Google Ads API Error: ${JSON.stringify(error, null, 2)}`,
      );
    }
  };

  public async getAllAdPages(): Promise<AdPageDto[]> {
    await this.pageRepository.delete({});

    const pages = await this.getDataByAllSettledStrategy(this.getADPages);

    const groupsSaved = await this.pageRepository.save(pages, { chunk: 100 });

    return groupsSaved;
  }

  public getADUserLocationMetrics = async (
    customer_id = process.env.GOOGLE_ADS_CUSTOMER_ID,
  ): Promise<AdAdUserLocationMetricsDto[]> => {
    const customer = this.createCustomer(customer_id);

    const query = `
      SELECT 
        location_view.resource_name, 
        campaign.primary_status, 
        campaign.status, 
        campaign.name, 
        metrics.average_cost, 
        metrics.average_cpc, 
        metrics.average_cpe, 
        metrics.average_cpm, 
        metrics.average_cpv, 
        metrics.all_conversions, 
        metrics.all_conversions_from_interactions_rate, 
        metrics.all_conversions_value, 
        metrics.clicks, 
        metrics.conversions_from_interactions_rate, 
        metrics.conversions, 
        metrics.conversions_value, 
        metrics.cost_micros, 
        metrics.cost_per_all_conversions, 
        metrics.cost_per_conversion, 
        metrics.cross_device_conversions, 
        metrics.ctr, 
        metrics.engagement_rate, 
        metrics.impressions, 
        metrics.engagements, 
        metrics.interaction_event_types, 
        metrics.interaction_rate, 
        metrics.interactions, 
        metrics.value_per_all_conversions, 
        metrics.value_per_conversion, 
        metrics.video_views, 
        metrics.view_through_conversions, 
        metrics.video_view_rate 
      FROM location_view 
      WHERE 
        campaign.primary_status IN ('ELIGIBLE', 'LIMITED') 
      `;

    const response = await customer.query(query);
    console.log(JSON.stringify(response, null, 2));

    return response.map(({ location_view, metrics, campaign }) => ({
      campaign_name: campaign.name,
      campaign_status: enums.CampaignStatus[campaign.status],
      campaign_primary_status: enums.CampaignPrimaryStatus[campaign.status],
      location_view_resource_name: location_view?.resource_name,
      metrics_average_cost: metrics?.average_cost,
      metrics_average_cpc: metrics?.average_cpc,
      metrics_average_cpe: metrics?.average_cpe,
      metrics_average_cpm: metrics?.average_cpm,
      metrics_average_cpv: metrics?.average_cpv,
      metrics_all_conversions: metrics?.all_conversions,
      metrics_all_conversions_from_interactions_rate:
        metrics?.all_conversions_from_interactions_rate,
      metrics_all_conversions_value: metrics?.all_conversions_value,
      metrics_clicks: metrics?.clicks,
      metrics_conversions_from_interactions_rate:
        metrics?.conversions_from_interactions_rate,
      metrics_conversions: metrics?.conversions,
      metrics_conversions_value: metrics?.conversions_value,
      metrics_cost_micros: metrics?.cost_micros,
      metrics_cost_per_all_conversions: metrics?.cost_per_all_conversions,
      metrics_cost_per_conversion: metrics?.cost_per_conversion,
      metrics_cross_device_conversions: metrics?.cross_device_conversions,
      metrics_ctr: metrics?.ctr,
      metrics_engagement_rate: metrics?.engagement_rate,
      metrics_impressions: metrics?.impressions,
      metrics_engagements: metrics?.engagements,
      metrics_interaction_event_types: metrics?.interaction_event_types || [],
      metrics_interaction_rate: metrics?.interaction_rate,
      metrics_interactions: metrics?.interactions,
      metrics_value_per_all_conversions: metrics?.value_per_all_conversions,
      metrics_value_per_conversion: metrics?.value_per_conversion,
      metrics_video_views: metrics?.video_views,
      metrics_view_through_conversions: metrics?.view_through_conversions,
      metrics_video_view_rate: metrics?.video_view_rate,
    }));
  };

  public async getAllAdUserLocationMetrics(): Promise<
    AdAdUserLocationMetricsDto[]
  > {
    await this.pageRepository.delete({});

    const locationMetricsRepository = await this.getDataByAllSettledStrategy(
      this.getADUserLocationMetrics,
    );

    const locationMetricsRepositorySaved =
      await this.userLocationMetricsRepository.save(locationMetricsRepository, {
        chunk: 100,
      });

    return locationMetricsRepositorySaved;
  }

  public async getPreparedCampaign() {
    try {
      const date_format = 'YYYY-MM-DD'
      const date = moment('2021-01-01', date_format)
      const current_date = moment();


      const campaign_query = () => `
        SELECT 
          customer.id, 
          campaign.id, 
          campaign.name,
          campaign.advertising_channel_type, 
          campaign.resource_name, 
          metrics.all_conversions, 
          segments.slot, 
          segments.day_of_week, 
          segments.week, 
          segments.year, 
          segments.month, 
          segments.date 
        FROM campaign 
        WHERE 
          campaign.primary_status IN ('ELIGIBLE', 'LIMITED') 
          AND segments.date = '${date.format(date_format)}' 
      `;

      const group_query = () => `
        SELECT 
          campaign.id, 
          metrics.conversions, 
          metrics.cost_micros, 
          segments.day_of_week, 
          segments.week, 
          segments.year, 
          segments.month, 
          segments.date 
        FROM ad_group 
        WHERE 
          segments.date = '${date.format(date_format)}'
          AND campaign.primary_status IN ('ELIGIBLE', 'LIMITED')
      `;

      const customer_ids = await this.getListCustomers();

      // for await (const id of customer_ids) {
      const customer = this.createCustomer(process.env.GOOGLE_ADS_CUSTOMER_ID);

      const campaigns_data = []
      const group_data = []


      while (current_date.isAfter(date)) {
        const campaigns = customer.query(campaign_query());
        const group = customer.query(group_query());

        date.add('1', 'day');

        campaigns_data.push(campaigns);
        group_data.push(group);
      }


      const campaigns = await Promise.allSettled(campaigns_data)
        .then(r => {
          const result = r.map(i => i.status === 'fulfilled' ? i.value : []).flat(2)

          const formatted = result.map(i => {
            return {
              customer_id: i.customer.id,
              campaign_id: i.campaign.id,
              name: i.campaign.name,
              advertising_channel_type: enums?.AdvertisingChannelType[i?.campaign?.advertising_channel_type],
              resource_name: i.campaign.resource_name,
              metrics_conversions: i.metrics.all_conversions,
              group_metrics_conversions: 0,
              group_metrics_cost_micros: 0,
              segments_week: i.segments.week,
              segments_year: i.segments.year,
              segments_month: i.segments.month,
              segments_date: i.segments.date
            }
          })
          console.log('campaigns');

          return formatted
        }).catch(e => {
          console.log(e);
          return [];
        })

      // const groups = await Promise.allSettled(group_data)
      //   .then(r => {
      //     const result = r.map(i => i.status === 'fulfilled' ? i.value : []).flat(2)
      //     console.log('groups');

      // return result.map(i => {
      //   return {
      //     campaign_id: i.campaign.id,
      //     metrics_conversions: i.metrics.conversions,
      //     metrics_cost_micros: i.metrics.cost_micros,
      //     segments_week: i.segments.week,
      //     segments_year: i.segments.year,
      //     segments_month: i.segments.month,
      //     segments_date: i.segments.date
      //   }
      // })

      // }).catch(e => {
      //   console.log(e);
      //   return [];
      // })

      // const result = campaigns.map(c => {
      //   const campaign = { ...c }
      //   const g = groups.find(g => g.segments_date === c.segments_date && g.campaign_id === c.campaign_id)
      //   campaign.group_metrics_conversions += g.metrics_conversions;
      //   campaign.group_metrics_cost_micros += g.metrics_cost_micros;

      //   return campaign
      // })

      // console.log(JSON.stringify(result, null, 2));


    } catch (error) {
      console.log(`ERROR: ${JSON.stringify(error, null, 2)}`);
    }
  }
}
