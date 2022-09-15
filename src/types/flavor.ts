import { Field, ObjectType } from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { AryKeyword } from '@/types/aryKeyword';
import { FlavorStats } from '@/types/flavorStats';
import { FlavorGroup } from '@/types/enums';

@ObjectType()
export class Flavor {
  @IsEnum(FlavorGroup)
  @Field(() => FlavorGroup, { description: '' })
  group: FlavorGroup;

  @Field(() => FlavorStats, { description: '' })
  stats: FlavorStats;

  @Field(() => [AryKeyword], { nullable: true, description: '' })
  primaryKeywords: AryKeyword[] | null;

  @Field(() => [AryKeyword], { nullable: true, description: '' })
  secondaryKeywords: AryKeyword[] | null;
}
