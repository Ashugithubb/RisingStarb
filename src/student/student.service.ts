import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Students } from "./entities/student.entity";
import { CreateStudentDto } from "./dto/create-student.dto";

@Injectable()
export class StudentService{
    constructor(@InjectRepository(Students) private studentRepo:Repository<Students>){}
    async findOne(Regid:number){
        const found=  await this.studentRepo.findOne({
            where:{
                Regid,
            }
        })
        if(!found){
            throw new NotFoundException();
        }
        return found;
    }
    async findAll(){   //Promise<Student[]>
         return await this.studentRepo.find();
    }

    async create(dto:CreateStudentDto){
       return await this.studentRepo.save(dto);
    }

    async update(id:number,updateDto:Partial<CreateStudentDto>){
        const result = await this.studentRepo.update(id, updateDto);
    
    if (result.affected === 0) {
        throw new NotFoundException(`Student with ID ${id} not found`);
    }

    return "updated";
    }

    async delete(id:number){
        return this.studentRepo.delete(id);
    }
}