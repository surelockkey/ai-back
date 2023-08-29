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
}
