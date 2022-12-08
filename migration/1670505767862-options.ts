import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class options1670505767862 implements MigrationInterface {
  fk = new TableForeignKey({
    columnNames: ['question_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'questions',
    onDelete: 'CASCADE',
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'options',
        columns: [
          new TableColumn({
            name: 'id',
            isGenerated: true,
            isPrimary: true,
            type: 'integer',
            generationStrategy: 'increment',
          }),
          new TableColumn({
            name: 'option',
            type: 'varchar',
            isNullable: false,
          }),
          new TableColumn({
            name: 'is_correct',
            type: 'tinyint',
            default: false,
          }),
          new TableColumn({
            name: 'question_id',
            type: 'integer',
          }),
          new TableColumn({
            name: 'created_at',
            type: 'datetime',
            isNullable: false,
            default: 'CURRENT_TIMESTAMP',
          }),
          new TableColumn({
            name: 'updated_at',
            type: 'datetime',
            isNullable: true,
          }),
        ],
      }),
    );
    await queryRunner.createForeignKey('options', this.fk);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('options', this.fk);
    await queryRunner.dropTable('options');
  }
}
