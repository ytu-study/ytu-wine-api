import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '@/utils/entity';

@Entity({ name: 'wine_type' })
@ObjectType({ description: '와인 타입' })
export class WineTypeEntity extends BaseEntity() {
  @Column({ name: 'id' })
  @Field(() => Int, { description: '와인 타입 ID' })
  typeId: number;

  @Column()
  @Field({ description: '와인 타입 이름' })
  name: string;

  @Column()
  @Field(() => Int, { description: '와인 타입 조회수' })
  winesCount: number;

  constructor(wineType: Partial<WineTypeEntity>) {
    super(WineTypeEntity, wineType);
  }
}
