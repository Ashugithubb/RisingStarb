import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from 'dbConfig';
import { AuthModule } from './auth/auth.module';
import { StudentModule } from './student/student.module';
import { FeesModule } from './fees/fees.module';
import { TestTableModule } from './test-table/test-table.module';
import { QuestionsModule } from './questions/questions.module';
import { StudentTestsModule } from './student-tests/student-tests.module';
import { AnswersModule } from './answers/answers.module';
import { ConfigModule } from '@nestjs/config';
import { OtpService } from './otp/otp.service';
import { OtpController } from './otp/otp.controller';
import { MailService } from './mail/mail.service';
import { MailModule } from './mail/mail.module';
import { CloudnaryService } from './cloudnary/cloudnary.service';



@Module({
  imports: [ ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(pgConfig),StudentModule, AuthModule, FeesModule, 
    TestTableModule, QuestionsModule, AnswersModule, StudentTestsModule,AuthModule, MailModule],
  providers: [OtpService, MailService, CloudnaryService],
  controllers: [OtpController],
})
export class AppModule {}
