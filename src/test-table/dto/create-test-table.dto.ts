import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsInt,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class CreateTestDto {
  @IsString()
  @IsNotEmpty()
  Title: string;

  @IsString()
  @IsNotEmpty()
  Subject: string;

  @IsString()
  @IsOptional()
  Instructions?: string;

  @IsDateString()
  Expiry: string; // ISO format like "2025-06-26T12:00:00Z"

  @IsString()
  @IsNotEmpty()
  Duration: string; // "HH:MM:SS" (e.g. "01:30:00")

  @IsInt()
  TotalMarks: number;

  @IsBoolean()
  IsPublished: boolean;

  @IsBoolean()
  IsActive: boolean;

  @IsDateString()
  @IsOptional()
  StartTime?: string; // Optional start date and time

  @IsInt()
  MaxAttempts: number;
}
