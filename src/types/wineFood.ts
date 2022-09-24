import { Field, Int, ObjectType } from '@nestjs/graphql';
import { FoodBackgroundImage } from '@/types/foodBackgroundImage';

@ObjectType({ description: '와인과 어울리는 음식' })
export class WineFood {
  @Field(() => Int, { description: '음식 ID' })
  id: number;

  @Field({ description: '음식 이름' })
  name: string;

  @Field(() => FoodBackgroundImage, { description: '음식 이미지' })
  backgroundImage: FoodBackgroundImage;
}
