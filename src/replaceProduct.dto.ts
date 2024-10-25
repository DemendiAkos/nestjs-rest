import { IsDefined, IsNumber, IsString, Min } from "class-validator";

export class ReplaceProductDto {
    @IsDefined({
        message: 'Name is required'
    }) 
    @IsString()
    name: string;

    @IsDefined({
        message: 'Price is required',
    })
    @IsNumber()
    @Min(1, {
        message: 'Price should be greater than 0'
    })
    price: number;

}