import Mail from "nodemailer/lib/mailer";
import { IMail, IMailProvider } from "../IEmailProvider";
import nodemailer from "nodemailer";

export class MailTrapMailProvider implements IMailProvider {
	private transport: Mail;

	constructor() {
		this.transport = nodemailer.createTransport({
			host: "sandbox.smtp.mailtrap.io",
			port: 2525,
			auth: {
				user: "b5893bc7096277",
				pass: "7bc5ba0e3dd7a7",
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
