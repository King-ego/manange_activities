import { Repository } from "typeorm";

import IUsersRepository from "@modules/users/interfaces/respositories/users/IUsersRepository";
import Users from "@modules/users/entities/Users";
import AppDataSource from "@shared/AppDataSource";
import CreateUserDTO from "@modules/users/interfaces/dto/users/CreateUserDTO";

class UsersRepositories implements IUsersRepository {
    private ormRepository: Repository<Users>;
    constructor() {
        this.ormRepository = AppDataSource.getRepository(Users);
    }
    index(): Promise<Users[]> {
        const sqlQuery = `
            SELECT *,
            (
                SELECT 
                    jsonb_agg(
                        jsonb_build_object(
                            'id', wd.id,
                            'day', wd.day,
                            'day_week', (
                                ARRAY['SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SÁBADO', 'DOMINGO']
                                )[EXTRACT(DOW FROM wd.day)::int],
                            'schedules', (
                                SELECT 
                                    jsonb_agg(
                                        jsonb_build_object(
                                            'id', s.id,
                                            'expected_start', s.expected_start,
                                            'expected_end', s.expected_end
                                        )
                                    ) 
                                FROM schedules s
                                WHERE wd.id = s.week_day_id
                            )
                        )
                    )
                    FROM week_days wd
                    WHERE wd.user_id = u.id
                ) as week_days
            FROM users u           
            LEFT JOIN week_days wd ON wd.user_id = u.id
        `;
        return this.ormRepository.query(sqlQuery);

        /*return this.ormRepository.find({relations: ["weekDay"]});*/
    }

    create({name, email, password}: CreateUserDTO): Promise<Users> {
        const sqlQuery = `
            INSERT INTO users (name, email, password)
            VALUES ($1, $2, $3)
            RETURNING *
        `;

        return this.ormRepository.query(sqlQuery, [name, email, password]);

    }

    update(user: Users): Promise<Users> {
        const sqlQuery = `
            UPDATE users
            SET name = $1, email = $2, password = $3
            WHERE id = $4
            RETURNING *
        `;

        return this.ormRepository.query(sqlQuery, [user.name, user.email, user.password, user.id]);
    }
}

export default UsersRepositories;