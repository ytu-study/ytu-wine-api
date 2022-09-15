import { Field, ObjectType } from '@nestjs/graphql';
import { TentacledVariations } from '@/types/TentacledVariations';

@ObjectType()
export class WineryBackgroundImage {
  @Field({ description: '' })
  location: string;

  @Field(() => TentacledVariations, { description: '' })
  variations: TentacledVariations;
}
