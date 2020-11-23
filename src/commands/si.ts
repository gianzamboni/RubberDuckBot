import TelegramBot, { Message } from "node-telegram-bot-api"
import { BotCommand } from "../interfaces/bot-command"

const si: BotCommand = {
  name: "si",
  regex: /^.*si\..*$/i,
  exec: (bot: TelegramBot, message: Message) => {
    bot.sendDocument(message.chat.id, "https://media1.tenor.com/images/4fa3a2b2ccdb4d629b065ac2b62a86f0/tenor.gif");
  }
};

export { si };