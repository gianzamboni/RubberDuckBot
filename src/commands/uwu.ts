import { BotCommand } from "../interfaces/bot-command"
import { GifReactionFactory } from "../models/gif-reaction-factory";

const uwu: BotCommand = GifReactionFactory.create(
  "uwu",  /^.*u+[ ]*w+[ ]*u+.*$/i, "https://media.tenor.com/images/da03e7732c014219614dd7c03674f468/tenor.gif"
);

export { uwu };