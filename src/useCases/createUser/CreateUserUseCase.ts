import { User } from "../../models/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from './CreateUserDTO';


export class CreateUserCase{
    constructor(
        private userRepository: IUserRepository,
        private mailProvider: IMailProvider,
    ){}
    
    
    async execute(data: ICreateUserRequestDTO){
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);

        if (userAlreadyExists){
            throw new Error('user already exists.');
        }
        const user = new User(data);

        await this.userRepository.save(user);

        this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: 'equipe digao',
                email: 'digao@gmail'
            },
            subject: 'welcome to digao',
            body: 'agr ta cadastrado hein meu cria'
        })
    }

}