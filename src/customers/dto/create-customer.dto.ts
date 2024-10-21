import { IsEmail, IsString, Matches } from "class-validator";

export class CreateCustomerDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;
}
