class Universe {
  constructor(name, size) {
    this.uniName = name;
    this.uniSize = size;
  }
};

class Galaxy extends Universe {
  constructor(name, universe) {
    super(universe.uniName, universe.uniSize);
    // this.universe = universe;
    this.galName = name;
  }
};

class Star extends Galaxy {
  constructor(name, state, galaxy, universe) {
    super(galaxy.galName, universe);
    // this.galaxy = galaxy;
    // this.universe = universe;
    this.starName = name;
    this.state = state;
  }
}

class Planet extends Star {
  constructor(name, star, galaxy, universe) {
    super(star.starName, star.state, galaxy, universe);
    this.planetName = name;
  }
}

class Continent extends Planet {
  constructor(name, planet, star, galaxy, universe) {
    super(planet.planetName, star, galaxy, universe);
    this.contName = name;
  }
}

class Land extends Continent {
  constructor(name, continent, planet, star, galaxy, universe) {
    super(continent.contName, planet, star, galaxy, universe);
    this.landName = name;
  }
}

class Village extends Land {
  constructor(name, land, continent, planet, star, galaxy, universe) {
    super(land.landName, continent, planet, star, galaxy, universe);
    this.villageName = name;
  }
}

class Family extends Village {
  constructor(name, village, land, continent, planet, star, galaxy, universe) {
    super(village.villageName, land, continent, planet, star, galaxy, universe);
    this.famName = name;
  }
}

class Person extends Family {
  constructor(name, family, village, land, continent, planet, star, galaxy, universe) {
    super(family.famName, village, land, continent, planet, star, galaxy, universe);
    this.perName = name;
  }
}

class Organ extends Person {
  constructor(name, person, family, village, land, continent, planet, star, galaxy, universe) {
    super(person.perName, family, village, land, continent, planet, star, galaxy, universe);
    this.organName = name;
  }
}

class Cell extends Organ {
  constructor(name, organ, person, family, village, land, continent, planet, star, galaxy, universe) {
    super(organ.organName, person, family, village, land, continent, planet, star, galaxy, universe);
    this.cellName = name;
  }
}

class Molecule extends Cell {
  constructor(name, cell, organ, person, family, village, land, continent, planet, star, galaxy, universe) {
    super(cell.cellName, organ, person, family, village, land, continent, planet, star, galaxy, universe)
    this.molName = name;
  }
}

class Atom extends Molecule {
  constructor(name, molecule, cell, organ, person, family, village, land, continent, planet, star, galaxy, universe) {
    super(molecule.molName, cell, organ, person, family, village, land, continent, planet, star, galaxy, universe);
    this.atomName = name;
  }

  tellStory() {
    return `There are lovely little atoms called ${this.atomName}, which help to make up
            ${this.molName} molecules. These can be found within certain ${this.cellName};
            maybe within the totally not made up ${this.organName} which ${this.perName} totally
            has. ${this.perName} belongs to the ${this.famName} within dusty arse ${this.villageName}
            in the dusty part of ${this.landName} in the somewhat better part of ${this.contName}
            in the barely liveable part of the planet ${this.planetName} within the tastey
            galaxy known as the ${this.galName} galaxy, within ${this.uniName} which has no name.`;
  }
}


const myUni = new Universe('The universe', 93 + ' billion lightyears')
const myGal = new Galaxy('Milkyway', myUni);
const myStar = new Star('Solis', 'Dwarf Star', myGal, myUni);
const myPlanet = new Planet('Earth', myStar, myGal, myUni);
const continent = new Continent('North Amurica', myPlanet, myStar, myGal, myUni);
const thisLand = new Land('New York', continent, myPlanet, myStar, myGal, myUni);
const thisVillage = new Village('Bed-Stuy', thisLand, continent, myPlanet, myStar, myGal, myUni);
const thisFam = new Family('Stevens', thisVillage, thisLand, continent, myPlanet, myStar, myGal, myUni);
const thisPerson = new Person("T'Keya", thisFam, thisVillage, thisLand, continent, myPlanet, myStar, myGal, myUni);
const thisOrgan = new Organ('squiggly-spooch', thisPerson, thisFam, thisVillage, thisLand, continent, myPlanet, myStar, myGal, myUni);
const thisCell = new Cell('stem', thisOrgan, thisPerson, thisFam, thisVillage, thisLand, continent, myPlanet, myStar, myGal, myUni);
const thisMolecule = new Molecule('lipid', thisCell, thisOrgan, thisPerson, thisFam, thisVillage, thisLand, continent, myPlanet, myStar, myGal, myUni);
const anAtom = new Atom('carbon', thisMolecule, thisCell, thisOrgan, thisPerson, thisFam, thisVillage, thisLand, continent, myPlanet, myStar, myGal, myUni);

console.log(anAtom.tellStory());
// class Planet extends Star
