import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { StudentService } from 'src/student/student.service';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Students } from 'src/student/entities/student.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Students]),
    JwtModule.registerAsync({
  imports: [ConfigModule],
  useFactory: async (config: ConfigService) => {
    const secret = config.get<string>('JWT_SECRET');
  
    return {
      secret,
      signOptions: { expiresIn: config.get<string>('JWT_EXPIRE_IN') || '1d' },
    };
  },
  inject: [ConfigService],
}),

  ],
  controllers: [AuthController],
  providers: [AuthService, StudentService, LocalStrategy,JwtStrategy],
  exports: [JwtModule], 
})
export class AuthModule { }
