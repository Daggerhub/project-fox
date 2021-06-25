import { PixelCanvas } from './pixel-canvas';
import { LayerManager } from './layer-manager';
import { ArtEngineInterface, Command } from './types';
import { CommandParser } from './command-parser';

class ArtEngine implements ArtEngineInterface {
  height = 0;

  width = 0;

  layerManager: LayerManager;

  commandParser: CommandParser;

  root: HTMLElement | null = null;

  constructor(id: string) {
    this.root = document.querySelector(`#${id}`) as HTMLElement;
    if (this.root) {
      this.height = this.root.clientHeight;
      this.width = this.height;

      this.root.style.setProperty('min-width', `${this.height}px`);

      this.layerManager = new LayerManager(this.root);
      this.commandParser = new CommandParser(this.height, this.width);

      this.layerManager.addLayer(new PixelCanvas(this.height, this.width));
    } else {
      throw Error('art engine root element not found');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  execute(command: Command): void {
    console.log(command);
  }
}

export { ArtEngine };