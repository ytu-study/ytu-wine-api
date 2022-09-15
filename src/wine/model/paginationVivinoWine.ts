import { Field, ObjectType } from '@nestjs/graphql';
import { Expose, plainToClass } from 'class-transformer';
import { VivinoWine } from '@/wine/model/vivinoWine.entity';
import { PaginationItems } from '@/types/paginationItems';

@ObjectType({
  implements: () => [PaginationItems],
})
export class PaginationVivinoWine implements PaginationItems<VivinoWine[]> {
  @Expose()
  page: number;

  @Expose()
  display: number;

  @Expose()
  totalCount: number;

  @Expose()
  @Field(() => [VivinoWine], { nullable: 'items' })
  items: VivinoWine[];

  constructor(pagination: PaginationVivinoWine) {
    if (!pagination?.items) return;

    Object.assign(this, plainToClass(PaginationVivinoWine, pagination, { excludeExtraneousValues: true }));
  }
}
