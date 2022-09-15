import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VivinoWine } from '@/wine/model/vivinoWine.entity';
import { Wine } from '@/wine/model/wine.entity';
import { WineResolver } from './wine.resolver';
import { WineService } from './wine.service';

@Module({
  providers: [WineService, WineResolver],
  imports: [TypeOrmModule.forFeature([Wine, VivinoWine])],
})
export class WineModule {
}
