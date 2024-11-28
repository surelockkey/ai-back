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
    default:
      '_vwo_uuid_v2=DC209D6250FD56CDDE0B25356BD6824AD|3a3b32b8adfdc85f025c95ae866772fd; _vwo_uuid=DC209D6250FD56CDDE0B25356BD6824AD; _vwo_ds=3%241730290030%3A4.5566851%3A%3A; _vis_opt_s=1%7C; _vis_opt_test_cookie=1; _ga=GA1.1.1190416462.1730290031; _vis_opt_exp_78_combi=1; FPAU=1.1.1211795359.1730290031; _fbp=fb.1.1730290031827.1380850722; _ttp=szp7WaZGTaNDAj8cNiPjR4pbjss; _gtmeec=e30%3D; G_ENABLED_IDPS=google; _BEAMER_USER_ID_ZNrUUGgM33435=d842fb83-3249-42ab-9138-52ac0045710e; _BEAMER_FIRST_VISIT_ZNrUUGgM33435=2024-10-30T12:08:01.016Z; hubspotutk=86de4dba7e5eb79e750a82c3a5db439f; __hssrc=1; intercom-device-id-j24bh4lc=c0ca2763-6654-423a-a57a-a27a1b94019f; __stripe_mid=cca13795-7c0b-47da-8afb-7508954a8487b6bc19; sajSource={"ref":"https://www.google.com/","src":"","lp":"https://www.workiz.com/?_gl=1*wm0qei*_gcl_au*MTIxMTc5NTM1OS4xNzMwMjkwMDMxLjE2Mjc5MjQzOTYuMTczMDI5ODE4OC4xNzMwMjk4Mjg1*FPAU*MTIxMTc5NTM1OS4xNzMwMjkwMDMx","k":"","entry":"https://www.workiz.com/","partner_key":"","partnerStackPartnerKey":"","utm_adgroup":"","utm_source":"Direct","utm_medium":"Direct","utm_campaign":"","utm_term":"","utm_keyword":"","sid":"1730298159","fbclid":"","gclid":"","msclkid":"","utm_placement":"","utm_matchtype":"","utm_device":"desktop","utm_popup":"","utm_ad_id":"","utm_adset_id":"","utm_campaign_id":"","ssu":"","ttclid":"","GAID":"1190416462.1730290031","HBID":"86de4dba7e5eb79e750a82c3a5db439f","ttp":"szp7WaZGTaNDAj8cNiPjR4pbjss","vwo_uuid":"DC209D6250FD56CDDE0B25356BD6824AD"}; _gcl_au=1.1.1211795359.1730290031.1627924396.1730298188.1730299608; sendajob_sessid=MjY4MjU4LTY3MjI0NmRhNTYxMGU%3D; sendajob_user=dXNlcmlkXzI2ODI1OA%3D%3D; _clck=60s5bq%7C2%7Cfqh%7C0%7C1764; __hstc=193530482.86de4dba7e5eb79e750a82c3a5db439f.1730298195075.1730379194207.1730383743144.6; fs_uid=#6MW14#948f6e26-5125-48d8-813c-1cf20b5baf57:3c430ee9-9493-42e9-88f2-e7c9e046c07d:1730382283870::5#c7ea125e#/1761835929; intercom-session-j24bh4lc=ZjZWVmM5UlRoRFcrejhmb1Qyd2NqWWFtbldOUlFIYVZHZkJsQW9WUHBlOEw0MW1JN3J3ZCsrVi9kT2R6R2xGZy0tYmZOSW54b1RDbjlXVjNIMXZOdERkZz09--92e10439327a23633cc1cc43fca98f1d2077b633; _clsk=1q9pehk%7C1730386770648%7C1%7C1%7Ck.clarity.ms%2Fcollect; amp_6bc83c=gaI0EJpk4o6s-tCPrPr4GI.MjY4MjU4..1ibk0lf13.1ibk0lf14.1b.38.4j; cf_clearance=xp6EwkkWMoUsVR_pkDV6byhjWUkDmhCE7yR5jXc33ic-1730469870-1.2.1.1-hmCFMriFR20NZ3GVNhLlCBdO9kDiMUKVGYkIouIfIRKFAMIJ6A9KgwrRlD3iX4mX5wNv9wbjjRplSwmd5QpoQf6HcXsgfPmBD4JFXkuGiBZQVwS.e4z2lLwnhIZGzDkGUJemw7DgKpBBu6aKVK135bfWjW.DCX2uBaPqITit6.PpmfB_IEWmYu7NfqNrfihtUcdEPHwXR.kv0BeZk5UlBoXwMJ14pDvl4I.S3KVr1xF0QZ3a6FOlkLcgQ1T67.YjyTyuapMPTuS1p8u2_wKFEmfoLHF.t.zfRWk8eCnxuHbn1CobRtAwLPisZB08k2trnUvDJ07VgLxwya8.JODeQ4DoPra8sol6v5pUkNTDXH3C9fqmJiXZptts2rLV..xjEGmSOB8swqxEiPJAVOt7Bw; _ga_QV0GQK5R0N=GS1.1.1730469870.10.0.1730469871.59.0.0; _BEAMER_FILTER_BY_URL_ZNrUUGgM33435=false; _BEAMER_FILTER_BY_URL_ZNrUUGgM33435=false',
  })
  workiz_cookie: string;

  @Field(() => String)
  @Column({
    default:
      '_vwo_uuid_v2=DC209D6250FD56CDDE0B25356BD6824AD|3a3b32b8adfdc85f025c95ae866772fd; _vwo_uuid=DC209D6250FD56CDDE0B25356BD6824AD; _vwo_ds=3%241730290030%3A4.5566851%3A%3A; _vis_opt_s=1%7C; _vis_opt_test_cookie=1; _ga=GA1.1.1190416462.1730290031; _vis_opt_exp_78_combi=1; FPAU=1.1.1211795359.1730290031; _fbp=fb.1.1730290031827.1380850722; _ttp=szp7WaZGTaNDAj8cNiPjR4pbjss; _gtmeec=e30%3D; G_ENABLED_IDPS=google; _BEAMER_USER_ID_ZNrUUGgM33435=d842fb83-3249-42ab-9138-52ac0045710e; _BEAMER_FIRST_VISIT_ZNrUUGgM33435=2024-10-30T12:08:01.016Z; hubspotutk=86de4dba7e5eb79e750a82c3a5db439f; __hssrc=1; intercom-device-id-j24bh4lc=c0ca2763-6654-423a-a57a-a27a1b94019f; __stripe_mid=cca13795-7c0b-47da-8afb-7508954a8487b6bc19; sajSource={"ref":"https://www.google.com/","src":"","lp":"https://www.workiz.com/?_gl=1*wm0qei*_gcl_au*MTIxMTc5NTM1OS4xNzMwMjkwMDMxLjE2Mjc5MjQzOTYuMTczMDI5ODE4OC4xNzMwMjk4Mjg1*FPAU*MTIxMTc5NTM1OS4xNzMwMjkwMDMx","k":"","entry":"https://www.workiz.com/","partner_key":"","partnerStackPartnerKey":"","utm_adgroup":"","utm_source":"Direct","utm_medium":"Direct","utm_campaign":"","utm_term":"","utm_keyword":"","sid":"1730298159","fbclid":"","gclid":"","msclkid":"","utm_placement":"","utm_matchtype":"","utm_device":"desktop","utm_popup":"","utm_ad_id":"","utm_adset_id":"","utm_campaign_id":"","ssu":"","ttclid":"","GAID":"1190416462.1730290031","HBID":"86de4dba7e5eb79e750a82c3a5db439f","ttp":"szp7WaZGTaNDAj8cNiPjR4pbjss","vwo_uuid":"DC209D6250FD56CDDE0B25356BD6824AD"}; _gcl_au=1.1.1211795359.1730290031.1627924396.1730298188.1730299608; sendajob_sessid=MjY4MjU4LTY3MjI0NmRhNTYxMGU%3D; sendajob_user=dXNlcmlkXzI2ODI1OA%3D%3D; _clck=60s5bq%7C2%7Cfqh%7C0%7C1764; __hstc=193530482.86de4dba7e5eb79e750a82c3a5db439f.1730298195075.1730379194207.1730383743144.6; fs_uid=#6MW14#948f6e26-5125-48d8-813c-1cf20b5baf57:3c430ee9-9493-42e9-88f2-e7c9e046c07d:1730382283870::5#c7ea125e#/1761835929; intercom-session-j24bh4lc=ZjZWVmM5UlRoRFcrejhmb1Qyd2NqWWFtbldOUlFIYVZHZkJsQW9WUHBlOEw0MW1JN3J3ZCsrVi9kT2R6R2xGZy0tYmZOSW54b1RDbjlXVjNIMXZOdERkZz09--92e10439327a23633cc1cc43fca98f1d2077b633; _clsk=1q9pehk%7C1730386770648%7C1%7C1%7Ck.clarity.ms%2Fcollect; amp_6bc83c=gaI0EJpk4o6s-tCPrPr4GI.MjY4MjU4..1ibk0lf13.1ibk0lf14.1b.38.4j; cf_clearance=xp6EwkkWMoUsVR_pkDV6byhjWUkDmhCE7yR5jXc33ic-1730469870-1.2.1.1-hmCFMriFR20NZ3GVNhLlCBdO9kDiMUKVGYkIouIfIRKFAMIJ6A9KgwrRlD3iX4mX5wNv9wbjjRplSwmd5QpoQf6HcXsgfPmBD4JFXkuGiBZQVwS.e4z2lLwnhIZGzDkGUJemw7DgKpBBu6aKVK135bfWjW.DCX2uBaPqITit6.PpmfB_IEWmYu7NfqNrfihtUcdEPHwXR.kv0BeZk5UlBoXwMJ14pDvl4I.S3KVr1xF0QZ3a6FOlkLcgQ1T67.YjyTyuapMPTuS1p8u2_wKFEmfoLHF.t.zfRWk8eCnxuHbn1CobRtAwLPisZB08k2trnUvDJ07VgLxwya8.JODeQ4DoPra8sol6v5pUkNTDXH3C9fqmJiXZptts2rLV..xjEGmSOB8swqxEiPJAVOt7Bw; _ga_QV0GQK5R0N=GS1.1.1730469870.10.0.1730469871.59.0.0; _BEAMER_FILTER_BY_URL_ZNrUUGgM33435=false; _BEAMER_FILTER_BY_URL_ZNrUUGgM33435=false',
  })
  workiz_arizona_cookie: string;

  @Field(() => Boolean)
  @Column({ type: 'boolean', default: false })
  is_parsing: boolean;
}
