import { ObjectType, OmitType } from '@nestjs/graphql';
import { AdPage } from '../entity/ad-ad.entity';

@ObjectType()
export class AdPageDto extends OmitType(AdPage, ['id']) { }