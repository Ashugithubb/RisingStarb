import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany,
} from 'typeorm';
import {
    IsString,
    IsDate,
    IsInt,
    IsBoolean,
    IsNotEmpty,
} from 'class-validator';
import { Question } from 'src/questions/entities/question.entity';
import { StudentTest } from 'src/student-tests/entities/student-test.entity';

@Entity('tests')
export class TestTable {
    @PrimaryGeneratedColumn()
    TestId: number;

    @Column()
    @IsString()
    @IsNotEmpty()
    Title: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    Subject: string;

    @Column({ type: 'text', nullable: true })
    @IsString()
    Instructions?: string;
    @CreateDateColumn()
    created_at: Date; // ✅ Auto-filled when test is created

    @Column({ type: 'timestamp' })
    @IsDate()
    Expiry: Date; // ✅ Expiry date and time of the test

    @Column({ type: 'time' })
    Duration: string; // ✅ Duration stored as 'HH:MM:SS'

    @Column()
    @IsInt()
    TotalMarks: number;

    @Column({ default: false })
    @IsBoolean()
    IsPublished: boolean;

    @Column({ default: true })
    @IsBoolean()
    IsActive: boolean;

    @Column({ type: 'timestamp', nullable: true })
    @IsDate()
    StartTime?: Date;

    @Column({ default: 1 })
    @IsInt()
    MaxAttempts: number;


    @OneToMany(()=>Question,(q)=>q.test)
    questions : Question[]

    @OneToMany(()=>StudentTest,(r)=>r.tests)
    result:StudentTest
}
