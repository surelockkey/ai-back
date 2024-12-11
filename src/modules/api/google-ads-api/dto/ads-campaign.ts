import { Field, Float, Int, ObjectType, OmitType } from "@nestjs/graphql"; // Assuming GraphQL is being used
import { enums } from "google-ads-api"; // Import your enums from the correct module
import { AdCampaign } from "../entity/ad-campaign";

@ObjectType()
export class AdCampaignDto extends OmitType(AdCampaign, ['id']) {

}
