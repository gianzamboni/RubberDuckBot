import { BotCommand } from "../interfaces/bot-command"
import { GifReactionFactory } from "../models/gif-reaction-factory"

const iwi: BotCommand = GifReactionFactory.create(
  "iwi",
  /^.*i+[ ]*w+[ ]*i+.*$/i,
  "https://media1.tenor.com/images/25934fdaaed5854e775526931b900cab/tenor.gif"
);

export { iwi };