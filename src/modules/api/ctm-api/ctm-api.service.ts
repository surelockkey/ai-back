import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigType } from 'src/core/config/config';
import axios, { AxiosRequestConfig } from 'axios';
import * as FormData from 'form-data';
import { CtmGetCallsOptionDto } from './dto/ctm-get-calls.dto';


@Injectable()
export class CtmApiService {
    private config: ConfigType['ctm'];

    constructor(
        private readonly configService: ConfigService
    ) {
        this.config = this.configService.get<ConfigType['ctm']>('ctm');
    }

    public async getCalls(ctmGetCallsOptionDto: CtmGetCallsOptionDto) {
        console.log(ctmGetCallsOptionDto.page, ctmGetCallsOptionDto.per_page)
        return await this.req(
            ctmGetCallsOptionDto, 
            `accounts/${this.config.account_id}/calls/search.json`
        )
    }

    private async req(data_obj: any, url: string) {
        // const data = new FormData();
        let params = '';

        Object.keys(data_obj).forEach((key) => {
            // data.append(key, data_obj[key]);
            params+= `${params.length ? '&' : '?'}${key}=${data_obj[key]}`
        })
        
        const conf: AxiosRequestConfig<FormData> = {
            method: 'post',
            url: this.config.api_url + '/' + url + params,
            auth: {
                username: this.config.user,
                password: this.config.password,
            },
            headers: { 
                'Authorization': '{{Basic Auth}}', 
                'Content-Type': 'application/json'
            },
            // data: data
        }

        const res = await axios(conf);

        return res.data;
    }
}
