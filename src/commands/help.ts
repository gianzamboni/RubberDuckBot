import TelegramBot, { Message } from "node-telegram-bot-api";

import { BotCommand } from "../interfaces/bot-command";

const help: BotCommand = {
  name: "help",
  regex: /^\/help$/,
  exec: (bot: TelegramBot, message: Message) => {
    let helpText = `I will send gifs automatically if I find certain words in your messages. This words are:\n\n`;
    helpText += `"owo", "uwu", "no." and "si." including some of theirs variations`
    
    bot.sendMessage(message.chat.id, helpText);
  }
};

export { help };