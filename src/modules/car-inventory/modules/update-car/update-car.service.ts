import { Injectable, OnModuleInit } from "@nestjs/common";
import { CrudService } from "@tech-slk/nest-crud";
import { UpdateCarRequest } from "./entity/update-car.entity";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { DataSource, IsNull, Not, Repository } from "typeorm";
import { CREATE_TIMESTAMP_FUNCTION, CREATE_TIMESTAMP_TRIGGER } from "./trigger/create-timestamp.trigger";
import { UPDATE_TIMESTAMP_FUNCTION, UPDATE_TIMESTAMP_TRIGGER } from "./trigger/update-timestamp.trigger";
import { ApproveUpdateCarDto, CreateUpdateCarDto, SubmitUpdateCarDto } from "./dto/update-car.dto";
import { GraphQLError } from "graphql";
import { UserService } from "src/modules/user/user.service";
import { WorkizCoreApiService } from "src/modules/api/workiz-api/workiz-core.service";

@Injectable()
export class UpdateCarService extends CrudService<UpdateCarRequest> implements OnModuleInit {
    constructor(
      @InjectRepository(UpdateCarRequest)
      private readonly updateCarRequestRepository: Repository<UpdateCarRequest>,
      @InjectDataSource() private readonly dataSource: DataSource,
      private readonly userService: UserService,
      private readonly workizApiService: WorkizCoreApiService,
    ) {
      super(updateCarRequestRepository);
    }

    onModuleInit() {
        this.createTriggers();
    }

    public async findRequests(user_id: string): Promise<UpdateCarRequest[]> {
        const find_user = await this.userService.findOne({
            id: user_id,
        });

        const user_containers = await this.workizApiService.req({}, '/ajaxc/inv_container_users/', 'get');
        const user_container = user_containers.data.find((user_container) => user_container.user_id === find_user.workiz_id);

        if (!user_container) {
            throw new GraphQLError(`This user doesn't have container`);
        }

        return this.updateCarRequestRepository.createQueryBuilder('update_car_request')
          .leftJoinAndSelect('update_car_request.item_template', 'item_template')
          .leftJoinAndSelect('item_template.template', 'template')
          .leftJoinAndSelect('template.car_templates', 'car_templates')
          .where('car_templates.workiz_id = :id', { id: user_container.container_id })
          .andWhere('approved_at IS NULL')
          .getMany();
    }

    public async findApprovedRequests(): Promise<UpdateCarRequest[]> {
      return this.updateCarRequestRepository.createQueryBuilder('update_car_request')
        .leftJoinAndSelect('update_car_request.item_template', 'item_template')
        .where('update_car_request.approved_at IS NOT NULL')
        .andWhere('update_car_request.submitted_at IS NULL')
        .getMany();
    }

    public async findSubmittedRequests(): Promise<UpdateCarRequest[]> {
      return this.updateCarRequestRepository.createQueryBuilder('update_car_request')
        .leftJoinAndSelect('update_car_request.item_template', 'item_template')
        .where('update_car_request.approved_at IS NOT NULL')
        .andWhere('update_car_request.submitted_at IS NOT NULL')
        .getMany();
    }

    public async createRequestForCarItems(
      createUpdateCarDto: CreateUpdateCarDto[],
    ): Promise<UpdateCarRequest[]> {
      return this.updateCarRequestRepository.save(createUpdateCarDto);
    }
  
    public async approveRequestForCarItems(
      approveUpdateCarDto: ApproveUpdateCarDto[],
    ): Promise<UpdateCarRequest[]> {
        const find_requests = await this.updateCarRequestRepository.find({
            where: approveUpdateCarDto.map((update) => ({
                id: update.id,
                approved_at: IsNull()
            }))
        });

        if (find_requests.length !== approveUpdateCarDto.length) {
            throw new GraphQLError(`Some of requests didn't found or already approved`);
        }

        return this.updateCarRequestRepository.save(approveUpdateCarDto);
    }
  
    public async submitRequestForCarItems(
      submitUpdateCarDto: SubmitUpdateCarDto[],
    ): Promise<UpdateCarRequest[]> {
      const find_requests = await this.updateCarRequestRepository.find({
        where: submitUpdateCarDto.map((update) => ({
            id: update.id,
            approved_at: Not(IsNull()),
            submitted_at: IsNull()
        }))
      });

      if (find_requests.length !== submitUpdateCarDto.length) {
        throw new GraphQLError(`Some of requests was't approved or already submitted`);
      }

      return this.updateCarRequestRepository.save(submitUpdateCarDto);
    }

    private async createTriggers() {
        await this.dataSource.createQueryRunner().query(CREATE_TIMESTAMP_FUNCTION);
        await this.dataSource.createQueryRunner().query(CREATE_TIMESTAMP_TRIGGER);

        await this.dataSource.createQueryRunner().query(UPDATE_TIMESTAMP_FUNCTION);
        await this.dataSource.createQueryRunner().query(UPDATE_TIMESTAMP_TRIGGER);
    }
}