import { OmitType, ObjectType } from "@nestjs/graphql"; // Assuming GraphQL is being used
import { AdUserLocationMetrics } from "../entity/ad-user-location-view.entity";

@ObjectType()
export class AdAdUserLocationMetricsDto extends OmitType(AdUserLocationMetrics, ['id']) { }
