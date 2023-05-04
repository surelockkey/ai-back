import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
    backend_url: process.env.BACKEND_URL,
    frontend_url: process.env.FRONTEND_URL,
    port: process.env.PORT,
    open_ai_key: process.env.OPEN_AI_API_KEY,
}));