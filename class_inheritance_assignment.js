class Universe {
  constructor(universeName, universeSize) {
    this.universeName = universeName;
    this.universeSize = universeSize;
  }
}

class Galaxy extends Universe {
  constructor(galaxyName, galaxyDiameter, universe) {
    super(universe.universeName, universe.universeSize); //I believe the line is correct but for some reason I keep getting an error of undefined, when I defiened universeName down below.
    this.galaxyName = galaxyName
    this.galaxyDiameter = galaxyDiameter
  }
}

class Star extends Galaxy {
  constructor(starName, starAge, galaxy, universe) {
    super(galaxy.galaxyName, galaxy.galaxyDiameter, universe)
    this.starName = starName
    this.starAge = starAge
  }
}

class Planet extends Star {
  constructor(planetName, planetTemperature, planetDensity, star, galaxy, universe) {
    super(star.starName, star.starAge, galaxy, universe)
    this.planetName = planetName;
    this.planetTemperature = planetTemperature;
    this.planetDensity = planetDensity;
  }
}

class Continent extends Planet {
  constructor(continentName, continentSize, planet, star, galaxy, universe) {
    super(planet.planetName, planet.planetTemperature, planet.planetDensity, star, galaxy, universe)
    this.continentName = continentName;
    this.continentSize = continentSize;
  }
}

class Land extends Continent {
  constructor(landName, landSize, continent, planet, star, galaxy, universe) {
    super(continent.continentName, continent.continentSize, planet, star, galaxy, universe)
    this.landName = landName;
    this.landSize = landSize;
  }
}

class Village extends Land {
  constructor(villageName, villagePopulation, land, continent, planet, star, galaxy, universe) {
    super(land.landName, land.landSize, continent, planet, star, galaxy, universe)
    this.villageName = villageName;
    this.villagePopulation = villagePopulation;
  }
}

class Family extends Village {
  constructor(familyName, familySize, village, land, continent, planet, star, galaxy, universe) {
    super(village.villageName, village.villageName, land, continent, planet, star, galaxy, universe)
    this.familyName = familyName;
    this.familySize = familySize;
  }
}

class Person extends Family {
  constructor(personName, personAge, personGender, family, village, land, continent, planet, star, galaxy, universe) {
    super(family.familyName, family.familySize, village, land, continent, planet, star, galaxy, universe)
    this.personName = personName;
    this.personAge = personAge;
    this.personGender = personGender;
  }
}

class Organ extends Person {
  constructor(organName, organWeight, person, family, village, land, continent, planet, star, galaxy, universe) {
    super(person.personName, person.personAge, person.personGender, family, village, land, continent, planet, star, galaxy, universe)
    this.organName = organName;
    this.organWeight = organWeight;
  }
}

class Cell extends Organ {
  constructor(cellName, cellSize, organ, person, family, village, continent, planet, star, galaxy, universe) {
    super(organ.organName, organ.organWeight, person, family, village, continent, planet, star, galaxy, universe)
    this.cellName = cellName;
    this.cellSize = cellSize;
  }
}

class Molecule extends Cell {
  constructor(moleculeName, moleculeSize, cell, organ, person, family, village, continent, planet, star, galaxy, universe) {
    super(cell.cellName, cell.cellSize, organ, person, family, village, continent, planet, star, galaxy, universe)
    this.moleculeName = moleculeName;
    this.moleculeSize = moleculeSize;
  }
}

class Atom extends Molecule {
  constructor(atomName, atomSize, molecule, cell, organ, person, family, village, continent, planet, star, galaxy, universe) {
    super(molecule.moleculeName, molecule.moleculeSize, cell, organ, person, family, village, continent, planet, star, galaxy, universe)
    this.atomName = atomName;
    this.atomSize = atomSize;
  }

  tellStory() {
    return `This is a ${this.atomName} atom in a ${this.moleculeName}. It lives in a ${this.cellName} in the stomach of ${this.personName}. ${this.personName} belongs to the ${this.familyName} family in the village of ${this.villageName}. The village of ${this.villageName} is in a ${this.landName} on the continent of ${this.continentName}. The continent of ${this.continentName} is on a hot planet called ${this.planetName} orbiting a star named ${this.starName} that's ${this.starAge}. This ${this.starName} is part of the ${this.galaxyName} Galaxy in My Big ${this.universeName} Universe.`
  }
}


const myUniverse = new Universe('Michiiil', 'Never Ending');

const myGalaxy = new Galaxy('Milky Way', 100000, myUniverse);

const myStar = new Star('Fuego', '500 Billion', myGalaxy, myUniverse);

const myPlanet = new Planet('Dreamville', 'Burning', 'Real Dense', myStar, myGalaxy, myUniverse);

const myContinent = new Continent('Slums', 'Very Tiny', myPlanet, myStar, myGalaxy, myUniverse);

const myLand = new Land('Never Never Land', 'Huge', myContinent, myPlanet, myStar, myGalaxy, myUniverse);

const myVillage = new Village('Smallville', 10, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);

const myFamily = new Family('The Whos', 'Decently big', myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);

const  myPerson = new Person('Bond', 007, 'Awesome', myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);

const myOrgan = new Organ('Kidney', '5 pounds', myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);

const  myCell = new Cell('Invisible Cell', 'Teeny teeny tiny', myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);

const myMolecule = new Molecule('elucelom', 'pretty invisible', myCell, myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);

const myAtom = new Atom('motaaa', 'BIG', myMolecule, myCell, myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);

console.log(myAtom.tellStory());
