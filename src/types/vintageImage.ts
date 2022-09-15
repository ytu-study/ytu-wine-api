import { Field, ObjectType } from '@nestjs/graphql';
import { ImageVariations } from '@/types/imageVariations';

@ObjectType()
export class VintageImage {
  @Field({ description: '' })
  location: string;

  @Field(() => ImageVariations, { description: '' })
  variations: ImageVariations;
}
