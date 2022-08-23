import { ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { GraphQLFormattedError } from 'graphql';
import { join } from 'path';
import { ObjectLiteral } from 'typeorm';

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
        const { code, response } = (extensions ?? {}) as { code: number; response: ObjectLiteral };
        if (!response) return { ...error, code };

        const validations = (response).message;
        const validation = validations.reduce((acc, obj) => ({ ...acc, ...obj }), {});
        const [message] = Object.values(validation);

        return { ...response, code, message, validation } as GraphQLFormattedError;
      },
    };
  }
}
