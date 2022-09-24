import { Field, Int, ObjectType } from '@nestjs/graphql';
import { WineryBackgroundImage } from '@/types/wineryBackgroundImage';

@ObjectType({ description: '와이너리 정보' })
export class Winery {
  @Field(() => Int, { description: '와이너리 ID' })
  id: number;

  @Field({ description: '와이너리 이름' })
  name: string;

  @Field({ description: '와이너리 이름(kebab-case)' })
  seoName: string;

  @Field(() => Int, { deprecationReason: 'deprecated' })
  status: number;

  @Field(() => WineryBackgroundImage, { nullable: true, description: '와이너리 이미지' })
  backgroundImage: WineryBackgroundImage | null;
}
