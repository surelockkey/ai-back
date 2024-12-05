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
          ad_group.id,
          ad_group.name,
          ad_group.status,
          ad_group.primary_status,
          ad_group.cpc_bid_micros,
          ad_group.labels,
          ad_group.tracking_url_template,
          ad_group.primary_status_reasons,
          campaign.id,
          campaign.name,
          campaign.status, 
          campaign.primary_status,
          metrics.clicks,
          metrics.impressions,
          metrics.ctr,
          metrics.cost_micros,
          metrics.conversions,
          segments.device
        FROM
          ad_group
        WHERE 
          ad_group.primary_status IN ('ELIGIBLE', 'LIMITED')
        `;

      const response = await customer.query(query)

      return response.map(({ ad_group, campaign, metrics, segments }) => ({
        ad_group_id: ad_group.id,
        ad_group_name: ad_group.name,
        ad_group_status: enums.AdGroupStatus[ad_group.status],
        ad_group_primary_status: enums.AdGroupPrimaryStatus[ad_group.primary_status],
        ad_group_cpc_bid_micros: ad_group.cpc_bid_micros,
        ad_group_labels: ad_group.labels,
        ad_group_tracking_url_template: ad_group.tracking_url_template,
        ad_group_primary_status_reasons: ad_group.primary_status_reasons,
        campaign_id: campaign.id,
        campaign_name: campaign.name,
        campaign_primary_status: enums.CampaignPrimaryStatus[campaign.primary_status],
        campaign_status: enums.CampaignStatus[campaign.status],
        metrics_clicks: metrics.clicks,
        metrics_impressions: metrics.impressions,
        metrics_ctr: metrics.ctr,
        metrics_cost_micros: metrics.cost_micros,
        metrics_conversions: metrics.conversions,
        segments_device: enums.Device[segments.device],
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

    // try {
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
      device_preference: ad?.device_preference,
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
      id: ad?.id,
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

    // } catch (error) {
    //   throw new Error(`Google Ads API Error: ${JSON.stringify(error, null, 2)}`);
    // }
  }

}
