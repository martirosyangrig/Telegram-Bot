import { MigrationInterface, QueryRunner } from "typeorm";

export class JokesTable1683479197144 implements MigrationInterface {
    name = 'JokesTable1683479197144'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "jokes" ("id" SERIAL NOT NULL, "content" character varying NOT NULL, CONSTRAINT "PK_ce9a1729216a79f4abd1e3774dd" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "jokes"`);
    }

}
