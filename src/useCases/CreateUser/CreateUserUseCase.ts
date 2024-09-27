import { User } from "../../entities/User";
import type { IMailProvider } from "../../providers/IEmailProvider";
import type { IUserRepository } from "../../repositories/IUserRepository";
import type { ICreateUserDTO } from "./ICreateUserDTO";

export class CreateUserUseCase {
	constructor(
		private usersRepository: IUserRepository,
		private mailProvider: IMailProvider,
	) {}

	async execute(data: ICreateUserDTO) {
		const userAlreadyExists = await this.usersRepository.findByEmail(
			data.email,
		);

		if (userAlreadyExists) throw new Error("User already exists");

		const user = new User(data);
		await this.usersRepository.save(user);

		await this.mailProvider.sendMail({
			to: { name: data.name, email: data.email },
			from: { name: "Haruka Yamamoto", email: "harukayamamotodev@gmail.com" },
			body: "<p>Você ja pode fazer login em nossa plataforma<p/>",
			subject: "Seja bem vindo a plataforma",
		});
	}
}
