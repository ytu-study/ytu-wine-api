import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Taste } from '@/types/Taste';
import { Region } from '@/types/Region';
import { Winery } from '@/types/Winery';
import { WineStatistics } from '@/types/WineStatistics';
import { WineStyle } from '@/types/WineStyle';

@ObjectType()
export class VintageWine {
  @Field(() => Int, { description: '' })
  id: number;

  @Field({ description: '' })
  name: string;

  @Field({ description: '' })
  seoName: string;

  @Field(() => Int, { description: '' })
  typeId: number;

  @Field(() => Int, { description: '' })
  vintageType: number;

  @Field({ description: '' })
  isNatural: boolean;

  @Field(() => Region, { description: '' })
  region: Region;

  @Field(() => Winery, { description: '' })
  winery: Winery;

  @Field(() => Taste, { description: '' })
  taste: Taste;

  @Field(() => WineStatistics, { description: '' })
  statistics: WineStatistics;

  @Field(() => WineStyle, { nullable: true, description: '' })
  style: WineStyle | null;

  @Field({ description: '' })
  hasValidRatings: boolean;
}
