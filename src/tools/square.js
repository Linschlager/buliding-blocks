import Rectangle from "./rectangle";

/**
 * Data class for squares
 */
export default class Square extends Rectangle {
  constructor(x, y, size) {
    super(x, y, size, size);
  }
}
