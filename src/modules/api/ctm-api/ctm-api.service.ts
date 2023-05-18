import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigType } from 'src/core/config/config';
import axios, { AxiosRequestConfig } from 'axios';
import * as FormData from 'form-data';
import { CtmCall, CtmGetCallsDto, CtmGetCallsOptionDto } from './dto/ctm-get-calls.dto';


@Injectable()
export class CtmApiService {
    private config: ConfigType['ctm'];

    constructor(
        private readonly configService: ConfigService
    ) {
        this.config = this.configService.get<ConfigType['ctm']>('ctm');
    }

    public async getCalls(ctmGetCallsOptionDto: CtmGetCallsOptionDto): Promise<CtmGetCallsDto> {
        return await this.req(
            ctmGetCallsOptionDto, 
            `accounts/${this.config.account_id}/calls/search.json`
        )
    }

    public async getCall(call_id: string): Promise<CtmCall> {
        return await this.req(
            {}, 
            `accounts/${this.config.account_id}/calls/${call_id}`,
            'get'
        )
    }

    private async req(data_obj: any, url: string, method: string = 'post') {
        // const data = new FormData();
        let params = '';

        Object.keys(data_obj).forEach((key) => {
            // data.append(key, data_obj[key]);
            params+= `${params.length ? '&' : '?'}${key}=${data_obj[key]}`
        })

        console.log(this.config.api_url + '/' + url + params);
        
        
        const conf: AxiosRequestConfig<FormData> = {
            method,
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
