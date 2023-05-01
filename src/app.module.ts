import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { OpenAiModule } from './open-ai/open-ai.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      context: ({ req, connection }) =>
        connection ? { req: connection.context } : { req },
      autoSchemaFile: 'src/schema.gql',
      sortSchema: true,
      playground: true,
      introspection: true,
    }),
    ConfigModule.forRoot(),
    OpenAiModule,
  ],
})
export class AppModule {}
