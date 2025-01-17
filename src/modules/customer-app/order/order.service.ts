import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { Order } from './entity/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { OrderKey } from './entity/order-key.entity';
import { CreateOrderDto } from './dto/order.dto';
import { GraphQLError } from 'graphql';
import { UserCustomerInfoService } from 'src/modules/user/user-customer-info/user-customer-info.service';

@Injectable()
export class OrderService extends CrudService<Order> {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(OrderKey)
    private readonly orderKeyRepository: Repository<OrderKey>,
    private readonly dataSource: DataSource,
    private readonly userCustomerInfoService: UserCustomerInfoService,
  ) {
    super(orderRepository);
  }

  public async createOrder(create_order_dto: CreateOrderDto, user_id: string) {
    const queryRunner = await this.dataSource.createQueryRunner();
    await queryRunner.startTransaction();

    try {
      const { keys, ...order_dto } = create_order_dto;

      if (!order_dto.address || !order_dto.phone) {
        const { address, phone } = await this.userCustomerInfoService.findOne({
          user_id,
        });

        if (!order_dto.address) {
          order_dto.address = address;
        }

        if (!order_dto.phone) {
          order_dto.address = phone;
        }
      }

      const order = await queryRunner.manager.save(Order, {
        ...order_dto,
        user_id,
      });

      await queryRunner.manager.save(
        OrderKey,
        keys.map((order_key) => ({ order_id: order.id, ...order_key })),
      );

      await queryRunner.commitTransaction();

      return this.findOneById(order.id);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new GraphQLError(error.message, { originalError: error });
    } finally {
      await queryRunner.release();
    }
  }
}
