import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Request, UseGuards } from "@nestjs/common";

import { CreateStudentDto } from "./dto/create-student.dto";
import { StudentService } from "./student.service";
import { LoginDto } from "./dto/login.dto";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth/jwt-auth.guard";


@Controller('student')
export class StudentController{
    constructor(private studentService:StudentService){}

    @Get('all')
    findAll(){
        return this.studentService.findAll();
    }
    @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Request() req){
        return this.studentService.findOne(req.user.id);
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