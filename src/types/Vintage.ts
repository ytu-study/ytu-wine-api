import { Field, Int, ObjectType } from '@nestjs/graphql';
import { TopListRanking } from '@/types/TopListRanking';
import { VintageImage } from '@/types/VintageImage';
import { VintageStatistics } from '@/types/VintageStatistics';
import { VintageWine } from '@/types/VintageWine';

@ObjectType()
export class Vintage {
  @Field(() => Int, { description: '' })
  id: number;

  @Field({ description: '' })
  seoName: string;

  @Field({ description: '' })
  name: string;

  @Field(() => VintageStatistics, { description: '' })
  statistics: VintageStatistics;

  @Field(() => VintageImage, { description: '' })
  image: VintageImage;

  @Field(() => VintageWine, { description: '' })
  wine: VintageWine;

  @Field(() => String, { description: '' })
  year: string;

  @Field({ description: '' })
  hasValidRatings: boolean;

  @Field(() => [TopListRanking], { nullable: true, description: '' })
  topListRankings: TopListRanking[] | null;
}
