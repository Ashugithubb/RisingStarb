import {
  IsNumber,
  IsString,
  IsDateString,
  IsNotEmpty,
  Min,
  Max,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateFeeDto {
  @IsNumber()
  Regid: number; // foreign key to Students.Regid

  @IsString()
  @IsNotEmpty()
  Month: string; // e.g., "June", "2025-06"

  @IsNumber()
  @Min(0)
  Fees: number;

  @IsDateString()
  DueDate: string; // Accepts date in ISO format (e.g., "2025-06-26")

  @IsNumber()
  @Min(0)
  paid: number;

  @IsNumber()
  @Min(0)
  Pending: number;

  @IsDateString()
  PaymentDate: string;
}
