// "This is a positively-charged atom in a carbon molecule. It lives in a muscle cell in the stomach of Peter. Peter belongs to the Peterson family in the village of Troy. The village of Troy is in a green land on the continent of Tropico. The continent of Tropico is on a hot planet orbiting a star that's 3 billion years old. This star is part of the Root Beer Galaxy in My Big Universe."

class Story {
  constructor(props) {
    // super();
    Object.keys(props).forEach(key => (this[key] = props[key]));
  }

  tell() {
    let str = '';
    let keys = Object.keys(this);
    keys.forEach((property, i) => {
      str += `${this[property].render(i, keys.length - 1)}`;
    });
    return str;
  }

  //   tell() {
  //     let str = '';
  //     Object.keys(this).forEach(property => {
  //       str += `This ${property} is `;
  //       Object.keys(this[property]).forEach(value => {
  //         str += `${value} has ${this[property][value]} `;
  //       });
  //       str += `
  // `;
  //     });
  //     return (str);
  //   }
}

module.exports = Story;
