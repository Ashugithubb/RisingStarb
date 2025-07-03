// src/mail/mail.service.ts

import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER, // Your email
        pass: process.env.MAIL_PASS, // App password
      },
    });
  }

  async sendOtpEmail(to: string, otp: string) {
    const mailOptions = {
      from: `"Your App" <${process.env.MAIL_USER}>`,
      to,
      subject: 'Your OTP Code',
      html: `<p>Hello, your OTP is <b>${otp}</b>. It is valid for 5 minutes.</p>`,
    };

    return await this.transporter.sendMail(mailOptions);
  }
}
