import { Field, Float, ObjectType } from "@nestjs/graphql"; // Assuming GraphQL is being used
import { enums } from "google-ads-api"; // Import your enums from the correct module

@ObjectType()
export class AdsCampaignDto {
  @Field(() => Float, { nullable: true })
  campaign_id: number;

  @Field(() => String, { nullable: true })
  campaign_name: string;

  // Allow the type to include additional valid strings like "UNSPECIFIED" and "UNKNOWN"
  @Field(() => String, { nullable: true })
  campaign_bidding_strategy_type: enums.BiddingStrategyType | "UNSPECIFIED" | "UNKNOWN";

  @Field(() => Float, { nullable: true })
  campaign_budget_amount_micros: number;

  @Field(() => [String, { nullable: true }]) // Adjusted to represent an array of strings for labels
  campaign_labels: string[];

  @Field(() => Float, { nullable: true })
  metrics_cost_micros: number;

  @Field(() => Float, { nullable: true })
  metrics_clicks: number;

  @Field(() => Float, { nullable: true })
  metrics_impressions: number;

  @Field(() => Float, { nullable: true })
  metrics_all_conversions: number;

  @Field(() => Float, { nullable: true })
  metrics_conversions: number;
}
