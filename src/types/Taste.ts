import { Field, ObjectType } from '@nestjs/graphql';
import { Flavor } from '@/types/Flavor';
import { TasteStructure } from '@/types/TasteStructure';

@ObjectType()
export class Taste {
  @Field(() => TasteStructure, { nullable: true, description: '' })
  structure: TasteStructure | null;

  @Field(() => [Flavor], { description: '' })
  flavor: Flavor[];
}
