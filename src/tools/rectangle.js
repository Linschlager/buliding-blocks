import { GRID_SIZE } from "../resources/consts";

/**
 * Data class for squares
 */
export default class Rectangle {
  #x;
  #y;
  #sizeX;
  #sizeY;
  constructor(x, y, width, height) {
    this.#x = x;
    this.#y = y;
    this.#sizeX = width;
    this.#sizeY = height;
  }

  getX() {
    return this.#x;
  }

  getY() {
    return this.#y;
  }

  getSizeX() {
    return this.#sizeX;
  }

  getSizeY() {
    return this.#sizeY;
  }

  /**
   * O(n^4) This is so bad
   * @param {Rectangle} other
   */
  intersects(other) {
    for (let i = 0; i < this.getSizeX(); i++) {
      for (let j = 0; j < this.getSizeY(); j++) {
        for (let a = 0; a < other.getSizeX(); a++) {
          for (let b = 0; b < other.getSizeY(); b++) {
            if (
              this.getX() + i * GRID_SIZE === other.getX() + a * GRID_SIZE &&
              this.getY() + j * GRID_SIZE === other.getY() + b * GRID_SIZE
            ) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
}
