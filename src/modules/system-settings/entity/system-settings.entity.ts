import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Column, Entity } from 'typeorm';

@Entity()
@ObjectType()
export class SystemSettings extends BaseEntity {
  @Field(() => String)
  @Column()
  active_model: string;

  @Field(() => Int)
  @Column('int')
  max_tokens: number;

  @Field(() => String)
  @Column({ 
    default: '_BEAMER_USER_ID_ZNrUUGgM33435=66844ed6-345f-4b3e-b4fb-0a9a04d227cc; _BEAMER_FIRST_VISIT_ZNrUUGgM33435=2023-05-19T14:01:33.028Z; G_ENABLED_IDPS=google; intercom-id-j24bh4lc=38fdf153-6b40-4faf-b401-0bdfb6c5be58; intercom-device-id-j24bh4lc=7c2a063a-0bef-4235-9bf2-82ad8884caea; __stripe_mid=6b64ae2d-ac8d-453b-9b90-c8bc9b2a015925cb10; _BEAMER_FILTER_BY_URL_ZNrUUGgM33435=false; fs_uid=#6MW14#4693227672162304:4905039562788864:::#c7ea125e#/1716040892; __stripe_sid=69228f33-526a-4468-9db8-2b3ee4ecd9267fdf24; sendajob_sessid=MjY4MjU4LTY0NmExODlhMDk0ZTI%3D; sendajob_user=dXNlcmlkXzI2ODI1OA%3D%3D; amp_6bc83c=kHljiRM76oGRGAp-Hrxpq8.MjY4MjU4..1h0v6oqiq.1h0v70i9r.6.s.12; intercom-session-j24bh4lc=L1Y3azJhb1NBTEFSOFEwNm15RU1uREZRT3BQSVlnbmNWbmYzNWRXanR6NEpIZVFIRDJDNVFUSGt2WHhoL1ByeS0taXppbUtOOUgrcGpsK0VmRW4rNTdEZz09--7aaa8654dd351cb2dfc5c7bc980c3dc8fa321198'
   })
  workiz_cookie: string;
}
