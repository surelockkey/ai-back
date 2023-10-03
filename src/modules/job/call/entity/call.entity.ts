import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Call {
  @Field(() => String)
  @PrimaryColumn()
  id: string;

  @Field(() => String)
  @Column({ nullable: true })
  job_id: string;

  @Field(() => String)
  @Column({ nullable: true })
  call_sid: string;

  @Field(() => String)
  @Column({ nullable: true })
  direction: string;

  @Field(() => String)
  @Column({ nullable: true })
  client_id: string;

  @Field(() => String)
  @Column({ nullable: true })
  created: string;

  @Field(() => String)
  @Column({ nullable: true })
  flow_name: string;

  @Field(() => String)
  @Column({ nullable: true })
  job_serial: string;

  @Field(() => String)
  @Column({ nullable: true })
  call_duration: string;

  @Field(() => String)
  @Column({ nullable: true })
  client_number: string;

  @Field(() => String)
  @Column({ nullable: true })
  user_number: string;

  @Field(() => String)
  @Column({ nullable: true })
  created_sql: string;

  @Column({ default: 'main' })
  account?: string;
}

// "call_sid": "CAef0046ca60a9bf657a39983c7e1efcf8",
// "direction": "outgoing",
// "client_id": "207909"
// "created": "Fri Sep 1st, 11:57PM"
// "flow_name": "(1) SURE IL CHICAGO GMB",
// "uuid": "3XQJO4"
// "job_serial": "173640"
// "call_duration": "1 Min 10 Sec"
// "clientNumber": "(224) 717-4244"
// "userNumber": "(312) 874-6375"
// "created_sql": "2023-09-01T23:57:16"
