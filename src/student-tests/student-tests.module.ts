import { Module } from '@nestjs/common';
import { StudentTestsService } from './student-tests.service';
import { StudentTestsController } from './student-tests.controller';
import { CloudnaryService } from 'src/cloudnary/cloudnary.service';

@Module({
  controllers: [StudentTestsController],
  providers: [StudentTestsService],
})
export class StudentTestsModule {}
