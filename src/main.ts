// Update your existing main.ts file

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';

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
    logging: false,
  });

  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());

  app.use(graphqlUploadExpress({ maxFileSize: 100000000, maxFiles: 40 }));
  app.enableCors({
    allowedHeaders: '*',
  });

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  // Updated Swagger configuration with API key support
  const config = new DocumentBuilder()
    .setTitle('SLK CRM')
    .setDescription('SLK CRM API with GraphQL and REST endpoints')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'API Key',
        name: 'Authorization',
        description: 'Enter your API key (for REST API endpoints)',
        in: 'header',
      },
      'api-key',
    )
    .addApiKey(
      {
        type: 'apiKey',
        name: 'X-API-Key',
        in: 'header',
        description: 'API Key for REST API authentication',
      },
      'api-key',
    )
    .addTag('Constructed Pages', 'REST API operations for constructed pages')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      docExpansion: 'none',
      filter: true,
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
    },
  });

  app.use(bodyParser.json({ limit: '100mb' }));
  app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

  await app.listen(configService.get('app.port'));

  console.log(`🚀 Server running on port ${configService.get('app.port')}`);
  console.log(
    `📚 API Documentation available at http://localhost:${configService.get(
      'app.port',
    )}/api`,
  );
}
bootstrap();
