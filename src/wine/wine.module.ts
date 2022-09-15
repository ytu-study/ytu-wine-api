import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VivinoWine } from '@/wine/model/vivinoWine.entity';
import { Wine } from '@/wine/model/wine.entity';
import { WineCountry } from '@/wine/model/wineCountry.entity';
import { WineFood } from '@/wine/model/wineFood.entity';
import { WineGrape } from '@/wine/model/wineGrape.entity';
import { WineType } from '@/wine/model/wineType.entity';
import { WineResolver } from './wine.resolver';
import { WineService } from './wine.service';

@Module({
  providers: [WineService, WineResolver],
  imports: [TypeOrmModule.forFeature([Wine, VivinoWine, WineCountry, WineFood, WineGrape, WineType])],
})
export class WineModule {
}
