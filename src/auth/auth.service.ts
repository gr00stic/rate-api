import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { RegisterDto } from './dto/register-dto';

@Injectable()
export class AuthService {
	constructor(private prisma: PrismaService) { }

	async register(dto: RegisterDto) {
		return this.prisma.user.create({ data: { ...dto } })
	}
}
