import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm'
import { Country } from './country.entity';

@Entity()
export class City {
    @PrimaryGeneratedColumn({name: 'city_id'}) cityId: number
    @Column() city: string
    @Column({name: 'country_id'}) countryId: number
    @Column() last_update: Date

    @ManyToOne(type => Country)
    @JoinColumn({name: 'country_id'}) 
    country: Country   
}