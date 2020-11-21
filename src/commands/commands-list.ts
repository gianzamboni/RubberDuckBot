import { help } from '../commands/help'
import { BotCommand } from '../interfaces/bot-command';
import { owo } from '../commands/owo'
import { uwu } from '../commands/uwu'

const commandList: BotCommand[] = [help, owo, uwu];

export { commandList };
