import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Taste } from '@/types/taste';
import { Region } from '@/types/region';
import { Winery } from '@/types/winery';
import { WineStatistics } from '@/types/wineStatistics';
import { WineStyle } from '@/types/wineStyle';

@ObjectType()
export class VintageWine {
  @Field(() => Int, { description: '와인 ID' })
  id: number;

  @Field({ description: '와인 이름' })
  name: string;

  @Field({ description: '와인 이름(kebab-case)' })
  seoName: string;

  @Field(() => Int, { description: '와인 타입 ID' })
  typeId: number;

  @Field(() => Int, { description: '???' })
  vintageType: number;

  @Field({ description: '천연 와인 여부' })
  isNatural: boolean;

  @Field(() => Region, { description: '와인 생산 지역' })
  region: Region;

  @Field(() => Winery, { description: '와이너리' })
  winery: Winery;

  @Field(() => Taste, { description: '와인 맛' })
  taste: Taste;

  @Field(() => WineStatistics, { description: '와인 통계' })
  statistics: WineStatistics;

  @Field(() => WineStyle, { nullable: true, description: '와인 스타일' })
  style: WineStyle | null;

  @Field({ deprecationReason: 'deprecated' })
  hasValidRatings: boolean;
}
