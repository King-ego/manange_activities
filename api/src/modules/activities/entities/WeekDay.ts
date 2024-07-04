import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne, OneToMany,
} from "typeorm";
import Users from "@modules/users/entities/Users";
import Schedules from "@modules/activities/entities/Schedules";

@Entity("week_days")
class WeekDay {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    day: string;

    @Column()
    user_id: string;

    @ManyToOne(() => Users, user => user.weekDay)
    @JoinColumn({name: "user_id"})
    user: Users;

    @OneToMany(() => Schedules, schedule => schedule.weekDay)
    schedules: Schedules[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default WeekDay;