import { MigrationInterface, QueryRunner } from "typeorm";

export class SixthMigration1672838121569 implements MigrationInterface {
    name = 'SixthMigration1672838121569'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_9a5b6e98e76999b2c6778a30eec"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_9a5b6e98e76999b2c6778a30eec" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_9a5b6e98e76999b2c6778a30eec"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_9a5b6e98e76999b2c6778a30eec" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
