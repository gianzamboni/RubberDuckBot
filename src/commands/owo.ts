import TelegramBot, { Message } from "node-telegram-bot-api"
import { BotCommand } from "../interfaces/bot-command"

const owo: BotCommand = {
  name: "owo",
  regex: /^.*o+[ ]*w+[ ]*o+.*$/i,
  exec: (bot: TelegramBot, message: Message) => {
    bot.sendDocument(message.chat.id, "https://media1.tenor.com/images/f5bc4d03d3c78d585508945daead8a7e/tenor.gif");
  }
};

export { owo };