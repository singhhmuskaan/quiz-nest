import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm"

export class questions1670500239517 implements MigrationInterface {

    // fk = new TableForeignKey({
    //     columnNames: ["quiz_id"],
    //     referencedColumnNames: ["id"],
    //     referencedTableName: "quizzes",
    //     onDelete: "CASCADE",
    // })
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "questions",
            columns: [
                new TableColumn({
                    name: "id",
                    isGenerated: true,
                    isPrimary: true,
                    type: "integer",
                }),
                new TableColumn({
                    name: "label",
                    type: "varchar",
                    isNullable: false,
                }),
                new TableColumn({
                    name: "quiz_id",
                    type: "integer",
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
        // await queryRunner.createForeignKey(
        //     "questions",
        //     this.fk,
        // )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.dropForeignKey("quizzes", this.fk )
        await queryRunner.dropTable("questions");
    }

}
