import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('ingredient')
export class Ingredient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    designation: string;
}
