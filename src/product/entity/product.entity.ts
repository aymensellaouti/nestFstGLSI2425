import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TimeStampEntity } from "../../common/db utilitaires/timestamp.entity";

@Entity('product')
export class Product extends TimeStampEntity {
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