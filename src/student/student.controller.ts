import { Body, Controller, Delete, Get, MaxFileSizeValidator, Param, ParseFilePipe, ParseIntPipe, Post, Put, Request, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";

import { CreateStudentDto } from "./dto/create-student.dto";
import { StudentService } from "./student.service";
import { LoginDto } from "./dto/login.dto";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth/jwt-auth.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";


@Controller('student')
export class StudentController {
    constructor(private studentService: StudentService) { }

    @Get('all')
    findAll() {
        return this.studentService.findAll();
    }
    @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Request() req) {
        return this.studentService.findOne(req.user.id);
    }
    @Post('add')
    create(@Body() dto: CreateStudentDto) {
        console.log('Received:', dto);
        return this.studentService.create(dto);
    }
    @Put(':id')
    update(@Param('id') id, @Body() updateDto: Partial<CreateStudentDto>) {
        return this.studentService.update(Number(id), updateDto);
    }
    @Delete(':id')
    delete(@Param('id') id) {
        return this.studentService.delete(Number(id));
    }


    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './files',
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
                callback(null, `${file.fieldname}-${uniqueSuffix}-${extname(file.originalname)}`)
            }
        })
    }))
    async uploadProfileImage(@UploadedFile(new ParseFilePipe({
        fileIsRequired: true,
        validators: [new MaxFileSizeValidator({ maxSize: 1000000 }),]
    })) file: Express.Multer.File) {
        return this.studentService.uploadProfileImage(file);
    }
}