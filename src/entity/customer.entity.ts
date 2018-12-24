import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'
import { Address } from './address.entity'

@Entity()
export class Customer {
    @PrimaryGeneratedColumn() customer_id: number
    @Column() store_id: number
    @Column() first_name: string
    @Column() last_name: string
    @Column() email: string
    //@Column() address_id: number
    @OneToOne(type => Address)
    @JoinColumn({name: 'address_id'})
    address: Address
    @Column() create_date: Date
    @Column() last_update: Date
    @Column() activebool: boolean
    @Column() active: number
}