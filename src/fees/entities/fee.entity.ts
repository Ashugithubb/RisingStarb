import { Students } from "src/student/entities/student.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class StudentFees{
    @PrimaryGeneratedColumn()
    feeId:number
    
    @Column()
    Regid:number;

    @Column()
    Month:string;

    @Column()
    Fees:number

    @Column()
    DueDate:Date

    @Column()
    paid:number

    @Column()
    Pending:number

    @Column()
    PaymentDate:Date

    @OneToOne(()=>Students, (s)=>s.studentfees)
    @JoinColumn({ name: 'Regid' })
    students:Students
}