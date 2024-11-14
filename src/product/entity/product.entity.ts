import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TimeStampEntity } from "../../common/db utilitaires/timestamp.entity";
import { Nutriscore } from "../../nutriscore/entities/nutriscore.entity";
import { Ingredient } from "../../ingredient/entities/ingredient.entity";
import { Type } from "class-transformer";

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
    @ManyToOne(
        type => Nutriscore,
        nutriscore => nutriscore.products,
        {
            eager: true
        }
    )
    nutriscore: Nutriscore;

    @ManyToMany(
        type => Ingredient
    )
    @JoinTable({
        name: 'product_ingredients',
        inverseJoinColumn: {
            name: 'ingredient',
            referencedColumnName: 'id'
        },
        joinColumn: {
            name: 'product',
            referencedColumnName: 'id'
        }
    })
    @Type(() => Ingredient)
    ingredients: Ingredient[];
}