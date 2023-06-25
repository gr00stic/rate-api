import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/database/prisma.module';
import { MailService } from './mail.service';

@Module({
  imports: [PrismaModule],
  controllers: [AuthController],
  providers: [AuthService, MailService]
})
export class AuthModule { }
