import dotenv from "dotenv";

dotenv.config();

export const envConfig = {
    DB_HOSt: process.env.DB_HOST,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_DB: process.env.DB_DB,
    DB_PORT: process.env.DB_PORT,
    PORT: 3001,
    TG_API_KEY: process.env.TG_API_KEY

}