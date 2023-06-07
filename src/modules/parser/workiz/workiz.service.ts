import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosRequestConfig } from 'axios';
// import * as FormData from 'form-data';
import { ConfigType } from 'src/core/config/config';

export type RestMethods = 'get' | 'post' | 'put' | 'delete';

@Injectable()
export class WorkizService {
  private cookie: string;

  constructor(private readonly configService: ConfigService) {
    this.cookie = this.configService.get<ConfigType['workiz']>('workiz').cookie;
  }

  public async req(url: string, method: RestMethods = 'post', params?: object) {
    // const data = new FormData();

    // Object.keys(params).forEach((param_name) => {
    //   data.append(param_name, params[param_name]);
    // });

    const conf: AxiosRequestConfig<any> = {
      method,
      url: 'https://app.workiz.com' + url,
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
        cookie: this.cookie,
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
}
