import { Controller, Post, Body } from '@nestjs/common';
import { OtpService } from './otp.service';
import { MailService } from 'src/mail/mail.service';
@Controller('otp')
export class OtpController {
  constructor(private readonly otpService: OtpService,
    private mailService: MailService
  ) {}
  @Post()
  async sendOtp(
    @Body('phoneNumber') phoneNumber: string,
    @Body('email') email: string,
  ) {
    const result = await this.otpService.sendOtp(phoneNumber, email);
    return { message: 'OTP sent successfully', otp: result.otp };
  }

  @Post('send-otp')
  async sendMailOtp(@Body('email') email: string) {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await this.mailService.sendOtpEmail(email, otp);
    return { message: 'OTP sent', otp }; // Don't send OTP in real app
  }
}