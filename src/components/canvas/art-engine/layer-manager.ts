import { PixelCanvas } from './pixel-canvas';

class LayerManager {
  root: HTMLElement;

  layerBuffer: PixelCanvas[] = [];

  constructor(root: HTMLElement) {
    this.root = root;
  }

  addLayer(pixelCanvas: PixelCanvas): void {
    this.root.appendChild(pixelCanvas.canvas);
    this.layerBuffer.push(pixelCanvas);
  }

  removeLayer(pixelCanvas: PixelCanvas): void {
    this.layerBuffer = this.layerBuffer.filter((item) => item !== pixelCanvas);
  }
}

export { LayerManager };
