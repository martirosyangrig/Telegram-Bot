import { Router } from "express";
import JokesRouter from "./jokes/index";

const router = Router();

router.use('/', JokesRouter);

export default router;