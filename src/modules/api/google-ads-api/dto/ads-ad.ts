import { Field, Float, ObjectType } from '@nestjs/graphql';
import { enums } from 'google-ads-api';

@ObjectType()
export class AdDto {
  @Field(() => Float, { nullable: true })
  ad_id?: number;

  @Field(() => Boolean, { nullable: true })
  added_by_google_ads?: boolean;

  @Field(() => [String], { nullable: true })
  app_ad_descriptions?: string[];

  @Field(() => [String], { nullable: true })
  app_ad_headlines?: string[];

  @Field(() => [String], { nullable: true })
  app_ad_html5_media_bundles?: string[];

  @Field(() => [String], { nullable: true })
  app_ad_html5_media_bundles_asset?: string[];

  @Field(() => [String], { nullable: true })
  app_ad_images?: string[];

  @Field(() => [String], { nullable: true })
  app_ad_images_asset?: string[];

  @Field(() => String, { nullable: true })
  app_ad_mandatory_ad_text?: string;

  @Field(() => [String], { nullable: true })
  app_ad_youtube_videos?: string[];

  @Field(() => [String], { nullable: true })
  app_ad_youtube_videos_asset?: string[];

  @Field(() => [String], { nullable: true })
  app_engagement_ad_descriptions?: string[];

  @Field(() => [String], { nullable: true })
  app_engagement_ad_headlines?: string[];

  @Field(() => [String], { nullable: true })
  app_engagement_ad_images?: string[];

  @Field(() => [String], { nullable: true })
  app_engagement_ad_images_asset?: string[];

  @Field(() => [String], { nullable: true })
  app_engagement_ad_videos?: string[];

  @Field(() => [String], { nullable: true })
  app_engagement_ad_videos_asset?: string[];

  @Field(() => [String], { nullable: true })
  app_pre_registration_ad_descriptions?: string[];

  @Field(() => [String], { nullable: true })
  app_pre_registration_ad_headlines?: string[];

  @Field(() => [String], { nullable: true })
  app_pre_registration_ad_images?: string[];

  @Field(() => [String], { nullable: true })
  app_pre_registration_ad_images_asset?: string[];

  @Field(() => [String], { nullable: true })
  app_pre_registration_ad_youtube_videos?: string[];

  @Field(() => [String], { nullable: true })
  app_pre_registration_ad_youtube_videos_asset?: string[];

  @Field(() => String, { nullable: true })
  call_ad_business_name?: string;

  @Field(() => Boolean, { nullable: true })
  call_ad_call_tracked?: boolean;

  @Field(() => String, { nullable: true })
  call_ad_conversion_action?: string;

  @Field(() => String, { nullable: true })
  call_ad_conversion_reporting_state?: string | enums.CallConversionReportingState;

  @Field(() => String, { nullable: true })
  call_ad_country_code?: string;

  @Field(() => String, { nullable: true })
  call_ad_description1?: string;

  @Field(() => String, { nullable: true })
  call_ad_description2?: string;

  @Field(() => Boolean, { nullable: true })
  call_ad_disable_call_conversion?: boolean;

  @Field(() => String, { nullable: true })
  call_ad_headline1?: string;

  @Field(() => String, { nullable: true })
  call_ad_headline2?: string;

  @Field(() => String, { nullable: true })
  call_ad_path1?: string;

  @Field(() => String, { nullable: true })
  call_ad_path2?: string;

  @Field(() => String, { nullable: true })
  call_ad_phone_number?: string;

  @Field(() => String, { nullable: true })
  call_ad_phone_number_verification_url?: string;

  // Demand Gen Carousel Ad
  @Field(() => String, { nullable: true })
  demand_gen_carousel_ad_business_name?: string;

  @Field(() => String, { nullable: true })
  demand_gen_carousel_ad_call_to_action_text?: string;

  @Field(() => [String], { nullable: true })
  demand_gen_carousel_ad_carousel_cards?: string[];

  @Field(() => [String], { nullable: true })
  demand_gen_carousel_ad_carousel_cards_asset?: string[];

  @Field(() => String, { nullable: true })
  demand_gen_carousel_ad_description?: string;

  @Field(() => String, { nullable: true })
  demand_gen_carousel_ad_headline?: string;

  @Field(() => String, { nullable: true })
  demand_gen_carousel_ad_logo_image?: string;

  @Field(() => String, { nullable: true })
  demand_gen_carousel_ad_logo_image_asset?: string;

  // Demand Gen Multi Asset Ad
  @Field(() => String, { nullable: true })
  demand_gen_multi_asset_ad_business_name?: string;

  @Field(() => String, { nullable: true })
  demand_gen_multi_asset_ad_call_to_action_text?: string;

  @Field(() => [String], { nullable: true })
  demand_gen_multi_asset_ad_descriptions?: string[];

  @Field(() => [String], { nullable: true })
  demand_gen_multi_asset_ad_headlines?: string[];

  @Field(() => Boolean, { nullable: true })
  demand_gen_multi_asset_ad_lead_form_only?: boolean;

  @Field(() => [String], { nullable: true })
  demand_gen_multi_asset_ad_logo_images?: string[];

  @Field(() => [String], { nullable: true })
  demand_gen_multi_asset_ad_logo_images_asset?: string[];

  @Field(() => [String], { nullable: true })
  demand_gen_multi_asset_ad_marketing_images?: string[];

  @Field(() => [String], { nullable: true })
  demand_gen_multi_asset_ad_marketing_images_asset?: string[];

  @Field(() => [String], { nullable: true })
  demand_gen_multi_asset_ad_portrait_marketing_images?: string[];

  @Field(() => [String], { nullable: true })
  demand_gen_multi_asset_ad_portrait_marketing_images_asset?: string[];

  @Field(() => [String], { nullable: true })
  demand_gen_multi_asset_ad_square_marketing_images?: string[];

  @Field(() => [String], { nullable: true })
  demand_gen_multi_asset_ad_square_marketing_images_asset?: string[];

  // Demand Gen Product Ad
  @Field(() => String, { nullable: true })
  demand_gen_product_ad_breadcrumb1?: string;

  @Field(() => String, { nullable: true })
  demand_gen_product_ad_breadcrumb2?: string;

  @Field(() => String, { nullable: true })
  demand_gen_product_ad_business_name?: string;

  @Field(() => String, { nullable: true })
  demand_gen_product_ad_call_to_action?: string;

  @Field(() => [String], { nullable: true })
  demand_gen_product_ad_call_to_action_asset?: string[];

  @Field(() => String, { nullable: true })
  demand_gen_product_ad_description?: string;

  @Field(() => String, { nullable: true })
  demand_gen_product_ad_headline?: string;

  @Field(() => String, { nullable: true })
  demand_gen_product_ad_logo_image?: string;

  @Field(() => [String], { nullable: true })
  demand_gen_product_ad_logo_image_asset?: string[];

  // Demand Gen Video Responsive Ad
  @Field(() => String, { nullable: true })
  demand_gen_video_responsive_ad_breadcrumb1?: string;

  @Field(() => String, { nullable: true })
  demand_gen_video_responsive_ad_breadcrumb2?: string;

  @Field(() => String, { nullable: true })
  demand_gen_video_responsive_ad_business_name?: string;

  @Field(() => [String], { nullable: true })
  demand_gen_video_responsive_ad_call_to_actions?: string[];

  @Field(() => [String], { nullable: true })
  demand_gen_video_responsive_ad_call_to_actions_asset?: string[];

  @Field(() => [String], { nullable: true })
  demand_gen_video_responsive_ad_descriptions?: string[];

  @Field(() => [String], { nullable: true })
  demand_gen_video_responsive_ad_headlines?: string[];

  @Field(() => [String], { nullable: true })
  demand_gen_video_responsive_ad_logo_images?: string[];

  @Field(() => [String], { nullable: true })
  demand_gen_video_responsive_ad_logo_images_asset?: string[];

  @Field(() => [String], { nullable: true })
  demand_gen_video_responsive_ad_long_headlines?: string[];

  @Field(() => [String], { nullable: true })
  demand_gen_video_responsive_ad_videos?: string[];

  @Field(() => [String], { nullable: true })
  demand_gen_video_responsive_ad_videos_asset?: string[];

  // Display Upload Ad
  @Field(() => String, { nullable: true })
  display_upload_ad_display_upload_product_type?: string | enums.DisplayUploadProductType;

  @Field(() => String, { nullable: true })
  display_upload_ad_media_bundle?: string | enums.MediaType;

  @Field(() => [String], { nullable: true })
  display_upload_ad_media_bundle_asset?: string[];

  @Field(() => String, { nullable: true })
  display_url?: string;


  @Field(() => String, { nullable: true })
  expanded_dynamic_search_ad_description?: string;

  @Field(() => String, { nullable: true })
  expanded_dynamic_search_ad_description2?: string;

  // Expanded Text Ad
  @Field(() => String, { nullable: true })
  expanded_text_ad_description?: string;

  @Field(() => String, { nullable: true })
  expanded_text_ad_description2?: string;

  @Field(() => String, { nullable: true })
  expanded_text_ad_headline_part1?: string;

  @Field(() => String, { nullable: true })
  expanded_text_ad_headline_part2?: string;

  @Field(() => String, { nullable: true })
  expanded_text_ad_headline_part3?: string;

  @Field(() => String, { nullable: true })
  expanded_text_ad_path1?: string;

  @Field(() => String, { nullable: true })
  expanded_text_ad_path2?: string;

  // Final URLs
  @Field(() => [String], { nullable: true })
  final_app_urls?: string[];

  @Field(() => [String], { nullable: true })
  final_mobile_urls?: string[];

  @Field(() => String, { nullable: true })
  final_url_suffix?: string;

  @Field(() => [String], { nullable: true })
  final_urls?: string[];

  // Hotel Ad
  @Field(() => String, { nullable: true })
  hotel_ad?: string;

  // Image Ad
  @Field(() => [String], { nullable: true })
  image_ad_image_asset_asset?: string[];

  @Field(() => String, { nullable: true })
  image_ad_image_url?: string;

  @Field(() => String, { nullable: true })
  image_ad_mime_type?: string | enums.MimeType;

  @Field(() => String, { nullable: true })
  image_ad_name?: string;

  @Field(() => Number, { nullable: true })
  image_ad_pixel_height?: number;

  @Field(() => Number, { nullable: true })
  image_ad_pixel_width?: number;

  @Field(() => String, { nullable: true })
  image_ad_preview_image_url?: string;

  @Field(() => Number, { nullable: true })
  image_ad_preview_pixel_height?: number;

  @Field(() => Number, { nullable: true })
  image_ad_preview_pixel_width?: number;

  // Legacy App Install Ad
  @Field(() => String, { nullable: true })
  legacy_app_install_ad?: string;

  // Legacy Responsive Display Ad
  @Field(() => String, { nullable: true })
  legacy_responsive_display_ad_accent_color?: string;

  @Field(() => Boolean, { nullable: true })
  legacy_responsive_display_ad_allow_flexible_color?: boolean;

  @Field(() => String, { nullable: true })
  legacy_responsive_display_ad_business_name?: string;

  @Field(() => String, { nullable: true })
  legacy_responsive_display_ad_call_to_action_text?: string;

  @Field(() => String, { nullable: true })
  legacy_responsive_display_ad_description?: string;

  @Field(() => String, { nullable: true })
  legacy_responsive_display_ad_format_setting?: string | enums.DisplayAdFormatSetting;

  @Field(() => String, { nullable: true })
  legacy_responsive_display_ad_logo_image?: string;

  @Field(() => String, { nullable: true })
  legacy_responsive_display_ad_long_headline?: string;

  @Field(() => String, { nullable: true })
  legacy_responsive_display_ad_main_color?: string;

  @Field(() => String, { nullable: true })
  legacy_responsive_display_ad_marketing_image?: string;

  @Field(() => String, { nullable: true })
  legacy_responsive_display_ad_price_prefix?: string;

  @Field(() => String, { nullable: true })
  legacy_responsive_display_ad_promo_text?: string;

  @Field(() => String, { nullable: true })
  legacy_responsive_display_ad_short_headline?: string;

  @Field(() => String, { nullable: true })
  legacy_responsive_display_ad_square_logo_image?: string;

  @Field(() => String, { nullable: true })
  legacy_responsive_display_ad_square_marketing_image?: string;

  // Local Ad
  @Field(() => [String], { nullable: true })
  local_ad_call_to_actions?: string[];

  @Field(() => [String], { nullable: true })
  local_ad_descriptions?: string[];

  @Field(() => [String], { nullable: true })
  local_ad_headlines?: string[];

  @Field(() => [String], { nullable: true })
  local_ad_logo_images?: string[];

  @Field(() => [String], { nullable: true })
  local_ad_logo_images_asset?: string[];

  @Field(() => [String], { nullable: true })
  local_ad_marketing_images?: string[];

  @Field(() => [String], { nullable: true })
  local_ad_marketing_images_asset?: string[];

  @Field(() => String, { nullable: true })
  local_ad_path1?: string;

  @Field(() => String, { nullable: true })
  local_ad_path2?: string;

  @Field(() => [String], { nullable: true })
  local_ad_videos?: string[];

  @Field(() => [String], { nullable: true })
  local_ad_videos_asset?: string[];

  // Name and Resource Name
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  resource_name?: string;

  // Responsive Display Ad
  @Field(() => String, { nullable: true })
  responsive_display_ad_accent_color?: string;

  @Field(() => Boolean, { nullable: true })
  responsive_display_ad_allow_flexible_color?: boolean;

  @Field(() => String, { nullable: true })
  responsive_display_ad_business_name?: string;

  @Field(() => String, { nullable: true })
  responsive_display_ad_call_to_action_text?: string;

  @Field(() => Boolean, { nullable: true })
  responsive_display_ad_control_spec_enable_asset_enhancements?: boolean;

  @Field(() => Boolean, { nullable: true })
  responsive_display_ad_control_spec_enable_autogen_video?: boolean;

  @Field(() => [String], { nullable: true })
  responsive_display_ad_descriptions?: string[];

  @Field(() => String, { nullable: true })
  responsive_display_ad_format_setting?: string | enums.DisplayAdFormatSetting;

  @Field(() => [String], { nullable: true })
  responsive_display_ad_headlines?: string[];

  @Field(() => [String], { nullable: true })
  responsive_display_ad_logo_images?: string[];

  @Field(() => [String], { nullable: true })
  responsive_display_ad_logo_images_asset?: string[];

  @Field(() => String, { nullable: true })
  responsive_display_ad_long_headline?: string;

  @Field(() => String, { nullable: true })
  responsive_display_ad_main_color?: string;

  @Field(() => [String], { nullable: true })
  responsive_display_ad_marketing_images?: string[];

  @Field(() => [String], { nullable: true })
  responsive_display_ad_marketing_images_asset?: string[];

  @Field(() => String, { nullable: true })
  responsive_display_ad_price_prefix?: string;

  @Field(() => String, { nullable: true })
  responsive_display_ad_promo_text?: string;

  @Field(() => [String], { nullable: true })
  responsive_display_ad_square_logo_images?: string[];

  @Field(() => [String], { nullable: true })
  responsive_display_ad_square_logo_images_asset?: string[];

  @Field(() => [String], { nullable: true })
  responsive_display_ad_square_marketing_images?: string[];

  @Field(() => [String], { nullable: true })
  responsive_display_ad_square_marketing_images_asset?: string[];

  @Field(() => [String], { nullable: true })
  responsive_display_ad_youtube_videos?: string[];

  @Field(() => [String], { nullable: true })
  responsive_display_ad_youtube_videos_asset?: string[];

  // Responsive Search Ad
  @Field(() => [String], { nullable: true })
  responsive_search_ad_descriptions?: string[];

  @Field(() => [String], { nullable: true })
  responsive_search_ad_headlines?: string[];

  @Field(() => String, { nullable: true })
  responsive_search_ad_path1?: string;

  @Field(() => String, { nullable: true })
  responsive_search_ad_path2?: string;

  // Shopping Comparison Listing Ad
  @Field(() => String, { nullable: true })
  shopping_comparison_listing_ad_headline?: string;

  // Shopping Product Ad
  @Field(() => String, { nullable: true })
  shopping_product_ad?: string;

  // Shopping Smart Ad
  @Field(() => String, { nullable: true })
  shopping_smart_ad?: string;

  // Smart Campaign Ad
  @Field(() => [String], { nullable: true })
  smart_campaign_ad_descriptions?: string[];

  @Field(() => [String], { nullable: true })
  smart_campaign_ad_headlines?: string[];

  // System Managed Resource Source
  @Field(() => String, { nullable: true })
  system_managed_resource_source?: string | enums.SystemManagedResourceSource;

  // Tracking URL Template
  @Field(() => String, { nullable: true })
  tracking_url_template?: string;

  // Travel Ad
  @Field(() => String, { nullable: true })
  travel_ad?: string;

  @Field(() => String, { nullable: true })
  device_preference?: string | enums.Device;

  // Ad Type
  @Field(() => String, { nullable: true })
  type?: string | enums.AdType;


  @Field(() => [String], { nullable: true })
  url_collections?: string[];

  // URL Custom Parameters
  @Field(() => [String], { nullable: true })
  url_custom_parameters?: string[];

  // Video Ads (Bumper)
  @Field(() => String, { nullable: true })
  video_ad_bumper_action_button_label?: string;

  @Field(() => String, { nullable: true })
  video_ad_bumper_action_headline?: string;

  @Field(() => String, { nullable: true })
  video_ad_bumper_companion_banner_asset?: string;

  // Video Ads (In Feed)
  @Field(() => String, { nullable: true })
  video_ad_in_feed_description1?: string;

  @Field(() => String, { nullable: true })
  video_ad_in_feed_description2?: string;

  @Field(() => String, { nullable: true })
  video_ad_in_feed_headline?: string;

  @Field(() => String, { nullable: true })
  video_ad_in_feed_thumbnail?: string | enums.VideoThumbnail;

  // Video Ads (In Stream)
  @Field(() => String, { nullable: true })
  video_ad_in_stream_action_button_label?: string;

  @Field(() => String, { nullable: true })
  video_ad_in_stream_action_headline?: string;

  @Field(() => String, { nullable: true })
  video_ad_in_stream_companion_banner_asset?: string;

  // Video Ads (Non-Skippable)
  @Field(() => String, { nullable: true })
  video_ad_non_skippable_action_button_label?: string;

  @Field(() => String, { nullable: true })
  video_ad_non_skippable_action_headline?: string;

  @Field(() => String, { nullable: true })
  video_ad_non_skippable_companion_banner_asset?: string;

  // Video Ads (Out Stream)
  @Field(() => String, { nullable: true })
  video_ad_out_stream_description?: string;

  @Field(() => String, { nullable: true })
  video_ad_out_stream_headline?: string;

  @Field(() => String, { nullable: true })
  video_ad_video_asset?: string;

  // Video Responsive Ads
  @Field(() => String, { nullable: true })
  video_responsive_ad_breadcrumb1?: string;

  @Field(() => String, { nullable: true })
  video_responsive_ad_breadcrumb2?: string;

  @Field(() => [String], { nullable: true })
  video_responsive_ad_call_to_actions?: string[];

  @Field(() => [String], { nullable: true })
  video_responsive_ad_companion_banners?: string[];

  @Field(() => [String], { nullable: true })
  video_responsive_ad_companion_banners_asset?: string[];

  @Field(() => [String], { nullable: true })
  video_responsive_ad_descriptions?: string[];

  @Field(() => [String], { nullable: true })
  video_responsive_ad_headlines?: string[];

  @Field(() => [String], { nullable: true })
  video_responsive_ad_long_headlines?: string[];

  @Field(() => [String], { nullable: true })
  video_responsive_ad_videos?: string[];

  @Field(() => [String], { nullable: true })
  video_responsive_ad_videos_asset?: string[];
}