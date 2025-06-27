import {
  IsString,
  IsNotEmpty,
  IsInt,
} from 'class-validator';

export class CreateQuestionDto {
  @IsInt()
  @IsNotEmpty()
  TestId: number;

  @IsString()
  @IsNotEmpty()
  QuetionText: string;

  @IsString()
  @IsNotEmpty()
  OptionA: string;

  @IsString()
  @IsNotEmpty()
  OptionB: string;

  @IsString()
  @IsNotEmpty()
  OptionC: string;

  @IsString()
  @IsNotEmpty()
  OptionD: string;

  @IsString()
  @IsNotEmpty()
  CorrectedAnswers: string;

  @IsInt()
  @IsNotEmpty()
  Marks: number;
}
