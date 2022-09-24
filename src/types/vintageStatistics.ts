import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: '와인 통계 정보' })
export class VintageStatistics {
  @Field({ description: '???' })
  status: string;

  @Field(() => Int, { description: '평점 수' })
  ratingsCount: number;

  @Field({ description: '평점' })
  ratingsAverage: number;

  @Field(() => Int, { description: '???' })
  labelsCount: number;

  @Field(() => Int, { description: '???' })
  wineRatingsCount: number;

  @Field({ description: '???' })
  wineRatingsAverage: number;

  @Field({ description: '???' })
  wineStatus: string;
}
