import { help } from '../commands/help'
import { BotCommand } from '../interfaces/bot-command';
import { owo } from '../commands/owo'
import { uwu } from '../commands/uwu'
import { no } from '../commands/no'
import { si } from '../commands/si'

const commandList: BotCommand[] = [help, owo, uwu, no, si];

export { commandList };
