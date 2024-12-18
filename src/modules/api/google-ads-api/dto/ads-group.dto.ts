import { ObjectType, OmitType } from '@nestjs/graphql';
import { AdGroup } from '../entity/ads-group.entity';

@ObjectType()
export class AdGroupDto extends OmitType(AdGroup, ['id']) { }