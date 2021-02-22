import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class UserTwoThreeCopy {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}
