import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from 'src/student/dto/login.dto';
import { StudentService } from 'src/student/student.service';
import { compare } from 'bcrypt';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthJwtPayload } from './types/auth.jwtPayload';
import { Response } from 'express';

@Injectable()
export class AuthService {
    constructor(private studentService: StudentService,
        private jwtService: JwtService
    ) { }
    async validateUser(dto: LoginDto) {
        const student = await this.studentService.findOne(dto.Regid, true);
        if (!student) throw new UnauthorizedException('User not found')



        const isPasswordMatch = await compare(dto.password, student.password)
        if (!isPasswordMatch) throw new UnauthorizedException("Invalid credential");
        return { Regid :  student.Regid };
    }

    login(regid: number,res:Response) {
        const payload: AuthJwtPayload = { sub: regid };
        // return {
        //     access_token: this.jwtService.sign(payload),
        // };
         const token = this.jwtService.sign(payload);

    // 👇 Set token as HttpOnly cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: false, // ✅ Set to true in production with HTTPS
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    // return { message: 'Login successful' };
    return res.send({ message: 'Login successful' });
  }

    }


