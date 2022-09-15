import { Field, ObjectType } from '@nestjs/graphql';
import { Expose, plainToClass } from 'class-transformer';
import { WineCountry } from '@/wine/model/wineCountry.entity';
import { PaginationItems } from '@/types/PaginationItems';

@ObjectType({
  implements: () => [PaginationItems],
})
export class PaginationWineCountry implements PaginationItems<WineCountry[]> {
  @Expose()
  page: number;

  @Expose()
  display: number;

  @Expose()
  totalCount: number;

  @Field(() => [WineCountry], { nullable: 'items' })
  items: WineCountry[];

  constructor(pagination: PaginationWineCountry) {
    if (!pagination?.items) return;

    Object.assign(this, plainToClass(PaginationWineCountry, pagination, { excludeExtraneousValues: true }));
  }
}
