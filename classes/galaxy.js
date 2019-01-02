const Renderer = require('./renderer');

class Galaxy extends Renderer {
  constructor(props) {
    super();
    Object.keys(props).forEach(key => (this[key] = props[key]));
  }
}

module.exports = Galaxy;
