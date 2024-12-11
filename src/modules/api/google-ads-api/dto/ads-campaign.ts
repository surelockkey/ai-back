import { InputType, OmitType, ObjectType } from "@nestjs/graphql"; // Assuming GraphQL is being used
import { AdCampaign } from "../entity/ad-campaign";

@ObjectType()
export class AdCampaignDto extends OmitType(AdCampaign, ['id']) { }
