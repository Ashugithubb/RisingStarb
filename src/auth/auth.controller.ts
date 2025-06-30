import { Controller, HttpCode, HttpStatus, Post, Request, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { ok } from 'assert';
import { Response } from 'express';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService,
    ){}
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request()  req, @Res() res: Response){
        
        // const token = await this.authService.login(req.user.Regid,res);
        // return {id:req.user.Regid,token};
        return await this.authService.login(req.user.Regid,res);
    }
}
