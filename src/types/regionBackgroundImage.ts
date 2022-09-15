import { Field, ObjectType } from '@nestjs/graphql';
import { PurpleVariations } from '@/types/purpleVariations';

@ObjectType()
export class RegionBackgroundImage {
  @Field({ description: '' })
  location: string;

  @Field(() => PurpleVariations, { description: '' })
  variations: PurpleVariations;
}
