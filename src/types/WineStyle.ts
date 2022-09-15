import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { WineCountry } from '@/wine/model/wineCountry.entity';
import { StyleBackgroundImage } from '@/types/StyleBackgroundImage';
import { Region } from '@/types/Region';
import { AcidityDescription, BodyDescription } from '@/types/enums';
import { WineFood } from '@/wine/model/wineFood.entity';
import { WineGrape } from '@/wine/model/wineGrape.entity';

@ObjectType()
export class WineStyle {
  @Field(() => Int, { description: '' })
  id: number;

  @Field({ description: '' })
  seoName: string;

  @Field({ description: '' })
  regionalName: string;

  @Field({ description: '' })
  varietalName: string;

  @Field({ description: '' })
  name: string;

  @Field({ nullable: true, description: '' })
  image: string | null;

  @Field(() => StyleBackgroundImage, { nullable: true, description: '' })
  backgroundImage: StyleBackgroundImage | null;

  @Field({ nullable: true, description: '' })
  description: string | null;

  @Field({ nullable: true, description: '' })
  blurb: string | null;

  @Field(() => [String], { nullable: true, description: '' })
  interestingFacts: string[] | null;

  @Field(() => Int, { description: '' })
  body: number;

  @IsEnum(BodyDescription)
  @Field(() => BodyDescription, { description: '' })
  bodyDescription: BodyDescription;

  @Field(() => Int, { description: '' })
  acidity: number;

  @IsEnum(AcidityDescription)
  @Field(() => AcidityDescription, { description: '' })
  acidityDescription: AcidityDescription;

  @Field(() => WineCountry, { description: '' })
  country: WineCountry;

  @Field(() => Int, { description: '' })
  wineTypeId: number;

  @Field(() => [WineFood], { nullable: true, description: '' })
  food: WineFood[] | null;

  @Field(() => [WineGrape], { description: '' })
  grapes: WineGrape[];

  @Field(() => Region, { nullable: true, description: '' })
  region: Region | null;
}
