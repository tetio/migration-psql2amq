import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import { City } from './city.entity';

@Entity()
export class Country {
    @PrimaryGeneratedColumn({name: 'country_id'}) countryId: number
    @Column() country: string
    @Column() last_update: Date
    @OneToMany(type => City, city => city.countryId) 
    cities: Array<City>
}