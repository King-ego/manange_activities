import { DataSource } from "typeorm";
import "dotenv/config";

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT ? Number(process.env.POSTGRES_PORT) : 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: false,
    logging: true,
    entities: ["./src/modules/**/entities/*.ts"],
    migrations: ["./src/shared/migrations/*.ts"],
})

export default AppDataSource;
