import { ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { ObjectLiteral } from 'typeorm';

@Injectable()
export class GraphqlService implements GqlOptionsFactory {
  private endpoint = '/v1/graphql';

  createGqlOptions(): ApolloDriverConfig {
    return {
      path: this.endpoint,
      autoSchemaFile: true,
      useGlobalPrefix: true,
      playground: { endpoint: this.endpoint },
      cors: true,
      introspection: true,
      formatError: (error: GraphQLError): GraphQLFormattedError & ObjectLiteral => ({
        message: error.message,
        code: error.extensions?.code,
        locations: error.locations,
        path: error.path,
      }),
    };
  }
}
