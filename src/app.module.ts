import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '@/app.controller';
import { AppResolver } from '@/app.resolver';
import { AppService } from '@/app.service';
import { HttpExceptionFilter } from '@/common/filters';
import { LoggingInterceptor, TimeoutInterceptor } from '@/common/interceptors';
import { configOptions } from '@/config/env';
import { GraphqlService } from '@/config/graphql';
import { TypeormService } from '@/config/typeorm';
import { WineModule } from '@/wine/wine.module';

@Module({
  imports: [
    ConfigModule.forRoot(configOptions),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({ useClass: GraphqlService, driver: ApolloDriver }),
    TypeOrmModule.forRootAsync({ useClass: TypeormService }),
    WineModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    { provide: APP_PIPE, useClass: ValidationPipe },
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
    { provide: APP_INTERCEPTOR, useClass: TimeoutInterceptor },
    AppService,
    AppResolver,
  ],
})
export class AppModule {
}
