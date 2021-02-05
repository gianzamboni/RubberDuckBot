import { BotCommand } from "../interfaces/bot-command"
import { GifReactionFactory } from "../models/gif-reaction-factory";

const no: BotCommand = GifReactionFactory.create(
  "no",  /^.*no\..*$/i, "https://media0.giphy.com/media/W2zOnQonnYsNXnUxXo/giphy.gif"
);

export { no };