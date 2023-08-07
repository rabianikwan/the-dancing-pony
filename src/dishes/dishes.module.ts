import { Module } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { DishesController } from './dishes.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Dishes} from "./dish.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Dishes])],
  providers: [DishesService],
  controllers: [DishesController]
})
export class DishesModule {}
