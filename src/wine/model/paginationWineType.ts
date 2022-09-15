import { Field, ObjectType } from '@nestjs/graphql';
import { Expose, plainToClass } from 'class-transformer';
import { PaginationItems } from '@/types/paginationItems';
import { WineType } from './wineType.entity';

@ObjectType({
  implements: () => [PaginationItems],
})
export class PaginationWineType implements PaginationItems<WineType[]> {
  @Expose()
  page: number;

  @Expose()
  display: number;

  @Expose()
  totalCount: number;

  @Expose()
  @Field(() => [WineType], { nullable: 'items' })
  items: WineType[];

  constructor(pagination: PaginationWineType) {
    if (!pagination?.items) return;

    Object.assign(this, plainToClass(PaginationWineType, pagination, { excludeExtraneousValues: true }));
  }
}
