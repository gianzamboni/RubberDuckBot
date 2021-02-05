import { BotCommand } from "../interfaces/bot-command"
import { GifReactionFactory } from "../models/gif-reaction-factory"

const ewe: BotCommand = GifReactionFactory.create(
  "ewe",
  /^.*e+[ ]*w+[ ]*e+.*$/i,
  "https://media1.tenor.com/images/fccd309c70e59df9fe27bd81b6429eb1/tenor.gif?itemid=12689104"
);

export { ewe };