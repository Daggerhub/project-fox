import { PixelCanvasInterface } from './types';

class PixelCanvas implements PixelCanvasInterface {
  canvas: HTMLCanvasElement;

  ctx: CanvasRenderingContext2D;

  constructor(height: number, width: number) {
    this.canvas = document.createElement('canvas');
    this.canvas.height = height;
    this.canvas.width = width;
    this.canvas.setAttribute('style', 'position: absolute; top: 0; left: 0');

    const ctx = this.canvas.getContext('2d');

    if (ctx) {
      this.ctx = ctx;
    } else {
      throw Error('getContext returned null');
    }
  }
}

export { PixelCanvas };
