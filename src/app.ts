import bodyParser from "body-parser";
import express from "express";
import "reflect-metadata";
import cors from "cors";
import Index from "./routes/index"
import { AppDataSource } from "./config/postgres";

export class ExpressLoader {
  public app: express.Application;
  public port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
  }

  initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cors({ origin: "*" }));
    this.app.use('/', Index)
;  }

  listen() {
    try {
      this.app.listen(this.port, async () => {
        await AppDataSource.initialize();
        console.log(`App listening on port ${this.port}`);
      });
    } catch (error) {
      console.log(error);
    }
  }
}
