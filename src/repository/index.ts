import { AppDataSource } from "../config/postgres"
import { Jokes } from "../entity/Jokes"

export const jokesRepository = AppDataSource.getRepository(Jokes)