import { Response, Request } from "express";
import { container } from "tsyringe";
import ListUsersServices from "@modules/users/services/ListUsersServices";
import CreateUsersServices from "@modules/users/services/CreateUsersServices";

export default class UsersController {
    public async index(_: Request, response: Response): Promise<Response>{
        const usersRepository = container.resolve(ListUsersServices);
        const users = await usersRepository.execute()
        return response.json(users);
    }

    public async create(request: Request, response: Response): Promise<Response>{
        const {name, email, password} = request.body;
        const createUser = container.resolve(CreateUsersServices);
        const user = await createUser.execute({name, email, password});
        return response.json(user);
    }
}