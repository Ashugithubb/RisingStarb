import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Students } from "./entities/student.entity";
import { CreateStudentDto } from "./dto/create-student.dto";
import { LoginDto } from "./dto/login.dto";
import { CloudnaryService } from "src/cloudnary/cloudnary.service";

@Injectable()
export class StudentService {
    constructor(@InjectRepository(Students) private studentRepo: Repository<Students>,
                    private readonly cloudService:CloudnaryService  ) { }


    async findOne(Regid: number, withPassword = false) {
        if (withPassword) {
            return await this.studentRepo.findOne({
                where: { Regid },
                select: ['Regid', 'password', 'Name', 'School'],
            });
        }
        return await this.studentRepo.findOne({ where: { Regid } });
    }


    async findAll() {   //Promise<Student[]>
        return await this.studentRepo.find();
    }

    async create(dto: CreateStudentDto) {
        const student = this.studentRepo.create(dto);
        return await this.studentRepo.save(student);
    }


    async update(id: number, updateDto: Partial<CreateStudentDto>) {
        const result = await this.studentRepo.update(id, updateDto);

        if (result.affected === 0) {
            throw new NotFoundException(`Student with ID ${id} not found`);
        }

        return "updated";
    }

    async delete(id: number) {
        return this.studentRepo.delete(id);
    }

    async uploadProfileImage(file: Express.Multer.File){
        return await this.cloudService.uploadFileFromPath(file.path)
    }
    
}