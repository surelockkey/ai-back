import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TechnicianWorkiz, CreateJobDto, JobDto } from './dto/workiz-api.dto';
import { WorkizApiService } from './workiz-api.service';
import { SendDto } from '@tech-slk/nest-crud';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/authorization/guard/auth.guard';
// import { WorkizService } from './workiz.service';

@Resolver()
export class WorkizApiResolver {
  constructor(private readonly workizApiService: WorkizApiService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [TechnicianWorkiz])
  async getAllTechsWorkiz(): Promise<TechnicianWorkiz[]> {
    return await this.workizApiService.getAllTechWorkiz();
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [TechnicianWorkiz])
  async getAllUsersWorkiz(): Promise<TechnicianWorkiz[]> {
    return await this.workizApiService.getAllUsersWorkiz();
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => SendDto)
  async createNewJobWorkiz(
    @Args('createJobDto', { type: () => CreateJobDto })
    createJobDto: CreateJobDto,
  ): Promise<SendDto> {
    return await this.workizApiService.createJob(createJobDto);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => SendDto)
  async assignTechToJobWorkiz(
    @Args('id', { type: () => String }) id: string,
    @Args('userName', { type: () => String }) userName: string,
  ): Promise<SendDto> {
    return await this.workizApiService.assignTechToJob(id, userName);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [JobDto])
  async getAllJobsWorkiz(
    @Args('records', { type: () => Int, description: 'Max 100' })
    records: number,
    @Args('offset', { type: () => Int }) offset: number,
  ): Promise<JobDto[]> {
    return await this.workizApiService.getAllJobsWorkiz(records, offset);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [JobDto])
  async getAllWorkizLeads(): Promise<JobDto[]> {
    return await this.workizApiService.getAllLeadsWorkiz();
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => JobDto)
  async getWorkizLeadById(@Args('id') id: string): Promise<JobDto> {
    return await this.workizApiService.getLeadWorkizById(id);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => JobDto)
  async getWorkizJobById(@Args('id') id: string): Promise<JobDto> {
    return await this.workizApiService.getJobWorkizById(id);
  }
}
