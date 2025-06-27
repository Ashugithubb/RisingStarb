import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";

import { CreateStudentDto } from "./dto/create-student.dto";
import { StudentService } from "./student.service";


@Controller('student')
export class StudentController{
    constructor(private studentService:StudentService){}
    @Get('all')
    findAll(){
        return this.studentService.findAll();
    }
    @Get(':id')
    findOne(@Param('id',ParseIntPipe)id){
        return this.studentService.findOne(id);
    }
    @Post('add')
    create(@Body() dto:CreateStudentDto){
        console.log('Received:', dto);
        return this.studentService.create(dto);
    }
    @Put(':id')
    update(@Param('id')id,@Body()updateDto:Partial<CreateStudentDto>){
        return this.studentService.update(Number(id),updateDto);
    }
    @Delete(':id')
    delete(@Param('id') id){
        return this.studentService.delete(Number(id));
    }
}