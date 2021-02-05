import { BotCommand } from "../interfaces/bot-command"
import { GifReactionFactory } from "../models/gif-reaction-factory"

const awa: BotCommand = GifReactionFactory.create(
  "awa",
  /^.*a+[ ]*w+[ ]*a+.*$/i, 
  "https://i.imgur.com/V2h0XIV.gif"
);

export { awa };