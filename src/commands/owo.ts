import { BotCommand } from "../interfaces/bot-command"
import { GifReactionFactory } from "../models/gif-reaction-factory";

const owo: BotCommand = GifReactionFactory.create(
  "owo",  /^.*o+[ ]*w+[ ]*o+.*$/i, "https://media1.tenor.com/images/f5bc4d03d3c78d585508945daead8a7e/tenor.gif"
);

export { owo };