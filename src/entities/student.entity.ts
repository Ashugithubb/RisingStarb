import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { StudentFees } from "./fees.entity";

@Entity()
export class Students {
    @PrimaryColumn()
    Regid: number;

    @Column()
    Name: string

    @Column()
    Class: String;

    @Column()
    School: string

    @Column()
    PhoneNo: string;

    @Column()
    Father_Name: string

    @Column()
    Parent_Number: string

    @Column()
    Address: string

    

    @Column({default:"123456"})
    password:string
    // @UpdateDateColumn()
    //@DeleteDateColumn()
    @CreateDateColumn()
    cratedAt :Date
    @OneToOne(()=>StudentFees,(s)=>s.students , {cascade:true})
    // @JoinColumn({ name: 'Regid' })
    studentfees:StudentFees


}