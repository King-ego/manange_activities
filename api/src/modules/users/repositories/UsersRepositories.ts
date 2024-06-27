import { Repository } from "typeorm";

import IUsersRepository from "@modules/users/interfaces/respositories/IUsersRepository";
import Users from "@modules/users/entities/Users";
import AppDataSource from "@shared/AppDataSource";
import CreateUserDTO from "@modules/users/interfaces/dto/CreateUserDTO";

class UsersRepositories implements IUsersRepository {
    private ormRepository: Repository<Users>;
    constructor() {
        this.ormRepository = AppDataSource.getRepository(Users);
    }
    index(): Promise<Users[]> {
        const sqlQuery = `
            SELECT *
            FROM users u           
        `;
        return this.ormRepository.query(sqlQuery);
    }

    create({name, email, password}: CreateUserDTO): Promise<Users> {
        const sqlQuery = `
            INSERT INTO users (name, email, password)
            VALUES ($1, $2, $3)
            RETURNING *
        `;

        return this.ormRepository.query(sqlQuery, [name, email, password]);

    }
}

export default UsersRepositories;