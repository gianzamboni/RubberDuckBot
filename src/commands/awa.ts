import TelegramBot, { Message } from "node-telegram-bot-api"
import { BotCommand } from "../interfaces/bot-command"

const awa: BotCommand = {
  name: "awa",
  regex: /^.*a+[ ]*w+[ ]*a+.*$/i,
  exec: (bot: TelegramBot, message: Message) => {
    bot.sendDocument(message.chat.id, "https://i.imgur.com/V2h0XIV.gif");
  }
};

export { awa };