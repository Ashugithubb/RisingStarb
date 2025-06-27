import { Injectable } from '@nestjs/common';
import { CreateTestTableDto } from './dto/create-test-table.dto';
import { UpdateTestTableDto } from './dto/update-test-table.dto';

@Injectable()
export class TestTableService {
  create(createTestTableDto: CreateTestTableDto) {
    return 'This action adds a new testTable';
  }

  findAll() {
    return `This action returns all testTable`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testTable`;
  }

  update(id: number, updateTestTableDto: UpdateTestTableDto) {
    return `This action updates a #${id} testTable`;
  }

  remove(id: number) {
    return `This action removes a #${id} testTable`;
  }
}
