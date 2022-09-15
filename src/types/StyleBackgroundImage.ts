import { Field, ObjectType } from '@nestjs/graphql';
import { FluffyVariations } from '@/types/FluffyVariations';

@ObjectType()
export class StyleBackgroundImage {
  @Field({ description: '' })
  location: string;

  @Field(() => FluffyVariations, { description: '' })
  variations: FluffyVariations;
}
