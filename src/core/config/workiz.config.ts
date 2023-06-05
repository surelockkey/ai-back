import { registerAs } from '@nestjs/config';

export default registerAs('workiz', () => ({
  email: process.env.WORKIZ_EMAIL,
  password: process.env.WORKIZ_PASSWORD,
}));
