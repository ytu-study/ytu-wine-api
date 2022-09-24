import { Type } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Min } from 'class-validator';

interface ClassRef<T> extends Type<T> {
  description: string;
}

export interface IPaginatedType<T> {
  page: number;
  display: number;
  totalCount: number;
  items: T[];
}

export function Paginated<T>(classRef: ClassRef<T>): Type<IPaginatedType<T>> {
  @ObjectType({ isAbstract: true })
  abstract class PaginatedType implements IPaginatedType<T> {
    @Min(1)
    @Field(() => Int, { description: '현재 페이지' })
    page: number;

    @Min(1)
    @Field(() => Int, { description: '현재 페이지당 보여줄 목록 수' })
    display: number;

    @Field(() => Int, { description: '총 개수' })
    totalCount: number;

    @Field(() => [classRef], { description: classRef.description })
    items: T[];
  }

  return PaginatedType as Type<IPaginatedType<T>>;
}
