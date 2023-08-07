// dishes/dish.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dishes {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({ unique: true })
    name: string;

    @Column({ unique: true })
    description: string;

    @Column()
    image: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price: number;

    @Column()
    rating: number;
}
