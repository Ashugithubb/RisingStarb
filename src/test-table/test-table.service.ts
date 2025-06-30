import { Injectable } from '@nestjs/common';
import { CreateTestDto} from './dto/create-test-table.dto';


@Injectable()
export class TestTableService {
  create(createTestTableDto: CreateTestDto) {
    return 'This action adds a new testTable';
  }

  findAll() {
    return `This action returns all testTable`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testTable`;
  }

  update(id: number, updateTestTableDto: Partial<CreateTestDto>) {
    return `This action updates a #${id} testTable`;
  }

  remove(id: number) {
    return `This action removes a #${id} testTable`;
  }
}
