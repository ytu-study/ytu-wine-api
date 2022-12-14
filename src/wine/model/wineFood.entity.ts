import { Field, Int, ObjectType, OmitType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { FoodBackgroundImage } from '@/types/foodBackgroundImage';
import { WineFood } from '@/types/wineFood';
import { BaseEntity } from '@/utils/entity';

@Entity({ name: 'wine_food' })
@ObjectType({ description: '와인과 어울리는 음식' })
export class WineFoodEntity extends BaseEntity(OmitType(WineFood, ['id'])) implements Omit<WineFood, 'id'> {
  @Column({ name: 'id' })
  @Field(() => Int, { description: '음식 ID' })
  foodId: WineFood['id'];

  @Column()
  name: string;

  @Column()
  backgroundImage: FoodBackgroundImage;

  constructor(wineFood: Partial<WineFoodEntity>) {
    super(WineFoodEntity, wineFood);
  }
}
