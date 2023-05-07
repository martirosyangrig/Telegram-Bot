// import app from "./app";
import "reflect-metadata";
import { envConfig } from "./config/env";
import { ExpressLoader } from "./app";
import { startTelegramBot } from "./telegram";


const PORT = envConfig.PORT;

const app = new ExpressLoader(PORT);

app.initializeMiddlewares();
startTelegramBot()
app.listen();