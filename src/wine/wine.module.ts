import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wine } from '@/wine/model/wine.entity';
import { WineService } from './wine.service';
import { WineResolver } from './wine.resolver';

@Module({
  providers: [WineService, WineResolver],
  imports: [TypeOrmModule.forFeature([Wine])],
})
export class WineModule {
}
