import * as nodemailer from 'nodemailer';
import { Injectable } from '@nestjs/common';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

@Injectable()
export class MailService {
	private transporter: nodemailer.Transporter;
	constructor(
	) {
		this.transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: process.env.SMTP_PORT,
			secure: false,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASSWORD
			}
		} as SMTPTransport.Options);
	}

	async sendActivationMail(reciever: string, link: string) {
		await this.transporter.sendMail({
			from: process.env.SMTP_USER,
			to: reciever,
			subject: 'Account activation ' + process.env.API_URL,
			text: '',
			html:
				`
             <div>
                <h1>Please follow the link to activate your account </h1>
                <a href="${link}">${link}</a>
             </div>
            `
		});
	}

}
