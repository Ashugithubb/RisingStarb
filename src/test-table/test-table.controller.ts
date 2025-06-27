import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestTableService } from './test-table.service';
import { CreateTestDto } from './dto/create-test-table.dto';


@Controller('test-table')
export class TestTableController {
  constructor(private readonly testTableService: TestTableService) {}

  @Post()
  create(@Body() createTestTableDto: CreateTestDto) {
    return this.testTableService.create(createTestTableDto);
  }

  @Get()
  findAll() {
    return this.testTableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testTableService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestTableDto: Partial<CreateTestDto>) {
    return this.testTableService.update(+id, updateTestTableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testTableService.remove(+id);
  }
}
