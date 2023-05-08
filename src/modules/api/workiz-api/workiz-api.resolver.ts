import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TechnicianWorkiz, CreateJobDto, JobDto } from './dto/workiz-api.dto';
import { WorkizApiService } from './workiz-api.service';
import { SendDto } from '@tech-slk/nest-crud';
// import { WorkizService } from './workiz.service';

@Resolver()
export class WorkizResolver {
  constructor(private readonly workizApiService: WorkizApiService) {}

  @Query(() => [TechnicianWorkiz])
  async getAllTechsWorkiz(): Promise<TechnicianWorkiz[]> {
    return await this.workizApiService.getAllTechWorkiz();
  }

  @Query(() => [TechnicianWorkiz])
  async getAllUsersWorkiz(): Promise<TechnicianWorkiz[]> {
    return await this.workizApiService.getAllUsersWorkiz();
  }

  @Mutation(() => SendDto)
  async createNewJobWorkiz(
    @Args('createJobDto', { type: () => CreateJobDto })
    createJobDto: CreateJobDto,
  ): Promise<SendDto> {
    return await this.workizApiService.createJob(createJobDto);
  }

  @Mutation(() => SendDto)
  async assignTechToJobWorkiz(
    @Args('id', { type: () => String }) id: string,
    @Args('userName', { type: () => String }) userName: string,
  ): Promise<SendDto> {
    return await this.workizApiService.assignTechToJob(id, userName);
  }

  @Query(() => [JobDto])
  async getAllJobsWorkiz(): Promise<JobDto[]> {
    return await this.workizApiService.getAllJobsWorkiz();
  }

  @Query(() => [JobDto])
  async getAllWorkizLeads(): Promise<JobDto[]> {
    return await this.workizApiService.getAllLeadsWorkiz();
  }

  @Query(() => JobDto)
  async getWorkizLeadById(@Args('id') id: string): Promise<JobDto> {
    return await this.workizApiService.getLeadWorkizById(id);
  }

  @Query(() => JobDto)
  async getWorkizJobById(@Args('id') id: string): Promise<JobDto> {
    return await this.workizApiService.getJobWorkizById(id);
  }
}
