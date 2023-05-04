import { registerEnumType } from '@nestjs/graphql';

export enum LogType {
    WARNING = 'warning',
    ERROR = 'error',
    SUCCESS = 'success',
}

registerEnumType(LogType, { name: 'LogType' });
