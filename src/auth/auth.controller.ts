import { Post, Body, Controller } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { RegisterDto } from './dto/register-dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) { }

	@Post('register')
	async register(@Body() dto: RegisterDto) {
		const registered = await this.authService.register(dto);

		return registered;
	}

	@Post('login')
	async login(@Body() dto: AuthDto) {
		const loggedIn = await this.authService.login(dto);

		return loggedIn;
	}
}
