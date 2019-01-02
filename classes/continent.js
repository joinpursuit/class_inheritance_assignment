const Renderer = require('./renderer');

class Continent extends Renderer {
  constructor(props) {
    super();
    Object.keys(props).forEach(key => (this[key] = props[key]));
  }
}

module.exports = Continent;
