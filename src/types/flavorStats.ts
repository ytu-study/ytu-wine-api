import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: '풍미 통계 정보' })
export class FlavorStats {
  @Field(() => Int, { description: '풍미 수' })
  count: number;

  @Field(() => Int, { description: '풍미 점수' })
  score: number;
}
