import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VivinoWineEntity } from '@/wine/model/vivinoWine.entity';
import { Wine } from '@/wine/model/wine.entity';
import { WineCountryEntity } from '@/wine/model/wineCountry.entity';
import { WineFoodEntity } from '@/wine/model/wineFood.entity';
import { WineGrapeEntity } from '@/wine/model/wineGrape.entity';
import { WineTypeEntity } from '@/wine/model/wineType.entity';
import { WineResolver } from './wine.resolver';
import { WineService } from './wine.service';

@Module({
  providers: [WineService, WineResolver],
  imports: [TypeOrmModule.forFeature([Wine, VivinoWineEntity, WineCountryEntity, WineFoodEntity, WineGrapeEntity, WineTypeEntity])],
})
export class WineModule {
}
