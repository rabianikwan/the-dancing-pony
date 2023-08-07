import {IsEmpty, IsNotEmpty, IsString, Max, Min} from 'class-validator';

export class createDish {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    image: string;

    @IsNotEmpty()
    @IsString()
    price: number;

    @IsEmpty()
    @Min(1)
    @Max(5)
    rating: number;
}