import {
  Field, Int, Float, ObjectType,
} from '@nestjs/graphql';
import { Expose, plainToClass } from 'class-transformer';
import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { v4 } from 'uuid';

@Entity()
@ObjectType('wine')
export class Wine {
  @Expose()
  @ObjectIdColumn({ type: 'uuid' })
  @Field()
  _id?: string;

  @Expose()
  @Column()
  @Field()
  image: string;

  @Expose()
  @Column()
  @Field()
  winery: string;

  @Expose()
  @Column()
  @Field()
  name: string;

  @Expose()
  @Column()
  @Field()
  enName: string;

  @Expose()
  @Column()
  @Field()
  category: string;

  @Expose()
  @Column()
  @Field(() => Int)
  price: number;

  @Expose()
  @Column()
  @Field()
  country: string;

  @Expose()
  @Column()
  @Field()
  area: string;

  @Expose()
  @Column()
  @Field(() => Int)
  sweet: number;

  @Expose()
  @Column()
  @Field(() => Int)
  acidity: number;

  @Expose()
  @Column()
  @Field(() => Int)
  body: number;

  @Expose()
  @Column()
  @Field(() => Int)
  tanin: number;

  @Expose()
  @Column()
  @Field()
  foodMatching: string;

  @Expose()
  @Column()
  @Field()
  grape: string;

  @Expose()
  @Column()
  @Field(() => [Float])
  alcohol: number[];

  @Expose()
  @Column()
  @Field(() => Int, { nullable: true })
  vintage: number | null;

  constructor(wine: Partial<Wine>) {
    if (!wine?.name) return;

    Object.assign(this, plainToClass(Wine, wine, { excludeExtraneousValues: true }));
    this._id = this._id ?? v4();
  }
}
