import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Dishes {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true})
    name: string;

    @Column({ unique : true})
    description: string;

    @Column()
    price: number;

    @Column()
    rating: number;
}
