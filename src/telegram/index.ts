import TelegramBot, { Message } from "node-telegram-bot-api";
import { envConfig } from "../config/env";
import BluebirdPromise from 'bluebird';

BluebirdPromise.config({
  cancellation: true
});

export const startTelegramBot = async (): Promise<void> => {
  const botToken = envConfig.TG_API_KEY || "";
  const bot = new TelegramBot(botToken, { polling: true });

  bot.onText(/\/start/, (msg: Message) => {
    const chatId = msg.chat.id;
    bot.sendMessage(
      chatId,
      "v"
    );
  });

  bot.onText(/\/new/, (msg: Message) => {
    const chatId = msg.chat.id;
    bot.sendMessage(
      chatId,
      "vvvvv"
    );
    // const chatId = msg.chat.id;
    // try {
    //   const joke = await JokesService.getOneRandom();

    //   if (joke) {
    //     bot.sendMessage(chatId, joke.content);
    //   } else {
    //     bot.sendMessage(chatId, "No jokes found!");
    //   }
    // } catch (error) {
    //   console.error("Failed to retrieve a joke:", error);
    //   bot.sendMessage(
    //     chatId,
    //     "Failed to retrieve a joke. Please try again later."
    //   );
    // }
  });

  bot.onText(/(.+)/, (msg: Message) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `I'm sorry, I don't understand "lil". Please use valid commands.`);
  });

};
