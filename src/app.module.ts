import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '@/app.controller';
import { AppResolver } from '@/app.resolver';
import { AppService } from '@/app.service';
import { configOptions } from '@/config/env';
import { GraphqlService } from '@/config/graphql';
import { TypeormService } from '@/config/typeorm';
import { WineModule } from './wine/wine.module';

@Module({
  imports: [
    ConfigModule.forRoot(configOptions),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({ useClass: GraphqlService, driver: ApolloDriver }),
    TypeOrmModule.forRootAsync({ useClass: TypeormService }),
    WineModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {
}
