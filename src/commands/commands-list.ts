import { awa } from '../commands/awa'
import { ewe } from '../commands/ewe'
import { help } from '../commands/help'
import { iwi } from '../commands/iwi'
import { no } from '../commands/no'
import { owo } from '../commands/owo'
import { uwu } from '../commands/uwu'
import { si } from '../commands/si'
import { BotCommand } from '../interfaces/bot-command';

const commandList: BotCommand[] = [awa, ewe, help, iwi,no, owo, uwu, si];

export { commandList };
