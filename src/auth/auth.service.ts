import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { RegisterDto } from './dto/register-dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { v4 } from 'uuid';
import { MailService } from './mail.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
	constructor(
		private prisma: PrismaService,
		private jwt: JwtService,
		private mail: MailService
	) { }

	async findUser(email: string) {
		return this.prisma.user.findUnique({
			where: {
				email
			}
		});
	}

	async register(dto: RegisterDto) {
		const isEmailTaken = await this.findUser(dto.email);

		if (isEmailTaken) throw new BadRequestException('Email is already taken.');

		const payload = { name: dto.name, email: dto.email };
		const accessToken = await this.jwt.signAsync(payload, { expiresIn: '5m' });
		dto.password = await bcrypt.hash(dto.password, 4);
		const activationLink = v4();

		const user = await this.prisma.user.create({ data: { ...dto, accessToken, utilityCode: activationLink } });

		await this.mail.sendActivationMail(user.email, `${process.env.API_URL}/api/auth/activate/${activationLink}`);
		return {
			...user
		}
	}

	async login(dto: AuthDto) {
		const isEmailRegistered = await this.findUser(dto.email);
		if (!isEmailRegistered) throw new BadRequestException('Email is not registered');

		const passMatch = await bcrypt.compare(dto.password, isEmailRegistered.password);
		if (!passMatch) throw new BadRequestException('Invalid password');

		const payload = { name: isEmailRegistered.name, email: isEmailRegistered.email };
		const accessToken = await this.jwt.signAsync(payload, { expiresIn: '5m' });

		await this.prisma.user.update({
			where: {
				email: dto.email,
			},
			data: {
				accessToken
			}
		});

		return { accessToken };
	}
}
