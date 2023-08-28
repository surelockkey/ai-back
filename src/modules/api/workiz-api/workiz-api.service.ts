import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { SendDto } from '@tech-slk/nest-crud';
import {
  TechnicianWorkiz,
  CreateJobDto,
  JobDto,
  PaginatedJobDto,
} from './dto/workiz-api.dto';
import { commission } from './api-properties/commistion';

@Injectable()
export class WorkizApiService {
  private apiLink = `https://api.workiz.com/api/v1/${process.env.TOKEN_WORKIZ}`;

  public async getAllTechWorkiz(): Promise<TechnicianWorkiz[]> {
    return axios({
      method: 'GET',
      url: `${this.apiLink}/team/all/`,
    }).then((r) => {
      return r.data.data.filter(
        (user: TechnicianWorkiz) => user.role === 'tech',
      );
    });
  }

  public async getAllUsersWorkiz(): Promise<TechnicianWorkiz[]> {
    return axios({
      method: 'GET',
      url: `${this.apiLink}/team/all/`,
    }).then((r) => {
      return r.data.data;
    });
  }

  public async createJob(createJobDto: CreateJobDto): Promise<SendDto> {
    return await axios
      .post(`${this.apiLink}/job/create/`, {
        auth_secret: process.env.SECRET_WORKIZ,
        ...createJobDto,
      })
      .then((res) => {
        return {
          message: res.data.data[0].UUID,
          status: 201,
        };
      });
  }

  public async assignTechToJob(id: string, userName: string): Promise<SendDto> {
    return axios
      .post(`${this.apiLink}/job/assign/`, {
        auth_secret: process.env.SECRET_WORKIZ,
        UUID: id,
        User: userName,
      })
      .then(() => {
        return {
          message: 'Assigned',
          status: 201,
        };
      });
  }

  public async getTechById(id: string): Promise<TechnicianWorkiz> {
    const res = await axios.get(`${this.apiLink}/team/get/${id}`);

    console.log(res, 'res');

    return res.data;
  }

  public async getAllJobsWorkiz(
    records: number,
    offset: number,
  ): Promise<PaginatedJobDto> {
    const res: { items: JobDto[]; has_more: boolean } = await axios
      .get(`${this.apiLink}/job/all/?offset=${offset}&records=${records}`)
      .then((result) => {
        return {
          items: result.data.data,
          has_more: result.data.has_more,
        };
      });

    return {
      ...res,
      items: res.items.map((job) => {
        if (Array.isArray(job.Comments)) {
          job.Comments = job.Comments.join(', ');
        }
        return job;
      }),
    };
  }

  public async getAllJobsForSave() {
    const jobs = [];

    let has_more = true;
    let page = 0;

    while (has_more) {
      const jobs_to_add = await this.getAllJobsWorkiz(100, page);

      jobs.push(...jobs_to_add.items);

      if (!jobs_to_add.has_more) {
        has_more = false;
        page++;
      }
    }

    return jobs;
  }

  public async getAllLeadsWorkiz(): Promise<JobDto[]> {
    return axios.get(`${this.apiLink}/lead/all/`).then((result) => {
      return result.data.data;
    });
  }

  public async getLeadWorkizById(id): Promise<JobDto> {
    return axios.get(`${this.apiLink}/lead/get/${id}/`).then((result) => {
      return result.data.data;
    });
  }

  public async getJobWorkizById(id): Promise<JobDto> {
    return axios.get(`${this.apiLink}/job/get/${id}/`).then((result) => {
      return result.data.data;
    });
  }

  public async getCommission(month: number, year: number, page: number) {
    return await axios.get('https://app.workiz.com/ajax.php', {
      params: {
        page: 'datatables_finance_report_new',
        final_q: `01.${month}.${year}_01.${
          month + 1 > 12 ? 1 : month + 1
        }.${year}`,
        iDisplayStart: `${page * 100}`,
        iDisplayLength: `${page * 100 + 100}`,
        ...commission,
      },
      headers: {
        authority: 'app.workiz.com',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        cookie:
          '_vwo_uuid=D83C0429055963A83A43FE3525CC35116; _tt_enable_cookie=1; _ttp=BW9fwY9if-KjB-do-BM6pE72QqB; _fbp=fb.1.1685956024036.969890133; hubspotutk=56422d786f9f4c964c91282645539b7b; intercom-id-j24bh4lc=c16f4a9f-7c54-4aca-a9de-2b25d7bf70c1; intercom-device-id-j24bh4lc=227cb1b4-df75-4f6a-a554-17ffe922e2ad; G_ENABLED_IDPS=google; _BEAMER_USER_ID_ZNrUUGgM33435=d6fda99d-ff41-4d1b-be99-e43117346673; _BEAMER_FIRST_VISIT_ZNrUUGgM33435=2022-08-05T08:50:29.211Z; __stripe_mid=ae0a999d-692a-48c5-933b-17492d7ad123312fa6; sajSource={"ref":"https://www.google.com/","src":"","lp":"https://www.workiz.com/","k":"","entry":"https://www.workiz.com/","partner_key":"","utm_adgroup":"","utm_source":"https://www.google.com/","utm_medium":"Organic search","utm_campaign":"","utm_term":"","utm_keyword":"","sid":"1686127076","fbclid":"","gclid":"","msclkid":"","utm_placement":"","utm_matchtype":"","utm_device":"desktop","utm_popup":"","utm_ad_id":"","utm_adset_id":"","utm_campaign_id":"","GAID":"1979841614.1684934175","HBID":"56422d786f9f4c964c91282645539b7b","partnerStackPartnerKey":""}; _vis_opt_exp_15_combi=2; __hstc=193530482.56422d786f9f4c964c91282645539b7b.1685956024160.1689839515108.1689925292029.4; _sp_id.257a=7ddc8f9f-5642-4f4a-a214-bd33eac5b346.1685956025.5.1689925292.1689839515.eb670ee7-c523-4062-b796-7fc215d71ca7; _vwo_uuid_v2=DB83FADF28B057EB79A70A45776C7EA54|2c50951772b093f22df13de480e8afb6; _vis_opt_s=7%7C; _vis_opt_test_cookie=1; _ga=GA1.1.1979841614.1684934175; _uetvid=95dc9310149b11edbe5315e266f9f193; _ga_QV0GQK5R0N=GS1.1.1692170889.8.1.1692170891.58.0.0; sendajob_sessid=MjY4MjU4LTY0ZTMyNTVkY2RlZTM%3D; sendajob_user=dXNlcmlkXzI2ODI1OA%3D%3D; amp_6bc83c=GAcbGetSIxpjE2B-K40WjU.MjY4MjU4..1h8bkjug0.1h8bkl16s.13.g5.h8; sajFranchise=KzRLUG9jZmUrMm5BbGZvMDFKamZEdz09; _BEAMER_FILTER_BY_URL_ZNrUUGgM33435=false; __stripe_sid=6a961136-d313-40f3-82ea-c2026f3add7dfd4da4; fs_uid=#6MW14#d61c7bc1-6a34-42c0-bcbb-17d188343f7e:62e5ff0a-9633-45c7-8fa2-041cbc8c5a3d:1692969655047::3#c7ea125e#/1723706895; intercom-session-j24bh4lc=ZVI4YjNoVDZESlBEeFNwNCt5RFR1c1B2VGNkZ0MydXhwWlA4MnlHdlVYaVJXUFcvaC9jeUpSY1lPQXdYM0ZJeS0tcEs2dExnTjRCQjBiRmp4c2dVZGplUT09--37a1f63f92937be135643d5035f95744ec0f3363; fs_lua=1.1692969958363',
        referer: 'https://app.workiz.com/finance_report/',
        'sec-ch-ua':
          '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
      },
    });
  }
}
