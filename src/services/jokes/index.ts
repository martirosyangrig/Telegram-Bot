import { Jokes } from "../../entity/Jokes";
import { jokesRepository } from "../../repository";

export class JokesService {
    static async createJoke (content: string): Promise<Jokes> {
        const joke: Jokes = jokesRepository.create({content});
        await jokesRepository.save(joke);

        return joke;
    }

    static async getOneRandom () {
        const randomJoke: Jokes | null = await jokesRepository.findOneBy({id: 0})

        return randomJoke;
    }
}