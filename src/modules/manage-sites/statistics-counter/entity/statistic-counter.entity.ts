import { ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('statistics_counter')
export class StatisticsCounter {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  last_open_projects: number; //string;

  @Column()
  last_customers_served: number;

  @Column()
  last_emergency_calls: number;
}
