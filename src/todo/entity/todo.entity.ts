import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TodoStatusEnum } from "../todo.model";

@Entity('todo')
export class TodoEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
    @Column()
    description: string;
    @Column({
        type: 'enum',
        enum: TodoStatusEnum,
        default: TodoStatusEnum.waiting
    })
    status: TodoStatusEnum;
    @CreateDateColumn({name: 'created_at', update: false})
    createdAt: Date;
    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date; 
    @DeleteDateColumn({name: 'deleted_at'})
    deleteddAt: Date;
}