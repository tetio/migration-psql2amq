import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm'
import { Country } from './country.entity';

@Entity()
export class City {
    @PrimaryGeneratedColumn() city_id: number
    @Column() city: string

    @OneToOne(type => Country)
    @JoinColumn({name: 'country_id'}) 
    country: Country
    @Column() last_update: Date
}