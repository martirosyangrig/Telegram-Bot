import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Jokes {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    content: string
}