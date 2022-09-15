import { Field, ObjectType } from '@nestjs/graphql';
import { TentacledVariations } from '@/types/tentacledVariations';

@ObjectType()
export class WineryBackgroundImage {
  @Field({ description: '' })
  location: string;

  @Field(() => TentacledVariations, { description: '' })
  variations: TentacledVariations;
}
