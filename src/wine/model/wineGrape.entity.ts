import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '@/utils/entity';

const description = '와인 포도 품종';

@Entity()
@ObjectType({ description })
export class WineGrape extends BaseEntity(description) {
  @Column()
  @Field(() => Int, { description: '' })
  id: number;

  @Column()
  @Field({ description: '' })
  name: string;

  @Column()
  @Field({ description: '' })
  seoName: string;

  @Column()
  @Field(() => Int, { description: '' })
  hasDetailedInfo: boolean;

  @Column()
  @Field(() => Int, { description: '' })
  winesCount: number;

  constructor(data: WineGrape) {
    super(WineGrape, data);
  }
}
