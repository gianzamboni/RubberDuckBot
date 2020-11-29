import { awa } from '../commands/awa'
import { help } from '../commands/help'
import { no } from '../commands/no'
import { owo } from '../commands/owo'
import { uwu } from '../commands/uwu'
import { si } from '../commands/si'
import { BotCommand } from '../interfaces/bot-command';

const commandList: BotCommand[] = [awa, help, no, owo, uwu, si];

export { commandList };
