import TelegramBot, { Message } from "node-telegram-bot-api"
import { BotCommand } from "../interfaces/bot-command"

export class GifReactionFactory {

  static create(name: string, regex: RegExp, gif: string): BotCommand {
    return {
      name: name,
      regex: regex,
      exec: (bot: TelegramBot, message: Message) => {
        bot.sendDocument(message.chat.id, gif);
      }
    }
  }
  
};
