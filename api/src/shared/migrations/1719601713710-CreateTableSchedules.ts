import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableSchedules1719601713710 implements MigrationInterface {
    name = 'CreateTableSchedules1719601713710'
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "schedules",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()"
                },
                {
                    name: "week_day_id",
                    type: "uuid"
                },
                {
                    name: "expected_start",
                    type: "time"
                },
                {
                    name: "expected_end",
                    type: "time"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }
            ],
            foreignKeys: [
                {
                    name: "fk_week_day_id",
                    columnNames: ["week_day_id"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "week_days",
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("schedules");
    }

}
