const Renderer = require('./renderer');

class Cell extends Renderer {
  constructor(props) {
    super();
    Object.keys(props).forEach(key => (this[key] = props[key]));
  }
}

module.exports = Cell;
