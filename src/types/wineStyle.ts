import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { AcidityDescription, BodyDescription } from '@/types/enums';
import { Region } from '@/types/region';
import { StyleBackgroundImage } from '@/types/styleBackgroundImage';
import { WineFood } from '@/types/wineFood';
import { WineGrape } from '@/types/wineGrape';
import { WineCountryEntity } from '@/wine/model/wineCountry.entity';

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

  @Field(() => WineCountryEntity, { description: '' })
  country: WineCountryEntity;

  @Field(() => Int, { description: '' })
  wineTypeId: number;

  @Field(() => [WineFood], { nullable: true, description: '' })
  food: WineFood[] | null;

  @Field(() => [WineGrape], { description: '' })
  grapes: WineGrape[];

  @Field(() => Region, { nullable: true, description: '' })
  region: Region | null;
}
