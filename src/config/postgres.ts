import { DataSource } from "typeorm";
import { envConfig } from "./env";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: envConfig.DB_HOSt,
    port: +(envConfig.DB_PORT || 5432),
    username: envConfig.DB_NAME,
    password: envConfig.DB_PASSWORD,
    database: envConfig.DB_DB,
    entities: ['dist/src/entity/**/*{.ts,.js}'],
    migrations: ['dist/src/migrations/**/*{.ts,.js}'],
    synchronize: false,
    logging: false,
    ssl: {
        rejectUnauthorized: true
    }
});
