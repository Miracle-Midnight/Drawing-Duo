import { MigrationInterface, QueryRunner } from "typeorm";

export class ThirdMigration1672769729511 implements MigrationInterface {
    name = 'ThirdMigration1672769729511'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "socketid" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "socketid" SET NOT NULL`);
    }

}
