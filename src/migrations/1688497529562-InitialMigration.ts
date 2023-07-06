import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1688497529562 implements MigrationInterface {
    name = 'InitialMigration1688497529562'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updateddAt" TO "updatedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updatedAt" TO "updateddAt"`);
    }

}
