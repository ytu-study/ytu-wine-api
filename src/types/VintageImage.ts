import { Field, ObjectType } from '@nestjs/graphql';
import { ImageVariations } from '@/types/ImageVariations';

@ObjectType()
export class VintageImage {
  @Field({ description: '' })
  location: string;

  @Field(() => ImageVariations, { description: '' })
  variations: ImageVariations;
}
