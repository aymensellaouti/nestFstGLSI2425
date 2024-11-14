import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../../product/entity/product.entity";

@Entity('nutriscore')
export class Nutriscore {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    score: string;


    @OneToMany(
        type => Product,
        product => product.nutriscore
    )
    products: Product[];
}
