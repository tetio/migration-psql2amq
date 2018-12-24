import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Country {
    @PrimaryGeneratedColumn() country_id: number
    @Column() country: string
    @Column() last_update: Date
}