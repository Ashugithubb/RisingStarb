import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import {
  IsEnum,
  IsInt,
} from 'class-validator';
import { Students } from 'src/student/entities/student.entity';
import { TestTable } from 'src/test-table/entities/test-table.entity';

// Define enum for status
export enum SubmissionStatus {
  SUBMITTED = 'SUBMITTED',
  PENDING = 'PENDING',
  CANCELLED = 'CANCELLED',
}

@Entity()
export class StudentTest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsInt()
  obtainedMarks: number;

  @CreateDateColumn()
  SubmitedAt: Date;

  @Column({ type: 'time' }) // Or 'interval' if using PostgreSQL
  TimeTaken: string;

  @Column({ type: 'enum', enum: SubmissionStatus })
  @IsEnum(SubmissionStatus)
  Status: SubmissionStatus;

  @ManyToOne(() => Students, (s) => s.tests, { onDelete: 'CASCADE' })
  student: Students;

  @ManyToOne(()=>TestTable,(t)=>t.result)
  tests:TestTable
}
