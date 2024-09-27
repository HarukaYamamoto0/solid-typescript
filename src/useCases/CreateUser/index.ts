import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const postgresUserRepository = new PostgresUserRepository();
const mailTrapMailProvider = new MailTrapMailProvider();

const createUserCase = new CreateUserUseCase(
	postgresUserRepository,
	mailTrapMailProvider,
);

const createUserController = new CreateUserController(createUserCase);

export { createUserController, createUserCase };
