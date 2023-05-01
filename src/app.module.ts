import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { OpenAiModule } from './open-ai/open-ai.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatModule } from './chat/chat.module';
import { FineTuneModule } from './fine-tune/fine-tune.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      context: ({ req, connection }) =>
        connection ? { req: connection.context } : { req },
      autoSchemaFile: 'src/schema.gql',
      sortSchema: true,
      playground: true,
      introspection: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
      logging: true,
    }),
    OpenAiModule,
    ChatModule,
    FineTuneModule,
  ],
})
export class AppModule {}
