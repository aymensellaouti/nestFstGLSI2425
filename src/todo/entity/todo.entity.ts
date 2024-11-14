import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TodoStatusEnum } from "../todo.model";
import { TimeStampEntity } from "../../common/db utilitaires/timestamp.entity";

@Entity('todo')
export class TodoEntity extends TimeStampEntity {
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
}