import { container } from "tsyringe";
import IUsersRepository from "@modules/users/interfaces/respositories/IUsersRepository";
import UsersRepositories from "@modules/users/repositories/UsersRepositories";

container.registerSingleton<IUsersRepository>(
    "UsersRepositories",
    UsersRepositories
)