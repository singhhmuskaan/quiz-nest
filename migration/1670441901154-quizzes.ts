import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm"

export class quizzes1670441901154 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "quizzes",
            columns: [
                new TableColumn({
                    name: "id",
                    isGenerated: true,
                    isPrimary: true,
                    type: "integer",
                }),
                new TableColumn({
                    name: "title",
                    type: "varchar",
                    isNullable: false,
                }),
                new TableColumn({
                    name: "created_at",
                    type: "datetime",
                    isNullable: false,
                }),
                new TableColumn({
                    name: "updated_at",
                    type: "datetime",
                    isNullable: true,
                }),
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
