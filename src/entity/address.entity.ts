import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'
import { City } from './city.entity'

@Entity()
export class Address {
    @PrimaryGeneratedColumn() address_id: number
    @Column() address: string
    @Column({ nullable: true }) address2: string
    @Column() district: string
    @OneToOne(type => City)
    @JoinColumn({name: 'city_id'})
    city: City
    @Column({ nullable: true }) postal_code: string
    @Column() phone: string
    @Column() last_update: Date
}