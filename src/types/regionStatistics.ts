import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RegionStatistics {
  @Field(() => Int, { description: '' })
  wineriesCount: number;

  @Field(() => Int, { description: '' })
  winesCount: number;

  @Field(() => Int, { description: '' })
  subRegionsCount: number;

  @Field(() => Int, { description: '' })
  parentRegionsCount: number;
}
