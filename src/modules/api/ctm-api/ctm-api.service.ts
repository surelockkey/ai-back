import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigType } from 'src/core/config/config';
import axios, { AxiosRequestConfig } from 'axios';
import * as FormData from 'form-data';

@Injectable()
export class CtmApiService {
    private config: ConfigType['ctm'];
    private token: string;
    private AUTH_URL: string = 'authentication';

    constructor(
        private readonly configService: ConfigService
    ) {
        this.config = this.configService.get<ConfigType['ctm']>('ctm');
    }

    public async getCalls(page: number) {
        const calls = await this.req(
            {
                page,
            }, 
            `accounts/${this.config.account_id}/calls/search.json`
        )

        console.log(calls);
    }

    private async req(data_obj: any, url: string) {
        const data = new FormData();

        Object.keys(data_obj).forEach((key) => {
            data.append(key, data_obj[key]);
        })
        
        const conf: AxiosRequestConfig<FormData> = {
            method: 'post',
            url: this.config.api_url + '/' + url,
            auth: {
                username: this.config.user,
                password: this.config.password,
            },
            headers: { 
                'Authorization': '{{Basic Auth}}', 
                'Content-Type': 'application/json'
            },
            data: data
        }

        const res = await axios(conf);

        return res.data;
    }
}
