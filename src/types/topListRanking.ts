import { Field, Int, ObjectType } from '@nestjs/graphql';
import { TopList } from '@/types/topList';

@ObjectType()
export class TopListRanking {
  @Field(() => Int)
  rank: number;

  @Field(() => Int)
  previousRank: number;

  @Field({ nullable: true })
  description: string | null;

  @Field(() => TopList)
  topList: TopList;
}
