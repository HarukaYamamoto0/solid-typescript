import Mail from "nodemailer/lib/mailer";
import { IMail, IMailProvider } from "../IEmailProvider";
import nodemailer from "nodemailer";

export class MailTrapMailProvider implements IMailProvider {
	private transport: Mail;

	constructor() {
		this.transport = nodemailer.createTransport({
			host: process.env.MAILTRAP_HOST,
			port: process.env.MAILTRAP_PORT,
			auth: {
				user: process.env.MAILTRAP_USER,
				pass: process.env.MAILTRAP_PASS,
			},
		});
	}

	async sendMail(email: IMail): Promise<void> {
		await this.transport.sendMail({
			to: {
				name: email.to.name,
				address: email.to.email,
			},
			from: {
				name: email.from.name,
				address: email.from.email,
			},
			subject: email.subject,
			html: email.body,
		});
	}
}
