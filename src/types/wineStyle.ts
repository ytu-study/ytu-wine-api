import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { AcidityDescription, BodyDescription } from '@/types/enums';
import { Region } from '@/types/region';
import { StyleBackgroundImage } from '@/types/styleBackgroundImage';
import { WineFood } from '@/types/wineFood';
import { WineGrape } from '@/types/wineGrape';
import { WineCountryEntity } from '@/wine/model/wineCountry.entity';

@ObjectType({ description: '와인 스타일 정보' })
export class WineStyle {
  @Field(() => Int, { description: '와인 스타일 ID' })
  id: number;

  @Field({ description: '와인 스타일(kebab-case)' })
  seoName: string;

  @Field({ description: '지역명' })
  regionalName: string;

  @Field({ description: '버라이어털(포도 품종 이름으로 딴 와인) 이름' })
  varietalName: string;

  @Field({ description: '와인 스타일' })
  name: string;

  @Field(() => StyleBackgroundImage, { nullable: true, description: '' })
  backgroundImage: StyleBackgroundImage | null;

  @Field({ nullable: true, description: '와인 스타일 설명' })
  description: string | null;

  @Field({ nullable: true, description: '와인에 대한 짧은 광고' })
  blurb: string | null;

  @Field(() => [String], { nullable: true, description: '흥미로운 사실' })
  interestingFacts: string[] | null;

  @Field(() => Int, { description: '바디감' })
  body: number;

  @IsEnum(BodyDescription)
  @Field(() => BodyDescription, { description: '바디감(Full-bodied, Light-bodied, Medium-bodied, Very full-bodied' })
  bodyDescription: BodyDescription;

  @Field(() => Int, { description: '산도' })
  acidity: number;

  @IsEnum(AcidityDescription)
  @Field(() => AcidityDescription, { description: '산도(High, Medium, Low)' })
  acidityDescription: AcidityDescription;

  @Field(() => WineCountryEntity, { description: '와인 국가' })
  country: WineCountryEntity;

  @Field(() => Int, { description: '와인 타입 ID' })
  wineTypeId: number;

  @Field(() => [WineFood], { nullable: true, description: '와인과 어울리는 음식' })
  food: WineFood[] | null;

  @Field(() => [WineGrape], { description: '와인 포도 품종' })
  grapes: WineGrape[];

  @Field(() => Region, { nullable: true, description: '와인 지역' })
  region: Region | null;
}
