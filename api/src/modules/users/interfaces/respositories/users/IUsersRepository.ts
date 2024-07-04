import Users from "@modules/users/entities/Users";
import CreateUserDTO from "@modules/users/interfaces/dto/users/CreateUserDTO";

export default interface IUsersRepository {
    index(): Promise<Users[]>;
    create(_: CreateUserDTO): Promise<Users>;
}