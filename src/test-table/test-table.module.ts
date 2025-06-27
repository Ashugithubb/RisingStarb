import { Module } from '@nestjs/common';
import { TestTableService } from './test-table.service';
import { TestTableController } from './test-table.controller';

@Module({
  controllers: [TestTableController],
  providers: [TestTableService],
})
export class TestTableModule {}
