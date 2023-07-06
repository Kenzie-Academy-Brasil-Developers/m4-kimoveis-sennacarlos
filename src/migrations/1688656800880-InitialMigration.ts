import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1688656800880 implements MigrationInterface {
    name = 'InitialMigration1688656800880'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "schedules_id_seq" OWNED BY "schedules"."id"`);
        await queryRunner.query(`ALTER TABLE "schedules" ALTER COLUMN "id" SET DEFAULT nextval('"schedules_id_seq"')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "schedules_id_seq"`);
    }

}
