import { Field, Int, Float, ObjectType } from '@nestjs/graphql';
import { Expose, plainToClass } from 'class-transformer';
import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { v4 } from 'uuid';

@Entity()
@ObjectType()
export class Wine {
  @Expose()
  @ObjectIdColumn({ type: 'uuid' })
  @Field({ description: 'uuid' })
  _id?: string;

  @Expose()
  @Column()
  @Field({ description: '와인 이미지' })
  image: string;

  @Expose()
  @Column()
  @Field({ description: '와이너리' })
  winery: string;

  @Expose()
  @Column()
  @Field({ description: '와인 이름' })
  name: string;

  @Expose()
  @Column()
  @Field({ description: '와인 영문 이름' })
  enName: string;

  @Expose()
  @Column()
  @Field({ description: '와인 종류' })
  category: string;

  @Expose()
  @Column()
  @Field(() => Int, { nullable: true, description: '와인 가격' })
  price: number;

  @Expose()
  @Column()
  @Field({ description: '와인 생산 국가' })
  country: string;

  @Expose()
  @Column()
  @Field({ description: '와인 생산 지역' })
  area: string;

  @Expose()
  @Column()
  @Field(() => Int, { description: '와인 당도' })
  sweet: number;

  @Expose()
  @Column()
  @Field(() => Int, { description: '와인 산도' })
  acidity: number;

  @Expose()
  @Column()
  @Field(() => Int, { description: '와인 바디감' })
  body: number;

  @Expose()
  @Column()
  @Field(() => Int, { description: '와인 탄닌 함량' })
  tanin: number;

  @Expose()
  @Column()
  @Field(() => [String], { nullable: true, description: '와인과 어울리는 음식' })
  foodMatching: string[];

  @Expose()
  @Column()
  @Field({ description: '포도 품종' })
  grape: string;

  @Expose()
  @Column()
  @Field(() => [Float], { description: '와인 알콜' })
  alcohol: number[];

  @Expose()
  @Column()
  @Field(() => Int, { nullable: true, description: '와인 빈티지 연도' })
  vintage: number | null;

  constructor(wine: Partial<Wine>) {
    if (!wine?.name) return;

    Object.assign(this, plainToClass(Wine, wine, { excludeExtraneousValues: true }));
    this._id = this._id ?? v4();
  }
}
