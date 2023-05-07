import { Request, Response } from "express";
import { JokesService } from "../../services/jokes";
import { Jokes } from "../../entity/Jokes";

export class JokesController {
    static async createJoke (req: Request, res: Response) {
        try {
            const { content } = req.body;
            if (!content) throw new Error('Content not found');
            
            const joke: Jokes = await JokesService.createJoke(content);

            res.status(200).json(joke);
        } catch (error) {
            res.status(400).json({err: `${error}`})
            console.log(error);
        }
    }
}