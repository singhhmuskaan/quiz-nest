import { MigrationInterface, QueryRunner } from "typeorm"

export class quizzes1670441901154 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
