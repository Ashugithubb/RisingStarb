import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentTestsService } from './student-tests.service';
import { CreateStudentTestDto } from './dto/create-student-test.dto';
import { UpdateStudentTestDto } from './dto/update-student-test.dto';

@Controller('student-tests')
export class StudentTestsController {
  constructor(private readonly studentTestsService: StudentTestsService) {}

  @Post()
  create(@Body() createStudentTestDto: CreateStudentTestDto) {
    return this.studentTestsService.create(createStudentTestDto);
  }

  @Get()
  findAll() {
    return this.studentTestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentTestsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentTestDto: UpdateStudentTestDto) {
    return this.studentTestsService.update(+id, updateStudentTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentTestsService.remove(+id);
  }
}
