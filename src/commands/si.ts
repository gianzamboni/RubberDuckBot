import { BotCommand } from "../interfaces/bot-command";
import { GifReactionFactory } from '../models/gif-reaction-factory';

const si: BotCommand = GifReactionFactory.create(
  "si",  /^.*si\..*$/i, "https://media1.tenor.com/images/4fa3a2b2ccdb4d629b065ac2b62a86f0/tenor.gif"
);

export { si };