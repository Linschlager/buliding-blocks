import { GRID_SIZE } from "./consts";

export default class Square {
  #x;
  #y;
  #size;
  constructor(x, y, size) {
    this.#x = x;
    this.#y = y;
    this.#size = size;
  }

  getX() {
    return this.#x;
  }

  getY() {
    return this.#y;
  }

  getSize() {
    return this.#size;
  }

  /**
   * O(n^4) This is so bad
   * @param {Square} other
   */
  intersects(other) {
    for (let i = 0; i < this.getSize(); i++) {
      for (let j = 0; j < this.getSize(); j++) {
        for (let a = 0; a < other.getSize(); a++) {
          for (let b = 0; b < other.getSize(); b++) {
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
