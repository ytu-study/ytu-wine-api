import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Expose, plainToClass } from 'class-transformer';
import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { FoodBackgroundImage } from '@/types/FoodBackgroundImage';

@Entity()
@ObjectType({ description: '와인과 어울리는 음식' })
export class WineFood {
  @Expose()
  @ObjectIdColumn()
  @Field({ description: 'objectId' })
  _id?: string;

  @Expose()
  @Column()
  @Field(() => Int, { description: '' })
  id: number;

  @Expose()
  @Column()
  @Field({ description: '' })
  name: string;

  @Expose()
  @Column()
  @Field(() => FoodBackgroundImage, { description: '' })
  backgroundImage: FoodBackgroundImage;

  constructor(wineFood: Partial<WineFood>) {
    if (!wineFood?.name) return;

    Object.assign(this, plainToClass(WineFood, wineFood, { excludeExtraneousValues: true }));
  }
}
