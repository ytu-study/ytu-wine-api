import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ImageVariations {
  @Field({ nullable: true, description: '' })
  bottleLarge: string | null;

  @Field({ nullable: true, description: '' })
  bottleMedium: string | null;

  @Field({ nullable: true, description: '' })
  bottleMediumSquare: string | null;

  @Field({ nullable: true, description: '' })
  bottleSmall: string | null;

  @Field({ nullable: true, description: '' })
  bottleSmallSquare: string | null;

  @Field({ nullable: true, description: '' })
  label: string | null;

  @Field({ nullable: true, description: '' })
  labelLarge: string | null;

  @Field({ nullable: true, description: '' })
  labelMedium: string | null;

  @Field({ nullable: true, description: '' })
  labelMediumSquare: string | null;

  @Field({ nullable: true, description: '' })
  labelSmallSquare: string | null;

  @Field({ description: '' })
  large: string;

  @Field({ description: '' })
  medium: string;

  @Field({ description: '' })
  mediumSquare: string;

  @Field({ description: '' })
  smallSquare: string;
}
