import {inject, injectable} from "tsyringe";
import IUsersRepository from "@modules/users/interfaces/respositories/IUsersRepository";
import Users from "@modules/users/entities/Users";

@injectable()
class ListUsersServices {
    constructor(
        @inject("UsersRepositories")
        private usersRepository: IUsersRepository
    ) {
    }

    public async execute(): Promise<Users[]> {
        return this.usersRepository.index();
    }
}

export default ListUsersServices;