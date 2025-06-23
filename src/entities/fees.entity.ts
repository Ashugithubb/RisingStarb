import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Students } from "./student.entity";

@Entity()
export class StudentFees{
    @PrimaryColumn()
    Regid:number;

    @Column()
    Month:string;

    @Column()
    Fees:number

    @Column()
    paid:number

    @Column()
    Pending:number

    @OneToOne(()=>Students, (s)=>s.studentfees)
    @JoinColumn({ name: 'Regid' })
    students:Students
}