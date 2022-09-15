import { Field, ObjectType } from '@nestjs/graphql';
import { Flavor } from '@/types/flavor';
import { TasteStructure } from '@/types/tasteStructure';

@ObjectType()
export class Taste {
  @Field(() => TasteStructure, { nullable: true, description: '' })
  structure: TasteStructure | null;

  @Field(() => [Flavor], { description: '' })
  flavor: Flavor[];
}
