import { Field, Int, ObjectType } from '@nestjs/graphql';
import { RegionStatistics } from '@/types/RegionStatistics';
import { RegionBackgroundImage } from '@/types/RegionBackgroundImage';
import { WineCountry } from '@/wine/model/wineCountry.entity';

@ObjectType()
export class Region {
  @Field(() => Int, { description: '' })
  id: number;

  @Field({ description: '' })
  name: string;

  @Field({ description: '' })
  nameEn: string;

  @Field({ description: '' })
  seoName: string;

  @Field(() => WineCountry, { description: '' })
  country: WineCountry;

  @Field(() => RegionBackgroundImage, { nullable: true, description: '' })
  backgroundImage: RegionBackgroundImage | null;

  @Field(() => Int, { nullable: true, description: '' })
  parentId: number | null;

  @Field(() => RegionStatistics, { nullable: true, description: '' })
  statistics: RegionStatistics | null;

  @Field({ deprecationReason: 'deprecated', description: '' })
  class: string | null
}
