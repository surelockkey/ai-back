import { registerAs } from '@nestjs/config';

export default registerAs('ctm', () => ({
    user: process.env.CTM_USER,
    password: process.env.CTM_PASSWORD,
    api_url: process.env.CTM_API_URL,
    account_id: Number(process.env.CTM_ACCOUNT_ID),
}));
