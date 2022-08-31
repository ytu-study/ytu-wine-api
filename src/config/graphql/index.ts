import { ApolloDriverConfig } from '@nestjs/apollo';
import { HttpStatus, Injectable } from '@nestjs/common';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { GraphQLFormattedError } from 'graphql';

type ErrorResponse = {
  statusCode: HttpStatus;
  message: string[];
  error: string;
}

@Injectable()
export class GraphqlService implements GqlOptionsFactory {
  private endpoint = '/v1/graphql';
  private isDevelopment = process.env.NODE_ENV === 'development';

  createGqlOptions(): ApolloDriverConfig {
    return {
      autoSchemaFile: true,
      cors: true,
      path: this.endpoint,
      useGlobalPrefix: true,
      playground: true,
      introspection: true,
      sortSchema: true,
      debug: this.isDevelopment,
      formatError: ({ extensions, ...error }) => {
        const { code, response } = extensions as { code: string; response: ErrorResponse; };
        if (!response) return { statusCode: 500, status: 'Internal Server Error', code, message: error.message };

        const { error: status, statusCode, message } = response;
        return { statusCode, status, code, message: message.join(',') } as GraphQLFormattedError;
      },
    };
  }
}
