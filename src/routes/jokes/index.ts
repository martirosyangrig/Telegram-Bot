import { Router } from "express";
import { JokesController } from "../../controllers/jokes/jokes";

const router = Router();

router.post('/create', JokesController.createJoke);

export default router;