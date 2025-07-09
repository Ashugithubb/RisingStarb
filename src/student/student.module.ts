import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { Students } from './entities/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CloudnaryService } from 'src/cloudnary/cloudnary.service';

@Module({
   imports: [TypeOrmModule.forFeature([Students])],
  controllers: [StudentController],
  providers: [StudentService,CloudnaryService],
  exports:[StudentService]
})
export class StudentModule {}
