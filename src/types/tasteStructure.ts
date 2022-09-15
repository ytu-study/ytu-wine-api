import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TasteStructure {
  @Field(() => Int, { description: '' })
  acidity: number;

  @Field(() => Int, { nullable: true, description: '' })
  fizziness: number | null;

  @Field(() => Int, { description: '' })
  intensity: number;

  @Field(() => Int, { nullable: true, description: '' })
  sweetness: number | null;

  @Field(() => Int, { nullable: true, description: '' })
  tannin: number | null;

  @Field(() => Int, { description: '' })
  userStructureCount: number;

  @Field(() => Int, { description: '' })
  calculatedStructureCount: number;
}
