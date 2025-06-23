import { Module } from "@nestjs/common";
import { StudentServices } from "./register.services";
import { StudentController } from "./register.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Students } from "src/entities/student.entity";

@Module({
    imports:[TypeOrmModule.forFeature([Students])],
    providers:[StudentServices],
    controllers:[StudentController]
})
export class StudentModule{}