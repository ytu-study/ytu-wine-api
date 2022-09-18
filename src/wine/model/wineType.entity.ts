import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '@/utils/entity';

const description = '와인 타입';

@Entity()
@ObjectType({ description })
export class WineType extends BaseEntity(description) {
  @Column()
  @Field(() => Int, { description: '' })
  id: number;

  @Column()
  @Field({ description: '' })
  name: string;

  @Column()
  @Field(() => Int, { description: '' })
  winesCount: number;

  constructor(wineType: Partial<WineType>) {
    super(WineType, wineType);
  }
}
