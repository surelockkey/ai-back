import { InputType, OmitType } from "@nestjs/graphql"; // Assuming GraphQL is being used
import { AdCampaign } from "../entity/ad-campaign";

@InputType()
export class AdCampaignDto extends OmitType(AdCampaign, ['id']) { }
