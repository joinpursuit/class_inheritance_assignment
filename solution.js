class Universe {
  constructor(name) {
    this.universeName = name;
  }
}

class Galaxy extends Universe {
  constructor(name, universe) {
    super(universe.universeName);
    // this.universe = universe;
    this.galaxyName = name;
  }
}

class Star extends Galaxy {
  constructor(name, galaxy, universe) {
    super(galaxy.galaxyName, universe)
    this.starName = name;
  }
}

class Planet extends Star {
  constructor(name, star, galaxy, universe) {
    super(star.starName, galaxy, universe)
    this.planetName = name;
  }
}

class Continent extends Planet {
  constructor(name, planet, star, galaxy, universe) {
    super(planet.planetName, star, galaxy, universe)
    // this.planet = planet;
    this.continentName = name;
  }
}

class Land extends Continent {
  constructor(name, continent, planet, star, galaxy, universe) {
    super(continent.continentName, planet, star, galaxy, universe)
    this.landName = name;
  }
}

class Village extends Land {
  constructor(name, land, continent, planet, star, galaxy, universe) {
    super(land.landName, continent, planet, star, galaxy, universe)
    this.villageName = name;
  }
}

class Family extends Village {
  constructor(name, village, land, continent, planet, star, galaxy, universe) {
    super(village.villageName, land, continent, planet, star, galaxy, universe)
    this.familyName = name;
  }
}

class Person extends Family {
  constructor(name, family, village, land, continent, planet, star, galaxy, universe) {
    super(family.familyName, village, land, continent, planet, star, galaxy, universe)
    this.personName = name;
  }
}

class Organ extends Person {
  constructor(name, person, family, village, land, continent, planet, star, galaxy, universe) {
    super(person.personName, family, village, land, continent, planet, star, galaxy, universe)
    this.organName = name;
  }
}

class Cell extends Organ {
  constructor(name, organ, person, family, village, land, continent, planet, star, galaxy, universe) {
    super(organ.organName, person, family, village, land, continent, planet, star, galaxy, universe)
    this.cellName = name;
  }
}

class Molecule extends Cell {
  constructor(name, cell, organ, person, family, village, land, continent, planet, star, galaxy, universe) {
    super(cell.cellName, organ, person, family, village, land, continent, planet, star, galaxy, universe)
    this.moleculeName = name;
  }
}

class Atom extends Molecule {
  constructor(name, molecule, cell, organ, person, family, village, land, continent, planet, star, galaxy, universe) {
    super(molecule.moleculeName, cell, organ, person, family, village, land, continent, planet, star, galaxy, universe);
    this.molecule = molecule;
    this.atomName = name;
  }
}

const myUniverse = new Universe('My Big Universe');
const myGalaxy = new Galaxy('Galaxy I', myUniverse);
const myStar = new Star('Star I', myGalaxy, myUniverse);
const myPlanet = new Planet('Planet I', myStar, myGalaxy, myUniverse);
const myContinent = new Continent('Continent I', myPlanet, myStar, myGalaxy, myUniverse);
const myLand = new Land('Land I', myContinent, myPlanet, myStar, myGalaxy, myUniverse);
const myVillage = new Village('Village I', myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
const myFamily = new Family('Family I', myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
const myPerson = new Person('Person I', myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
const myOrgan = new Organ('Organ I', myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
const myCell = new Cell('Cell I', myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
const myMolecule = new Molecule('Molecule I', myCell, myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
const myAtom = new Atom('Atom I', myMolecule, myCell, myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);

console.log(myAtom.universeName);
console.log(myAtom.galaxyName);
console.log(myAtom.starName);
console.log(myAtom.planetName);
console.log(myAtom.continentName);
console.log(myAtom.landName);
console.log(myAtom.villageName);
console.log(myAtom.familyName);
console.log(myAtom.personName);
console.log(myAtom.organName);
console.log(myAtom.cellName);
console.log(myAtom.moleculeName);
console.log(myAtom);