import { MigrationInterface, QueryRunner } from "typeorm";

export class NextMigration1672765190440 implements MigrationInterface {
    name = 'NextMigration1672765190440'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "socketid" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "socketid"`);
    }

}
