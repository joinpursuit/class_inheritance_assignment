const Universe = require('./classes/universe');
const Galaxy = require('./classes/galaxy');
const Star = require('./classes/star');
const Planet = require('./classes/planet');
const Continent = require('./classes/continent');
const Land = require('./classes/land');
const Village = require('./classes/village');
const Family = require('./classes/family');
const Person = require('./classes/person');
const Organ = require('./classes/organ');
const Cell = require('./classes/cell');
const Molecule = require('./classes/molecule');
const Atom = require('./classes/atom');
const Story = require('./classes/story');

let obj = {
  atom: new Atom({
    name: 'proton',
    charge: 'positive',
    // render: ``,
  }),
  molecule: new Molecule({
    name: 'Carbon',
    size: 'small',
    // render: ``,
  }),
  cell: new Cell({
    name: 'hair',
    color: 'brown',
    // render: ``,
  }),
  organ: new Organ({
    name: 'Stomach',
    purpose: 'eating',
    // render: ``,
  }),
  person: new Person({
    name: 'Shea',
    age: '22',
    // render: ``,
  }),
  family: new Family({
    name: 'Navarrete familia',
    background: 'Latin-Italian',
    // render: ``,
  }),
  village: new Village({
    name: 'Queens',
    street: 'Broadway',
    // render: ``,
  }),
  land: new Land({
    name: 'state of New York',
    color: 'blue',
    // render: ``,
  }),
  continent: new Continent({
      name: 'Americas',
      area: 'north',
      // render: ``,
    }),
  planet: new Planet({
    name: 'Earth',
    age: '5 billion years old',
    // render: ``,
  }),
  star: new Star({
    name: 'Sun',
    color: 'yellow',
    // render: ``,
  }),
  galaxy: new Galaxy({
    name: 'Milky Way',
    location: 'expansive',
    // render: ``,
  }),
  universe: new Universe({
    // render: `${this.name} is ${this.size}`,
    name: 'The Known ',
    size: '1 google light years across',
  }),
};
let myStory = new Story(obj);
console.log(myStory.tell());
console.log(myStory);

//goal: be able to use [obj][class][name] etc to key into ANY class
// let { universe } = new Universe({
//   name: 'ours',
//   size: 'large',
// });
