import { Router } from "express";
import { createUserController } from ".";
import { IUserRepository } from "./repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./useCases/createUser/CreateUserDTO";
import { CreateUserCase } from "./useCases/createUser/CreateUserUseCase";

const router = Router();

router.post("/users", (req, res) => {
    return createUserController.handle(req, res);
});

export {router};