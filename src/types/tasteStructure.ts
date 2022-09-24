import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: '와인 맛 정보' })
export class TasteStructure {
  @Field(() => Int, { description: '산도' })
  acidity: number;

  @Field(() => Int, { nullable: true, description: '탄산' })
  fizziness: number | null;

  @Field(() => Int, { description: '고유한 맛의 강도' })
  intensity: number;

  @Field(() => Int, { nullable: true, description: '당도' })
  sweetness: number | null;

  @Field(() => Int, { nullable: true, description: '탄닌' })
  tannin: number | null;

  @Field(() => Int, { description: '' })
  userStructureCount: number;

  @Field(() => Int, { description: '' })
  calculatedStructureCount: number;
}
