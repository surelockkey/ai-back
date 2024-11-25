import { Field, Float, ObjectType } from "@nestjs/graphql"; // Assuming GraphQL is being used
import { enums } from "google-ads-api"; // Import your enums from the correct module

@ObjectType()
export class AdsCampaignDto {
  @Field(() => Float)
  campaign_id: number;

  @Field(() => String)
  campaign_name: string;

  // Allow the type to include additional valid strings like "UNSPECIFIED" and "UNKNOWN"
  @Field(() => String)
  campaign_bidding_strategy_type: enums.BiddingStrategyType | "UNSPECIFIED" | "UNKNOWN";

  @Field(() => Float)
  campaign_budget_amount_micros: number;

  @Field(() => [String]) // Adjusted to represent an array of strings for labels
  campaign_labels: string[];

  @Field(() => Float)
  metrics_cost_micros: number;

  @Field(() => Float)
  metrics_clicks: number;

  @Field(() => Float)
  metrics_impressions: number;

  @Field(() => Float)
  metrics_all_conversions: number;

  @Field(() => Float)
  metrics_conversions: number;
}
