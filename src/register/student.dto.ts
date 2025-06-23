import { IsInt, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator";

export class Studentdto {
    @IsInt()
    Regid: number;

    @IsString()
    Name: string

    @IsString()
    Class: string;

    @IsString()
    School: string

    @IsPhoneNumber()
    PhoneNo: string;

    @IsString()
    Father_Name: string

    @IsPhoneNumber()
    Parent_Number: string

    @IsString()
    Address: string

    @IsStrongPassword()
    password: string
}