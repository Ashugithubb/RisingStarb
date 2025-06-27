import { Question } from "src/questions/entities/question.entity";
import { Column, Entity,  JoinColumn,  ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('anwers')
export class Answer {
    @PrimaryGeneratedColumn()
    id:number

    @Column() 
    SelectedAnwers:string

    @Column()
    IsCorrect:boolean  

    @ManyToOne(()=>Question,(q)=>q.ans)
    // @JoinColumn({name:"QuetionId"})
    question : Question
    
}
