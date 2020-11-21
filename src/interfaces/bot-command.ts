import TelegramBot, { Message } from "node-telegram-bot-api";

export interface BotCommand {
  name: string;
  regex: RegExp;
  exec: (bot: TelegramBot, message: Message) => void;
}