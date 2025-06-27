import { StudentFees } from "src/fees/entities/fee.entity";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Url } from "url";
import * as bcrypt from 'bcrypt';
import { StudentTest } from "src/student-tests/entities/student-test.entity";

@Entity('student')
export class Students {
  @PrimaryColumn()
  Regid: number; 

  @Column({ nullable: false })
  Name: string;

  @Column({ nullable: false })
  Class: string;

  @Column({ nullable: false })
  School: string;

  @Column({ length: 10, unique: true })
  PhoneNo: string;

  @Column({ nullable: false })
  Father_Name: string;

  @Column({ length: 10 })
  ParentNo: string;

  @Column({ type: 'text' })
  Address: string;

  @Column({ nullable: false, select: false })
  password: string;  // hide from normal queries

  @Column({ nullable: true })
  avatar: string; 
  
  @CreateDateColumn()
  createdAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
  }
  @OneToOne(() => StudentFees, (s) => s.students, { cascade: true })
  studentfees: StudentFees;

  @OneToMany(()=>StudentTest,(t)=>t.student)
  tests:StudentTest[]
}
