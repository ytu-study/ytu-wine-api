import { Field, ObjectType } from '@nestjs/graphql';
import { Expose, plainToClass } from 'class-transformer';
import { WineFood } from '@/wine/model/wineFood.entity';
import { PaginationItems } from '@/types/paginationItems';

@ObjectType({
  implements: () => [PaginationItems],
})
export class PaginationWineFood implements PaginationItems<WineFood[]> {
  @Expose()
  page: number;

  @Expose()
  display: number;

  @Expose()
  totalCount: number;

  @Expose()
  @Field(() => [WineFood], { nullable: 'items' })
  items: WineFood[];

  constructor(pagination: PaginationWineFood) {
    if (!pagination?.items) return;

    Object.assign(this, plainToClass(PaginationWineFood, pagination, { excludeExtraneousValues: true }));
  }
}
