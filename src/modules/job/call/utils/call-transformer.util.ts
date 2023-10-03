import { DeepPartial } from 'typeorm';
import { Call } from '../entity/call.entity';

export function workizCallToTableCall(
  call: any,
  account?: 'main' | 'arizona',
): DeepPartial<Call> {
  return {
    id: call.id,
    call_sid: call.call_sid,
    direction: call.direction,
    client_id: call.client_id,
    created: call.created,
    flow_name: call.flow_name,
    job_id: call.uuid,
    job_serial: call.job_serial,
    call_duration: call.call_duration,
    client_number: call.clientNumber,
    user_number: call.userNumber,
    created_sql: call.created_sql,
    account,
  };
}
