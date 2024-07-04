import Schedules from "@modules/activities/entities/Schedules";
import ICreateSchedulesDTO from "@modules/activities/interfaces/dto/schedules/ICreateSchedulesDTO";

export default interface ISchedulesRepository {
    create(_: ICreateSchedulesDTO): Promise<Schedules>
}