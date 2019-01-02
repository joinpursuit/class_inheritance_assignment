class Universe {
  constructor(name) {
    this.universeName = name;
  }
}

class Galaxy extends Universe {
  constructor(universe, name) {
    super(universe.universeName);
    this.galaxyName = name;
  }
}

class Star extends Galaxy {
  constructor(galaxy, starName, starSize) {
    super(galaxy, galaxy.galaxyName)
    this.starName = starName;
    this.starSize = starSize;
  }
};

class Planet extends Star {
  constructor(star, planetName) {
    super(star, star.starName, star.starSize)
    this.planetName = planetName;
  }
}

class Continent extends Planet {
  constructor(planet, continentName) {
    super(planet, planet.planetName)
    this.continentName = continentName;

  }
}
class Land extends Continent {
  constructor(continent, landName) {
    super(continent, continent.continentName)
    this.landName = landName;
  }
}
class Village extends Land {
  constructor(land, name) {
    super(land, land.landName)
    this.villageName = name
  }
}

class Family extends Village {
  constructor(village, name) {
    super(village, village.villageName)
    this.familyName = name;
  }
}

class Person extends Family {
  constructor(family, name) {
    super(family, family.familyName)
    this.personName = name
  }
}
class Organ extends Person {
  constructor(person, name) {
    super(person, person.personName)
    this.organName = name;
  }
}
class Cell extends Organ {
  constructor(organ, name) {
    super(organ, organ.organName)
    this.cellName = name;
  }
}
class Molecule extends Cell {
  constructor(variable, name) {
    super(variable, variable.cellName)
    this.moleculeName = name;
  }
}

class Atom extends Molecule {
  constructor(molecule, name) {
    super(molecule, molecule.moleculeName)
    this.atomName = name;
  }

  tellStory() {
    return `This is a ${this.atomName} in a ${this.moleculeName} molecule. It lives in a ${this.cellName} cell in the ${this.organName} of ${this.personName}.${this.personName} belongs to ${this.familyName} family in the village of ${this.villageName}. The village of ${this.villageName} is in a ${this.landName} on the continent of ${this.continentName}. The continent of ${this.continentName} is on a ${this.planetName} planet orbiting a ${this.starName} that's ${this.starSize} years old. This star is part of the ${this.galaxyName} Galaxy in ${this.universeName}`
  }
}


const myUniverse = new Universe("My Big Universe");
const myGalaxy = new Galaxy(myUniverse, "Dank MeMe");
const myStar = new Star(myGalaxy, "Orion", "like more than 7");
const myPlanet = new Planet(myStar, 'Square');
const myContinent = new Continent(myPlanet, "Marshmallow Plateau");
const myLand = new Land(myContinent, "Chunk o' Land");
const myVillage = new Village(myLand, "Villa ayawet werw");
const myFamily = new Family(myVillage, "The derps");
const myPerson = new Person(myFamily, "Lighting McQueen");
const myOrgan = new Organ(myPerson, "Chungus")
const myCell = new Cell(myOrgan, "Perfect");
const myMolecule = new Molecule(myCell, "Dark Paticle of dooooom");
const myAtom = new Atom(myMolecule, "Adam the atom");


console.log(myAtom);