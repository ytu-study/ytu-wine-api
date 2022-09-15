import { Field, ObjectType } from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { CurrencyCode } from '@/types/enums';

@ObjectType()
export class Currency {
  @IsEnum(CurrencyCode)
  @Field(() => CurrencyCode, { description: '' })
  code: CurrencyCode;

  @Field({ description: '' })
  name: string;

  @Field({ nullable: true, description: '' })
  prefix: string | null;

  @Field({ nullable: true, description: '', deprecationReason: 'deprecated' })
  suffix: string | null;
}
