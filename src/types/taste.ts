import { Field, ObjectType } from '@nestjs/graphql';
import { Flavor } from '@/types/flavor';
import { TasteStructure } from '@/types/tasteStructure';

@ObjectType({ description: '와인 맛 정보' })
export class Taste {
  @Field(() => TasteStructure, { nullable: true, description: '와인 맛 구조' })
  structure: TasteStructure | null;

  @Field(() => [Flavor], { description: '와인 풍미' })
  flavor: Flavor[];
}
