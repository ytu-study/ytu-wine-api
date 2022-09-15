import { Field, ObjectType } from '@nestjs/graphql';
import { Expose, plainToClass } from 'class-transformer';
import { PaginationItems } from '@/types/PaginationItems';
import { WineGrape } from '@/wine/model/wineGrape.entity';

@ObjectType({
  implements: () => [PaginationItems],
})
export class PaginationWineGrape implements PaginationItems<WineGrape[]> {
  @Expose()
  page: number;

  @Expose()
  display: number;

  @Expose()
  totalCount: number;

  @Expose()
  @Field(() => [WineGrape])
  items: WineGrape[];

  constructor(pagination: PaginationWineGrape) {
    if (!pagination?.items) return;

    Object.assign(this, plainToClass(PaginationWineGrape, pagination, { excludeExtraneousValues: true }));
  }
}
