import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: '와인 포도 품종' })
export class WineGrape {
  @Field(() => Int, { description: '포도 ID' })
  id: number;

  @Field({ description: '포도 이름' })
  name: string;

  @Field({ description: '포도 이름(kebab-case)' })
  seoName: string;

  @Field(() => Int, { deprecationReason: 'deprecated' })
  hasDetailedInfo: boolean;

  @Field(() => Int, { description: '포도 조회수' })
  winesCount: number;
}
