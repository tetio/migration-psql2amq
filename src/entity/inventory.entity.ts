import { PrimaryGeneratedColumn, OneToOne, JoinColumn, Column, Entity } from "typeorm";
import { Film } from "./film.entity";

@Entity()
export class Inventory {
    @PrimaryGeneratedColumn()
    inventory_id: number
    @OneToOne(type => Film)
    @JoinColumn({ name: 'film_id' })
    film: Film
    @Column()
    last_update: Date
}