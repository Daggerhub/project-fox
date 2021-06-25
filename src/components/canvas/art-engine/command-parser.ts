import { Command } from './types';

class CommandParser {
  height: number;

  width: number;

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }

  // eslint-disable-next-line class-methods-use-this
  convert(command: Command): Command {
    return command;
  }
}

export { CommandParser };
