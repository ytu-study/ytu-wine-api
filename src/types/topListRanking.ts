import { Field, Int, ObjectType } from '@nestjs/graphql';
import { TopList } from '@/types/topList';

@ObjectType()
export class TopListRanking {
  @Field(() => Int, { description: '' })
  rank: number;

  @Field(() => Int, { description: '' })
  previousRank: number;

  @Field({ nullable: true, description: '' })
  description: string | null;

  @Field(() => TopList, { description: '' })
  topList: TopList;
}
