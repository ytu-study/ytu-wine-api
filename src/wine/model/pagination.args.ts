import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';

@ArgsType()
export class Pagination {
  @Field(() => Int, { defaultValue: 1 })
  @Min(1)
  page?: number;

  @Field(() => Int, { defaultValue: 10 })
  @Min(1)
  display?: number;
}
