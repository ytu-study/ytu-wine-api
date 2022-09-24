import { Field, Int, ObjectType } from '@nestjs/graphql';
import { TopListRanking } from '@/types/topListRanking';
import { VintageImage } from '@/types/vintageImage';
import { VintageStatistics } from '@/types/vintageStatistics';
import { VintageWine } from '@/types/vintageWine';

@ObjectType()
export class Vintage {
  @Field(() => Int, { description: '빈티지 ID' })
  id: number;

  @Field({ description: '와이너리 + 와인 + 빈티지 이름(kebab-case)' })
  seoName: string;

  @Field({ description: '와이너리 + 와인 + 빈티지연도 이름' })
  name: string;

  @Field(() => VintageStatistics, { description: '와인 통계' })
  statistics: VintageStatistics;

  @Field(() => VintageImage, { description: '와인 이미지' })
  image: VintageImage;

  @Field(() => VintageWine, { description: '와인' })
  wine: VintageWine;

  @Field(() => String, { description: '빈티지 연도' })
  year: string;

  @Field({ deprecationReason: 'deprecated' })
  hasValidRatings: boolean;

  @Field(() => [TopListRanking], { nullable: true, deprecationReason: 'deprecated' })
  topListRankings: TopListRanking[] | null;
}
