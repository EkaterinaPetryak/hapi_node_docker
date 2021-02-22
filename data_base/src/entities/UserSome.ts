import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('user_some')
export class UserSome {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}
