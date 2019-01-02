const Renderer = require('./renderer');

class Atom extends Renderer {
  constructor(props) {
    super();
    Object.keys(props).forEach(key => (this[key] = props[key]));
  }
}

module.exports = Atom;
