import { Answer } from "src/answers/entities/answer.entity";
import { TestTable } from "src/test-table/entities/test-table.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('questions')
export class Question {
    @PrimaryGeneratedColumn()
    QuestionId: number;

    @Column()
    TestId: number

    @Column()
    QuetionText: string

    @Column()
    OptionA: string

    @Column()
    OptionB: string

    @Column()
    OptionC: string

    @Column()
    OptionD: string

    @Column()
    CorrectedAnswers: string

    @Column()
    Marks: number

    @ManyToOne(() => TestTable, (test) => test.questions, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'TestId' })
    test: TestTable;

    @OneToMany(()=>Answer,(a)=>a.question)
    ans:Answer[]
}
