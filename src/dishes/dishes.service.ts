import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Dishes} from "./dish.entity";
import {Repository} from "typeorm";

@Injectable()
export class DishesService {
    constructor(
        @InjectRepository(Dishes)
        private dishesRepo: Repository<Dishes>
    ) {}

    async getAll() {}
    async getBy() {}
    async createDish() {}
    async updateDish() {}
    async deleteDish() {}
}
