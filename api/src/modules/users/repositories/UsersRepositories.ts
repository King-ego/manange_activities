import IUsersRepository from "@modules/users/interfaces/respositories/IUsersRepository";
import Users from "@modules/users/entities/Users";

class UsersRepositories implements IUsersRepository {
    index(): Promise<Users[]> {
        throw new Error("Method not implemented.");
    }
}

export default UsersRepositories;