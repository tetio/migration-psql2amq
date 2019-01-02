import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'


@Entity()
export class FFCC {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "json", nullable: true })
    config: any;

    @Column({ type: "jsonb", nullable: true })
    data: any;

}