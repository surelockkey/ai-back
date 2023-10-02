import { ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@tech-slk/nest-crud';
import { Entity } from 'typeorm';

@ObjectType()
@Entity()
export class Call extends BaseEntity {
  call_sid: string;
  direction: string;
  client_id: string;
  created: string;
  flow_name: string;
  uuid: string;
  job_serial: string;
  call_duration: string;
  clientNumber: string;
  userNumber: string;
  created_sql: string;
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
