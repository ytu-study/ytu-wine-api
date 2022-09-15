import { Field, Int, ObjectType } from '@nestjs/graphql';
import { WineryBackgroundImage } from '@/types/wineryBackgroundImage';

@ObjectType()
export class Winery {
  @Field(() => Int, { description: '' })
  id: number;

  @Field({ description: '' })
  name: string;

  @Field({ description: '' })
  seoName: string;

  @Field(() => Int, { description: '' })
  status: number;

  @Field(() => WineryBackgroundImage, { nullable: true, description: '' })
  backgroundImage: WineryBackgroundImage | null;
}
