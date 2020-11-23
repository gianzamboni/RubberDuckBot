
import { Application } from "express";
import TelegramBot, { Message } from "node-telegram-bot-api";
import { commandList } from '../commands/commands-list';

export class RubberDuckBot {

  public bot: TelegramBot;
  private token: string;

  constructor(botToken: string, webHookUrl: string | undefined) {
    this.token = botToken;
    if (!webHookUrl) {
      this.bot = new TelegramBot(botToken, { polling: true });
      this.bot.getUpdates({ offset: -1 });
    } else {
      this.bot = new TelegramBot(botToken);
      this.bot.setWebHook(webHookUrl + botToken);
    }

    for (let command of commandList) {
      this.bot.on('message', (message: Message) => {
        if(message.text?.match(command.regex) ||message.caption?.match(command.regex)){
          console.log(`${message.from?.username || message.from?.first_name} requested ${command.name} command`);
          command.exec(this.bot, message);
        }
      });
    }
  }

  public hookUpTo(expressApp: Application) {
    expressApp.post('/' + this.token, (req, res) => {
      this.bot.processUpdate(req.body);
      res.sendStatus(200);
    });
  }
}