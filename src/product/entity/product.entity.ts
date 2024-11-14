import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('product')
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({
        length:50
    })
    name: string;
    @Column()
    price: number;
    @Column()
    description: string;
}