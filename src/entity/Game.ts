import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Game {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    genre: String;

    @Column()
    image: String;

}