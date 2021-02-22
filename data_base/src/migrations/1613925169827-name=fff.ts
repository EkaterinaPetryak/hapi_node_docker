import {MigrationInterface, QueryRunner} from "typeorm";

export class fff1613925169827 implements MigrationInterface {
    name = 'name=fff1613925169827'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_some" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_50f6f2602487304660fff17ad39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_two" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_ee2f15dcacb5102c6bab2b0043b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_two_three_copy" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_4d188f056cdbf43845d853e67ba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_two_three" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_715b78eef21c29709c0a8d473bc" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_two_three"`);
        await queryRunner.query(`DROP TABLE "user_two_three_copy"`);
        await queryRunner.query(`DROP TABLE "user_two"`);
        await queryRunner.query(`DROP TABLE "user_some"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
