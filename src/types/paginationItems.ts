import { Field, InterfaceType } from '@nestjs/graphql';

@InterfaceType()
export abstract class PaginationItems<T> {
  @Field()
  page: number;

  @Field()
  display: number;

  @Field()
  totalCount: number;

  abstract items: T;
}
