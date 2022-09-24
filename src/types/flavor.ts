import { Field, ObjectType } from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { Keyword } from '@/types/keyword';
import { FlavorStats } from '@/types/flavorStats';
import { FlavorGroup } from '@/types/enums';

@ObjectType({ description: '풍미 정보' })
export class Flavor {
  @IsEnum(FlavorGroup)
  @Field(() => FlavorGroup, { description: '풍미 그룹' })
  group: FlavorGroup;

  @Field(() => FlavorStats, { description: '풍미 통계' })
  stats: FlavorStats;

  @Field(() => [Keyword], { nullable: true, description: '일반적인 풍미 키워드' })
  primaryKeywords: Keyword[] | null;

  @Field(() => [Keyword], { nullable: true, description: '이차적인 풍미 키워드' })
  secondaryKeywords: Keyword[] | null;
}
