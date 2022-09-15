import { Expose, plainToClass } from 'class-transformer';

export class PaginationData<T> {
  @Expose()
  page: number;

  @Expose()
  display: number;

  @Expose()
  totalCount: number;

  @Expose()
  data: T

  constructor(paginationData: PaginationData<T>) {
    if (!paginationData?.data) return;

    Object.assign(this, plainToClass(PaginationData, paginationData, { excludeExtraneousValues: true }));
    this.page = this.page ?? 1;
    this.display = this.display ?? 10;
  }
}
