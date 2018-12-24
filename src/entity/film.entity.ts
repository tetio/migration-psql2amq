import { PrimaryGeneratedColumn, OneToOne, Column, Entity } from "typeorm";

@Entity()
export class Film {
    @PrimaryGeneratedColumn()
    film_id: number
    @Column()
    title: string
    @Column()
    description: string
    @Column()
    release_year: number

// TODO pending to add some fields

    @Column()
    last_update: Date
}