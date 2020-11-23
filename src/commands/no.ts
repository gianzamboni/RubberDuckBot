import TelegramBot, { Message } from "node-telegram-bot-api"
import { BotCommand } from "../interfaces/bot-command"

const no: BotCommand = {
  name: "no",
  regex: /^.*no\..*$/i,
  exec: (bot: TelegramBot, message: Message) => {
    bot.sendDocument(message.chat.id, "https://media0.giphy.com/media/W2zOnQonnYsNXnUxXo/giphy.gif");
  }
};

export { no };