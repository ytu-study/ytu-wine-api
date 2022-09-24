import { Field, Int, ObjectType } from '@nestjs/graphql';
import { RegionBackgroundImage } from '@/types/regionBackgroundImage';
import { RegionStatistics } from '@/types/regionStatistics';
import { WineCountry } from '@/types/wineCountry';

@ObjectType()
export class Region {
  @Field(() => Int, { description: '와인 지역 ID' })
  id: number;

  @Field({ description: '와인 지역 이름' })
  name: string;

  @Field({ description: '와인 지역 이름' })
  nameEn: string;

  @Field({ description: '와인 지역 이름(kebab-case)' })
  seoName: string;

  @Field(() => WineCountry, { description: '와인 국가' })
  country: WineCountry;

  @Field(() => RegionBackgroundImage, { nullable: true, description: '와인 지역 이미지' })
  backgroundImage: RegionBackgroundImage | null;

  @Field(() => Int, { nullable: true, deprecationReason: 'deprecated' })
  parentId: number | null;

  @Field(() => RegionStatistics, { nullable: true, deprecationReason: 'deprecated' })
  statistics: RegionStatistics | null;
}
