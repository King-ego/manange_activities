import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import WeekDay from "@modules/activities/entities/WeekDay";

@Entity("schedules")
class Schedules {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("time")
    expected_start: string;

    @Column("time")
    expected_end: string;

    @Column("uuid")
    week_day_id: string;

    @ManyToOne(() => WeekDay, weekDay => weekDay.schedules)
    @JoinColumn({name: "week_day_id"})
    weekDay: WeekDay;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Schedules;
