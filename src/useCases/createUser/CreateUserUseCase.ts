import { User } from "../../models/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from './CreateUserDTO';


export class CreateUserCase{
    constructor(
        private userRepository: IUserRepository
    ){}
    
    
    async execute(data: ICreateUserRequestDTO){
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);

        if (userAlreadyExists){
            throw new Error('user already exists.');
        }
        const user = new User(data);

        await this.userRepository.save(user);

    }

}