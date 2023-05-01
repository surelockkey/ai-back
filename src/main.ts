import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';

async function bootstrap() {
  console.log({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
    logging: true,
  });

  const app = await NestFactory.create(AppModule);
  app.use(graphqlUploadExpress({ maxFileSize: 1000000, maxFiles: 10 }));
  await app.listen(3000);
}
bootstrap();
