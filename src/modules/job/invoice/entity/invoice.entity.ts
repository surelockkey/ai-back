import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class WorkizInvoice {
  @PrimaryColumn()
  uuid: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  client_id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  created: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  sent: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  status: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  invoice_status: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  job_amount_due: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  job_amount_due_date: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  job_total_price: string;
}
