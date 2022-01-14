import { Router } from "express";
import { IUserRepository } from "./repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./useCases/createUser/CreateUserDTO";
import { CreateUserCase } from "./useCases/createUser/CreateUserUseCase";

const router = Router();

router.post("/users", (req, res) => {
    
    const {name, email, password} = req.body;
    const data: ICreateUserRequestDTO = {
        name,
        email,
        password
    }
    const user = new CreateUserCase(data)
    
    
    
    return res.status(201).send();  
})

export {router};