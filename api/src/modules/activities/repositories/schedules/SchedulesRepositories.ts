import { Repository } from "typeorm";
import ISchedulesRepository from "@modules/activities/interfaces/repositories/schedules/ISchedulesRepository";
import ICreateSchedulesDTO from "@modules/activities/interfaces/dto/schedules/ICreateSchedulesDTO";
import Schedules from "@modules/activities/entities/Schedules";
import AppDataSource from "@shared/AppDataSource";

class SchedulesRepositories implements ISchedulesRepository {
    private ormRepository: Repository<Schedules>;

    constructor() {
        this.ormRepository = AppDataSource.getRepository(Schedules);
    }

    create({ expected_start, expected_end, week_day_id }: ICreateSchedulesDTO): Promise<Schedules> {
        const textQuery = `
            INSERT INTO schedules (expected_start, expected_end, week_day_id)
            VALUES ($1, $2, $3)
            RETURNING *
        `;

        const params = [expected_start, expected_end, week_day_id];

        return this.ormRepository.query(textQuery, params);
    }
}

export default SchedulesRepositories;