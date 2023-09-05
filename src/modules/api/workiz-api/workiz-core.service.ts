import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';
import * as fs from 'fs';
import { SystemSettingsService } from 'src/modules/system-settings/system-settings.service';
import * as moment from 'moment';
import { PaginatedJobDto } from './dto/workiz-api.dto';
import axiosRetry from 'axios-retry';
import { commission } from './api-properties/commistion';
import { CommissionData } from './interfaces/commission-data.interface';

export type RestMethods = 'get' | 'post' | 'put' | 'delete';

@Injectable()
export class WorkizCoreApiService {
  private cookie: string;
  private arizona_cookie: string;

  constructor(private readonly systemSettingsService: SystemSettingsService) {
    this.setWorkizCookie();
  }

  private getCookie(account?: 'main' | 'arizona') {
    if (account === 'arizona') {
      return this.arizona_cookie;
    }

    return this.cookie;
  }

  public async req(
    url: string,
    method: RestMethods = 'post',
    params?: object,
    account?: 'main' | 'arizona',
  ) {
    // const data = new FormData();

    // Object.keys(params).forEach((param_name) => {
    //     data.append(param_name, params[param_name]);
    // })

    const conf: AxiosRequestConfig<any> = {
      method,
      url: 'https://app.workiz.com' + url,
      maxRedirects: 0,
      headers: {
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        authority: 'app.workiz.com',
        accept: 'application/json',
        'accept-language': 'uk-UA,uk;q=0.9,en-US;q=0.8,en;q=0.7',
        cache: 'no-cache',
        react: 'true',
        referer: 'https://app.workiz.com/root/inventory',
        'sec-ch-ua':
          '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
        cookie: this.getCookie(account),
      },
      data: params,
    };

    return await axios(conf)
      .then((r) => {
        return r.data;
      })
      .catch((e) => {
        return e;
      });
  }

  private async setWorkizCookie(): Promise<void> {
    const settings = await this.systemSettingsService.getSystemSettings();
    this.cookie = settings.workiz_cookie;
    this.arizona_cookie = settings.workiz_arizona_cookie;
  }

  public async getClients() {
    const all = [];

    const getClientsByPage = async (page: number) => {
      const res = await axios({
        method: 'POST',
        url: 'https://app.workiz.com/ajaxc/client/clientReport/',
        headers: {
          accept: 'application/json',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          cache: 'no-cache',
          'content-type': 'application/json',
          react: 'true',
          'sec-ch-ua':
            '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          cookie:
            '_gcl_au=1.1.1857078973.1684934175; _vwo_uuid=D83C0429055963A83A43FE3525CC35116; _vwo_ds=3%241684934175%3A94.96020978%3A%3A; _tt_enable_cookie=1; _ttp=BW9fwY9if-KjB-do-BM6pE72QqB; _fbp=fb.1.1685956024036.969890133; hubspotutk=56422d786f9f4c964c91282645539b7b; intercom-id-j24bh4lc=c16f4a9f-7c54-4aca-a9de-2b25d7bf70c1; intercom-device-id-j24bh4lc=227cb1b4-df75-4f6a-a554-17ffe922e2ad; G_ENABLED_IDPS=google; _BEAMER_USER_ID_ZNrUUGgM33435=d6fda99d-ff41-4d1b-be99-e43117346673; _BEAMER_FIRST_VISIT_ZNrUUGgM33435=2022-08-05T08:50:29.211Z; __stripe_mid=ae0a999d-692a-48c5-933b-17492d7ad123312fa6; sajSource={"ref":"https://www.google.com/","src":"","lp":"https://www.workiz.com/","k":"","entry":"https://www.workiz.com/","partner_key":"","utm_adgroup":"","utm_source":"https://www.google.com/","utm_medium":"Organic search","utm_campaign":"","utm_term":"","utm_keyword":"","sid":"1686127076","fbclid":"","gclid":"","msclkid":"","utm_placement":"","utm_matchtype":"","utm_device":"desktop","utm_popup":"","utm_ad_id":"","utm_adset_id":"","utm_campaign_id":"","GAID":"1979841614.1684934175","HBID":"56422d786f9f4c964c91282645539b7b","partnerStackPartnerKey":""}; _vis_opt_exp_15_combi=2; _vwo_uuid_v2=DA0296F53835161A59035ACA57A640C8E|d11b4290f9332a90ae2e08577d36be6d; _ga=GA1.2.1979841614.1684934175; _gid=GA1.2.1828428844.1689839511; _vis_opt_s=5%7C; _vis_opt_test_cookie=1; _uetsid=4ad99f3026d211eeb21d0732d0ace8dd; _uetvid=95dc9310149b11edbe5315e266f9f193; _sp_id.257a=7ddc8f9f-5642-4f4a-a214-bd33eac5b346.1685956025.4.1689839515.1686127080.fe1255ef-2e8f-4176-b017-ca60a4be44ed; __hstc=193530482.56422d786f9f4c964c91282645539b7b.1685956024160.1686127078778.1689839515108.3; __hssrc=1; _ga_QV0GQK5R0N=GS1.1.1689839511.6.1.1689839515.56.0.0; sendajob_sessid=MjY4MjU4LTY0YjhlODAxYTc5MjY%3D; sendajob_user=dXNlcmlkXzI2ODI1OA%3D%3D; _BEAMER_FILTER_BY_URL_ZNrUUGgM33435=false; __stripe_sid=9b064bb9-dfd7-4984-96ae-2ce1b9f06a2ca29be1; amp_6bc83c=GAcbGetSIxpjE2B-K40WjU.MjY4MjU4..1h5p80ml9.1h5p93bfr.o.3g.48; fs_uid=#6MW14#1df02f36-3aa8-4a00-bb12-2306bc083000:62346600-f17e-47ce-869b-a83a4183b531:1689843146196::6#c7ea125e#/1691225429; intercom-session-j24bh4lc=NEJRYnpSS3Y5eVBEVlBzREFQMXh0YTFlelBhS1AyVXdNaUtUZE8vU2RxQ1JhS3hiT3ZSdDNpVnJXbTFNTk1RRC0tdHA1eHdUd0UyWGY2cWpmTWJOTUNjQT09--7aae71f23300c384cc7fd934a08c3f17a66964dc; fs_lua=1.1689844526669',
          Referer: 'https://app.workiz.com/root/clients',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
        data: `{"page":${page},"pageSize":100,"sorted":[{"id":"client_id","desc":true}],"filtered":[],"sSearch":"","final_q":"13.7.23_19.7.23","timeQueryChanged":false,"pickerParams":{},"react":true,"withCsv":false,"pickerOn":false,"is_due":""}`,
      })
        .catch((e) => {
          console.log('ERRRRRROOOOOORRRR', page);
        })
        .then((res) => {
          if (res) {
            console.log(page, res.data.aaData.length, all.length);
            all.push(...res.data.aaData);
          } else {
            console.log('NO RES ON PAGE', page);
          }
        });
    };

    // 1969
    for (let i = 0; i < 1969; i++) {
      await getClientsByPage(i);
    }

    console.log(all);

    fs.writeFileSync('data.json', JSON.stringify(all));
  }

  private async getJobsByRange(
    current_page: number,
    year: number,
    month: number,
  ) {
    try {
      let month_to = month + 1;
      let year_to = year;

      if (month === 12) {
        month_to = 1;
        year_to = year + 1;
      }

      return await axios('https://app.workiz.com/ajaxc/job/jobReport/', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          cache: 'no-cache',
          'content-type': 'application/json',
          react: 'true',
          'sec-ch-ua':
            '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          cookie:
            '_gcl_au=1.1.1857078973.1684934175; _vwo_uuid=D83C0429055963A83A43FE3525CC35116; _vwo_ds=3%241684934175%3A94.96020978%3A%3A; _tt_enable_cookie=1; _ttp=BW9fwY9if-KjB-do-BM6pE72QqB; _fbp=fb.1.1685956024036.969890133; hubspotutk=56422d786f9f4c964c91282645539b7b; intercom-id-j24bh4lc=c16f4a9f-7c54-4aca-a9de-2b25d7bf70c1; intercom-device-id-j24bh4lc=227cb1b4-df75-4f6a-a554-17ffe922e2ad; G_ENABLED_IDPS=google; _BEAMER_USER_ID_ZNrUUGgM33435=d6fda99d-ff41-4d1b-be99-e43117346673; _BEAMER_FIRST_VISIT_ZNrUUGgM33435=2022-08-05T08:50:29.211Z; __stripe_mid=ae0a999d-692a-48c5-933b-17492d7ad123312fa6; sajSource={"ref":"https://www.google.com/","src":"","lp":"https://www.workiz.com/","k":"","entry":"https://www.workiz.com/","partner_key":"","utm_adgroup":"","utm_source":"https://www.google.com/","utm_medium":"Organic search","utm_campaign":"","utm_term":"","utm_keyword":"","sid":"1686127076","fbclid":"","gclid":"","msclkid":"","utm_placement":"","utm_matchtype":"","utm_device":"desktop","utm_popup":"","utm_ad_id":"","utm_adset_id":"","utm_campaign_id":"","GAID":"1979841614.1684934175","HBID":"56422d786f9f4c964c91282645539b7b","partnerStackPartnerKey":""}; _vis_opt_exp_15_combi=2; _gid=GA1.2.1828428844.1689839511; sendajob_sessid=MjY4MjU4LTY0YjhlODAxYTc5MjY%3D; sendajob_user=dXNlcmlkXzI2ODI1OA%3D%3D; _vwo_uuid_v2=D6FB70F2F3550565667CEBF744FC6F60E|b7ae3dd51878b922a1b1d8989772c6cd; _vis_opt_s=6%7C; _vis_opt_test_cookie=1; _ga=GA1.2.1979841614.1684934175; _uetsid=4ad99f3026d211eeb21d0732d0ace8dd; _uetvid=95dc9310149b11edbe5315e266f9f193; __hstc=193530482.56422d786f9f4c964c91282645539b7b.1685956024160.1689839515108.1689925292029.4; __hssrc=1; _sp_id.257a=7ddc8f9f-5642-4f4a-a214-bd33eac5b346.1685956025.5.1689925292.1689839515.eb670ee7-c523-4062-b796-7fc215d71ca7; _ga_QV0GQK5R0N=GS1.1.1689925289.7.1.1689925292.57.0.0; sajFranchise=KzRLUG9jZmUrMm5BbGZvMDFKamZEdz09; _BEAMER_FILTER_BY_URL_ZNrUUGgM33435=false; __stripe_sid=9e3b1e76-9764-428c-944e-f51657c53cb583b897; amp_6bc83c=GAcbGetSIxpjE2B-K40WjU.MjY4MjU4..1h5s84ucq.1h5s856fd.12.7c.8e; fs_lua=1.1689943973428; fs_uid=#6MW14#1df02f36-3aa8-4a00-bb12-2306bc083000:6849b6dc-ad3f-4895-a308-0c378e51a46f:1689943968590::2#c7ea125e#/1691225429; intercom-session-j24bh4lc=akRyU3ZHZmxKWWdGcFJ2WGkrY1FuNlgwWWE0TzVBWDFackpKRGRhaUw4bnBVSXgvZVVsWHlWS1dSZnA4eDhNRC0tSEJvaGdRbXRIRml3c254aGpMd1BXZz09--5499c5d8f96caf20bcd1a66ce2c1d47d02ba0378',
          Referer: 'https://app.workiz.com/root/jobreport',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
        data: {
          page: current_page,
          pageSize: 500,
          sorted: [{ id: 'created', desc: true }],
          filtered: [],
          sSearch: '',
          final_q: `1.${month}.${year}_1.${month_to}.${year_to}`,
          timeQueryChanged: true,
          pickerParams: { report_by: 3 },
          react: true,
          withCsv: false,
          pickerOn: true,
          filters: {
            user: [],
            tag: [],
            metro: [],
            type: [],
            status: [],
            created_by: [],
            source: [],
            company: [],
          },
        },
      });

      // return await this.req('/ajaxc/job/jobReport/', 'post', {
      //   page: current_page,
      //   pageSize: 500,
      //   sorted: [{ id: 'created', desc: true }],
      //   filtered: [],
      //   sSearch: '',
      //   final_q: `1.${month}.${year}_1.${month_to}.${year_to}`,
      //   timeQueryChanged: false,
      //   pickerParams: { report_by: 3 },
      //   react: true,
      //   withCsv: false,
      //   pickerOn: true,
      //   filters: {
      //     user: [],
      //     tag: [],
      //     metro: [],
      //     type: [],
      //     status: [],
      //     created_by: [],
      //     source: [],
      //     company: [],
      //   },
      // });
    } catch (e) {
      console.log(e);
    }
  }

  public async getJobsInRange(year: number, month: number) {
    const all_jobs_in_range = [];
    let current_page = 0;

    const total_pages = (await this.getJobsByRange(current_page, year, month))
      .data.pages;

    while (current_page < total_pages) {
      const req = await this.getJobsByRange(current_page, year, month);
      const jobs = req.data.aaData;

      all_jobs_in_range.push(...req.data.aaData);

      current_page++;
    }

    return all_jobs_in_range;
  }

  public async getAllJobs() {
    const current_date = moment();
    // let year = 18;
    let year = 18;
    let month = 1;

    const jobs = [];

    console.log(month, year);

    while (moment(`20${year}-${month}-01`).isBefore(current_date)) {
      const jobs_in_range = await this.getJobsInRange(year, month);

      jobs.push(...jobs_in_range);
      month++;

      if (month > 12) {
        month = 1;
        year += 1;
      }

      console.log(month, year);
    }

    const clients_ids_set = new Set();

    jobs.forEach((job) => {
      clients_ids_set.add(job.client_id);
    });

    const clients_ids_arr = Array.from(clients_ids_set);

    const chunked_clients_ids = [];

    for (let i = 0; i < clients_ids_arr.length; i += 100) {
      const chunk = clients_ids_arr.slice(i, i + 100);
      chunked_clients_ids.push(chunk);
    }

    console.log(chunked_clients_ids.length);

    const all_clients = [];

    const total_err = [];

    let chunk_i = 1;

    for await (const chunk of chunked_clients_ids) {
      const res = await Promise.all(
        chunk.map(async (id) => {
          return await this.getClientById(id)
            .catch(() => {
              total_err.push(id);
              all_clients.push({
                client_id: id,
                phone: null,
                address: null,
                first_name: null,
                last_name: null,
              });
            })
            .then((r) => r);
        }),
      );

      console.log(`${chunk_i++}/${chunked_clients_ids.length}`);

      all_clients.push(...res);
    }

    fs.writeFileSync('data.json', JSON.stringify(all_clients));
    fs.writeFileSync('error.json', JSON.stringify(total_err));

    console.log({
      chunked_clients_ids_length: chunked_clients_ids.length,
      clients_ids_set_size: clients_ids_set.size,
      jobs_length: jobs.length,
      job: jobs[0],
      all_clients_length: all_clients.length,
      all_client: all_clients.slice(0, 20),
      total_err_length: total_err.length,
      total_err,
    });
  }

  public async getClientById(id: string) {
    const res = await axios(
      `https://app.workiz.com/ajaxc/client/loadClientDetails/${id}/`,
      {
        headers: {
          accept: 'application/json',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          cache: 'no-cache',
          react: 'true',
          'sec-ch-ua':
            '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          cookie:
            '_gcl_au=1.1.1857078973.1684934175; _vwo_uuid=D83C0429055963A83A43FE3525CC35116; _vwo_ds=3%241684934175%3A94.96020978%3A%3A; _tt_enable_cookie=1; _ttp=BW9fwY9if-KjB-do-BM6pE72QqB; _fbp=fb.1.1685956024036.969890133; hubspotutk=56422d786f9f4c964c91282645539b7b; intercom-id-j24bh4lc=c16f4a9f-7c54-4aca-a9de-2b25d7bf70c1; intercom-device-id-j24bh4lc=227cb1b4-df75-4f6a-a554-17ffe922e2ad; G_ENABLED_IDPS=google; _BEAMER_USER_ID_ZNrUUGgM33435=d6fda99d-ff41-4d1b-be99-e43117346673; _BEAMER_FIRST_VISIT_ZNrUUGgM33435=2022-08-05T08:50:29.211Z; __stripe_mid=ae0a999d-692a-48c5-933b-17492d7ad123312fa6; sajSource={"ref":"https://www.google.com/","src":"","lp":"https://www.workiz.com/","k":"","entry":"https://www.workiz.com/","partner_key":"","utm_adgroup":"","utm_source":"https://www.google.com/","utm_medium":"Organic search","utm_campaign":"","utm_term":"","utm_keyword":"","sid":"1686127076","fbclid":"","gclid":"","msclkid":"","utm_placement":"","utm_matchtype":"","utm_device":"desktop","utm_popup":"","utm_ad_id":"","utm_adset_id":"","utm_campaign_id":"","GAID":"1979841614.1684934175","HBID":"56422d786f9f4c964c91282645539b7b","partnerStackPartnerKey":""}; _vis_opt_exp_15_combi=2; _gid=GA1.2.1828428844.1689839511; sendajob_sessid=MjY4MjU4LTY0YjhlODAxYTc5MjY%3D; sendajob_user=dXNlcmlkXzI2ODI1OA%3D%3D; _vwo_uuid_v2=D6FB70F2F3550565667CEBF744FC6F60E|b7ae3dd51878b922a1b1d8989772c6cd; _vis_opt_s=6%7C; _vis_opt_test_cookie=1; _ga=GA1.2.1979841614.1684934175; _uetsid=4ad99f3026d211eeb21d0732d0ace8dd; _uetvid=95dc9310149b11edbe5315e266f9f193; __hstc=193530482.56422d786f9f4c964c91282645539b7b.1685956024160.1689839515108.1689925292029.4; __hssrc=1; _sp_id.257a=7ddc8f9f-5642-4f4a-a214-bd33eac5b346.1685956025.5.1689925292.1689839515.eb670ee7-c523-4062-b796-7fc215d71ca7; _ga_QV0GQK5R0N=GS1.1.1689925289.7.1.1689925292.57.0.0; sajFranchise=KzRLUG9jZmUrMm5BbGZvMDFKamZEdz09; _BEAMER_FILTER_BY_URL_ZNrUUGgM33435=false; __stripe_sid=9e3b1e76-9764-428c-944e-f51657c53cb583b897; amp_6bc83c=GAcbGetSIxpjE2B-K40WjU.MjY4MjU4..1h5s84ucq.1h5s856fd.12.7c.8e; fs_lua=1.1689943973428; fs_uid=#6MW14#1df02f36-3aa8-4a00-bb12-2306bc083000:6849b6dc-ad3f-4895-a308-0c378e51a46f:1689943968590::2#c7ea125e#/1691225429; intercom-session-j24bh4lc=dkRaSDR5RHdmOTd2TFJsM2xUVW1xVVlUdDRWSnRxUXV4ejZWcmFjSXVFWkZnNFFST1JGNDJlL3NQYXpFa2FIaC0tRjZBVXVPRllhakV1ZUltNERXb3VGdz09--e70a2437dd3da74c96eabf8b1cbd5385d8635ca7',
          Referer: `https://app.workiz.com/root/client/${id}`,
          'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
        data: null,
        method: 'POST',
      },
    )
      .catch((e) => {
        console.log({ e: e.message, id });
        throw new Error('failed');
      })
      .then((r) => {
        if (r) {
          return r;
        }
      });

    const client = res.data.client;

    return {
      client_id: id,
      phone: client.primary_phone,
      address: client.address,
      first_name: client.first_name,
      last_name: client.last_name,
    };
  }

  public async getCommission(
    month: number,
    year: number,
    page: number,
    account?: 'main' | 'arizona',
  ): Promise<CommissionData> {
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
        cookie: this.getCookie(account),
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

  // private login() {
  //     const params = {
  //         login: this.workizConfig.email,
  //         pass: this.workizConfig.password,
  //         action: 'submit',
  //         connectqb: '0',
  //     }

  //     this.req(params, '/login/', 'post')
  //         .then((r) => {
  //            console.log(r.response.headers['set-cookie'])
  //         })
  //         .catch((e) => {
  //             console.log('errr ', e)
  //             // console.log(e.response.headers['set-cookie'], e.response.headers);
  //         })
  // }
}
