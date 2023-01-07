import { MigrationInterface, QueryRunner } from "typeorm";

export class newone1672731635155 implements MigrationInterface {
    name = 'newone1672731635155'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "profile" ("id" SERIAL NOT NULL, "nickname" character varying NOT NULL, "level" integer NOT NULL, "rank" integer NOT NULL, "introduction" text NOT NULL, CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "image" ("id" SERIAL NOT NULL, "type" boolean NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "type" boolean NOT NULL, "userid" character varying NOT NULL, "password" character varying NOT NULL, "ready" boolean NOT NULL DEFAULT false, "profileId" integer, "roomId" integer, "imagesId" integer, CONSTRAINT "REL_9466682df91534dd95e4dbaa61" UNIQUE ("profileId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "room" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "mode" boolean NOT NULL, "status" boolean NOT NULL, "gameId" integer, CONSTRAINT "REL_b6670c42fb2ea4ff502015b0ef" UNIQUE ("gameId"), CONSTRAINT "PK_c6d46db005d623e691b2fbcba23" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "game" ("id" SERIAL NOT NULL, CONSTRAINT "PK_352a30652cd352f552fef73dec5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "room_images_image" ("roomId" integer NOT NULL, "imageId" integer NOT NULL, CONSTRAINT "PK_66574a4ad6fb923fc90e6ec8c22" PRIMARY KEY ("roomId", "imageId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_df34f3624d18a1c7bc707c518a" ON "room_images_image" ("roomId") `);
        await queryRunner.query(`CREATE INDEX "IDX_e37294b1c62c33d54b9ee04f40" ON "room_images_image" ("imageId") `);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_9466682df91534dd95e4dbaa616" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_9a5b6e98e76999b2c6778a30eec" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_8c7de8ca02cb1751afd5d252c0f" FOREIGN KEY ("imagesId") REFERENCES "image"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "room" ADD CONSTRAINT "FK_b6670c42fb2ea4ff502015b0efe" FOREIGN KEY ("gameId") REFERENCES "game"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "room_images_image" ADD CONSTRAINT "FK_df34f3624d18a1c7bc707c518a6" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "room_images_image" ADD CONSTRAINT "FK_e37294b1c62c33d54b9ee04f400" FOREIGN KEY ("imageId") REFERENCES "image"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room_images_image" DROP CONSTRAINT "FK_e37294b1c62c33d54b9ee04f400"`);
        await queryRunner.query(`ALTER TABLE "room_images_image" DROP CONSTRAINT "FK_df34f3624d18a1c7bc707c518a6"`);
        await queryRunner.query(`ALTER TABLE "room" DROP CONSTRAINT "FK_b6670c42fb2ea4ff502015b0efe"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_8c7de8ca02cb1751afd5d252c0f"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_9a5b6e98e76999b2c6778a30eec"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_9466682df91534dd95e4dbaa616"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e37294b1c62c33d54b9ee04f40"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_df34f3624d18a1c7bc707c518a"`);
        await queryRunner.query(`DROP TABLE "room_images_image"`);
        await queryRunner.query(`DROP TABLE "game"`);
        await queryRunner.query(`DROP TABLE "room"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "image"`);
        await queryRunner.query(`DROP TABLE "profile"`);
    }

}
