import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { FoodBackgroundImage } from '@/types/foodBackgroundImage';
import { BaseEntity } from '@/utils/entity';

const description = '와인과 어울리는 음식';

@Entity()
@ObjectType({ description })
export class WineFood extends BaseEntity(description) {
  @Column()
  @Field(() => Int, { description: '' })
  id: number;

  @Column()
  @Field({ description: '' })
  name: string;

  @Column()
  @Field(() => FoodBackgroundImage, { description: '' })
  backgroundImage: FoodBackgroundImage;

  constructor(wineFood: Partial<WineFood>) {
    super(WineFood, wineFood);
  }
}
