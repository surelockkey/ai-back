import { registerAs } from '@nestjs/config';

export default registerAs('aws', () => ({
  access_key_id: process.env.AWS_ACCESS_KEY_ID,
  access_key: process.env.AWS_SECRET_ACCESS_KEY,
  bucket: process.env.AWS_BUCKET,
  region: process.env.AWS_REGION,
  bucket_locksmith: process.env.AWS_BUCKET_LOCKSMITH,
}));
