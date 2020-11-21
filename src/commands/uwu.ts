import TelegramBot, { Message } from "node-telegram-bot-api"
import { BotCommand } from "../interfaces/bot-command"

const uwu: BotCommand = {
  name: "uwu",
  regex: /^.*u+[ ]*w+[ ]*u+.*$/i,
  exec: (bot: TelegramBot, message: Message) => {
    bot.sendDocument(message.chat.id, "https://media.tenor.com/images/da03e7732c014219614dd7c03674f468/tenor.gif");
  }
};

export { uwu };