import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from 'dbConfig';
import { StudentModule } from './register/register.module';
import { AuthModule } from './auth/auth.module';
import { StudentModule } from './student/student.module';
import { FeesModule } from './fees/fees.module';
import { TestTableModule } from './test-table/test-table.module';
import { QuestionsModule } from './questions/questions.module';
import { StudentTestsModule } from './student-tests/student-tests.module';
import { AnswersModule } from './answers/answers.module';
import { QuestionsModule } from './questions/questions.module';


@Module({
  imports: [TypeOrmModule.forRoot(pgConfig),StudentModule, AuthModule, FeesModule, TestTableModule, QuestionsModule, AnswersModule, StudentTestsModule],
})
export class AppModule {}
