import { Field, ObjectType } from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { CurrencyCode } from '@/types/enums';

@ObjectType()
export class Currency {
  @IsEnum(CurrencyCode)
  @Field(() => CurrencyCode, { description: '통화 코드' })
  code: CurrencyCode;

  @Field({ description: '통화 이름' })
  name: string;

  @Field({ nullable: true, description: '통화 표시 부호' })
  prefix: string | null;

  @Field({ nullable: true, description: '', deprecationReason: 'deprecated' })
  suffix: string | null;
}
