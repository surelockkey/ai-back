import { registerEnumType } from '@nestjs/graphql';

export enum BucketName {
  AWS_BUCKET_LOCKSMITH = 'bucket_locksmith',
}
registerEnumType(BucketName, { name: 'BucketName' });
