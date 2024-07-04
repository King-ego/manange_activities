import {inject, injectable} from "tsyringe";
import IUsersRepository from "@modules/users/interfaces/respositories/users/IUsersRepository";
import Users from "@modules/users/entities/Users";

interface IRequest {
    name: string;
    email: string;
    password: string;
}

@injectable()
class CreateUsersServices {
    constructor(
        @inject("UsersRepositories")
        private usersRepository: IUsersRepository
    ) {
    }

    public async execute({password, email, name}: IRequest): Promise<Users> {
        return this.usersRepository.create({
          email,
          name,
          password
        })
    }
}

export default CreateUsersServices;