import { MailtrapMailProvider } from "./providers/implementations/MailTrapMailProvider";
import { PostgresUsersRepository } from "./repositories/implementations/PostgresUserRepository";
import { CreateUserController } from "./useCases/createUser/CreateUserController";
import { CreateUserCase } from "./useCases/createUser/CreateUserUseCase";

const postgresUsersRepository = new PostgresUsersRepository();
const mailtrapMailProvider = new MailtrapMailProvider();

const createUserUseCase = new CreateUserCase(
    postgresUsersRepository,
    mailtrapMailProvider,
);

const createUserController = new CreateUserController(
    createUserUseCase
)
export { createUserUseCase, createUserController}