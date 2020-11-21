import TelegramBot, { Message } from "node-telegram-bot-api"
import { BotCommand } from "../interfaces/bot-command"

const help: BotCommand = {
  name: "help",
  regex: /^\/help$/,
  exec: (bot: TelegramBot, message: Message) => {
    bot.sendMessage(message.chat.id, `cada vez que pongas "uwu" o "owo" en algun mensaje te voy a devolver mis gifs favoritos.`);
  }
};

export { help };