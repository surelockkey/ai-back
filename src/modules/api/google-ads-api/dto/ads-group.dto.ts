import { ObjectType, OmitType } from '@nestjs/graphql';
import { AdGroup } from '../entity/ad-group.entity';

@ObjectType()
export class AdGroupDto extends OmitType(AdGroup, ['id']) { }