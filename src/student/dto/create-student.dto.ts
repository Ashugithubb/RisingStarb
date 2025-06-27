import { Transform } from 'class-transformer';
import {
    IsString,
    IsNotEmpty,
    IsOptional,
    IsPhoneNumber,
    Length,
    IsNumber,
    IsUrl,
} from 'class-validator';
export class CreateStudentDto {
    @IsNumber()
    Regid: number;

    @IsString()
    @IsNotEmpty()
    Name: string;

    @Transform(({ value }) => value.toString())
    @IsString()
    @IsNotEmpty()
    Class: string;

    @IsString()
    @IsNotEmpty()
    School: string;

    @IsString()
    @Length(10, 10)
    PhoneNo: string;

    @IsString()
    @IsNotEmpty()
    Father_Name: string;

    @IsString()
    @Length(10, 10)
    ParentNo: string;

    @IsString()
    @IsNotEmpty()
    Address: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsOptional()
    @IsUrl()
    avatar?: string;
}
