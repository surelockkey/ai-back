import { registerEnumType } from "@nestjs/graphql";

export enum UserScheduleRequestStatus {
    REQUESTED = 'REQUESTED',
    APPROVED = 'APPROVED',
    DECLINED = 'DECLINED',
}

registerEnumType(UserScheduleRequestStatus, {
    name: 'UserScheduleRequestStatus',
    valuesMap: {
      REQUESTED: {
        description:
          'When Technician / Dispatcher requested some schedule',
      },
      APPROVED: {
        description:
          'When Main Dispatcher approved some requested schedule',
      },
      DECLINED: {
        description:
          'When Main Dispatcher declined some requested schedule',
      },
    },
  });