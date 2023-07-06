import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";
import { RealEstate } from "./RealEstate.entity";

@Entity("schedules")
export class Schedule {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text" })
    date: Date | string;

    @Column({ type: "time" })
    hour: string;

    @ManyToOne(() => User, (user) => user.schedules)
    user: User;

    @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
    realEstate: RealEstate;
};