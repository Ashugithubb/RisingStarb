import { IsInt, IsString } from "class-validator";

export class LoginDto {
    @IsInt()
    Regid: number;
    @IsString()
    password: string;
}