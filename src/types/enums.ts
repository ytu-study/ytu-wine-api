import { registerEnumType } from '@nestjs/graphql';

export enum CurrencyCode {
  Ars = 'ARS',
  Aud = 'AUD',
  Clp = 'CLP',
  Eur = 'EUR',
  Krw = 'KRW',
  Usd = 'USD',
  Zar = 'ZAR',
}

export enum FlavorGroup {
  BlackFruit = 'black_fruit',
  CitrusFruit = 'citrus_fruit',
  DriedFruit = 'dried_fruit',
  Earth = 'earth',
  Floral = 'floral',
  Microbio = 'microbio',
  NonOak = 'non_oak',
  Oak = 'oak',
  RedFruit = 'red_fruit',
  Spices = 'spices',
  TreeFruit = 'tree_fruit',
  TropicalFruit = 'tropical_fruit',
  Vegetal = 'vegetal',
}

export enum BodyDescription {
  FullBodied = 'Full-bodied',
  LightBodied = 'Light-bodied',
  MediumBodied = 'Medium-bodied',
  VeryFullBodied = 'Very full-bodied',
}

export enum AcidityDescription {
  High = 'High',
  Medium = 'Medium',
  Low = 'Low'
}

registerEnumType(CurrencyCode, { name: 'CurrencyCode' });
registerEnumType(FlavorGroup, { name: 'Group' });
registerEnumType(BodyDescription, { name: 'BodyDescription' });
registerEnumType(AcidityDescription, { name: 'AcidityDescription' });
