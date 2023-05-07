import { Jokes } from "../../entity/Jokes";
import { jokesRepository } from "../../repository";

export class JokesService {
    static async createJoke (content: string): Promise<Jokes> {
        const joke: Jokes = jokesRepository.create({content});
        await jokesRepository.save(joke);

        return joke;
    }

    static async getOneRandom () {
        const randomJoke: Jokes = await jokesRepository
        .query(`SELECT * FROM jokes ORDER BY RANDOM() LIMIT 1`);

        return randomJoke;
    }
}