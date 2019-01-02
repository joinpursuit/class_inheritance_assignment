class Renderer {
  constructor() {
    //
  }

  render(index, end) {
    let str = ``;
    Object.keys(this).forEach(property => {
      property === 'name' ?
        str += `this ${this[property]}, that has a ` :
        str += `${this[property]} ${property}`;
    });
    return str += index === end ? '' : `, is found in `;
  }
}

module.exports = Renderer;
