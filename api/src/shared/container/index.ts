import { container } from "tsyringe";
import IUsersRepository from "@modules/users/interfaces/respositories/users/IUsersRepository";
import UsersRepositories from "@modules/users/repositories/UsersRepositories";
import ISchedulesRepository from "@modules/activities/interfaces/repositories/schedules/ISchedulesRepository";
import SchedulesRepositories from "@modules/activities/repositories/SchedulesRepositories";

container.registerSingleton<IUsersRepository>(
    "UsersRepositories",
    UsersRepositories
)

container.registerSingleton<ISchedulesRepository>(
    "SchedulesRepositories",
    SchedulesRepositories
)