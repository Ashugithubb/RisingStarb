import { Module } from '@nestjs/common';
import { StudentTestsService } from './student-tests.service';
import { StudentTestsController } from './student-tests.controller';

@Module({
  controllers: [StudentTestsController],
  providers: [StudentTestsService],
})
export class StudentTestsModule {}
