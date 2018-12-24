import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Customer } from "./customer.entity";
import { Inventory } from "./inventory.entity";

@Entity()
export class Rental {
    @PrimaryGeneratedColumn()
    rental_id: number
    @OneToOne(type => Inventory)
    @JoinColumn({name: 'inventory_id'})
    inventory: Inventory
    @Column()
    rental_date: Date
    @OneToOne(type => Customer)
    @JoinColumn({name: 'customer_id'})
    customer: Customer
    @Column()
    return_date: Date
    @Column()
    last_update: Date
}