class Universe {
  constructor(universeName, universeSize) {
    this.universeName = universeName;
    this.universeSize = universeSize;
  }
}

class Galaxy extends Universe {
  constructor(galaxyName, galaxySize, universe) {
    super(universe.universeName, universe.universeSize);
    this.galaxyName = galaxyName;
    this.galaxySize = galaxySize;
  }
}

class Star extends Galaxy {
  constructor(starName, starSize, galaxy, universe) {
    super(galaxy.galaxyName, galaxy.galaxySize, universe);
    this.starName = starName;
    this.starSize = starSize;
  }
}

class Planet extends Star {
  constructor(planetName, planetSize, star, galaxy, universe) {
    super(star.starName, star.starSize, galaxy, universe);
    this.planetName = planetName;
    this.planetSize = planetSize;
  }
}

class Continent extends Planet {
  constructor(continentName, continentSize, planet, star, galaxy, universe) {
    super(planet.planetName, planet.planetSize, star, galaxy, universe);
    this.continentName = continentName;
    this.continentSize = continentSize;
  }
}

class Land extends Continent {
  constructor(landName, landSize, continent, planet, star, galaxy, universe) {
    super(
      continent.continentName,
      continent.continentSize,
      planet,
      star,
      galaxy,
      universe
    );
    this.landName = landName;
    this.landSize = landSize;
  }
}

class Village extends Land {
  constructor(
    villageName,
    villageSize,
    land,
    continent,
    planet,
    star,
    galaxy,
    universe
  ) {
    super(
      land.landName,
      land.landSize,
      continent,
      planet,
      star,
      galaxy,
      universe
    );
    this.villageName = villageName;
    this.villageSize = villageSize;
  }
}

class Family extends Village {
  constructor(
    familyName,
    familySize,
    village,
    land,
    continent,
    planet,
    star,
    galaxy,
    universe
  ) {
    super(
      village.villageName,
      village.villageSize,
      land,
      continent,
      planet,
      star,
      galaxy,
      universe
    );
    this.familyName = familyName;
    this.familySize = familySize;
  }
}

class Person extends Family {
  constructor(
    personName,
    personAge,
    family,
    village,
    land,
    continent,
    planet,
    star,
    galaxy,
    universe
  ) {
    super(
      family.familyName,
      family.familySize,
      village,
      land,
      continent,
      planet,
      star,
      galaxy,
      universe
    );
    this.personName = personName;
    this.personAge = personAge;
  }
}

class Organ extends Person {
  constructor(
    organName,
    organFunction,
    person,
    family,
    village,
    land,
    continent,
    planet,
    star,
    galaxy,
    universe
  ) {
    super(
      person.personName,
      person.personAge,
      family,
      village,
      land,
      continent,
      planet,
      star,
      galaxy,
      universe
    );
    this.organName = organName;
    this.organFunction = organFunction;
  }
}
class Cell extends Organ {
  constructor(
    cellType,
    cellFunction,
    organ,
    person,
    family,
    village,
    land,
    continent,
    planet,
    star,
    galaxy,
    universe
  ) {
    super(
      organ.organName,
      organ.organFunction,
      person,
      family,
      village,
      land,
      continent,
      planet,
      star,
      galaxy,
      universe
    );
    this.cellType = cellType;
    this.cellFunction = cellFunction;
  }
}

class Molecule extends Cell {
  constructor(
    moleculeName,
    moleculeFunction,
    cell,
    organ,
    person,
    family,
    village,
    land,
    continent,
    planet,
    star,
    galaxy,
    universe
  ) {
    super(
      cell.cellType,
      cell.cellFunction,
      organ,
      person,
      family,
      village,
      land,
      continent,
      planet,
      star,
      galaxy,
      universe
    );
    this.moleculeName = moleculeName;
    this.moleculeFunction = moleculeFunction;
  }
}

class Atom extends Molecule {
  constructor(
    atomType,
    atomSize,
    molecule,
    cell,
    organ,
    person,
    family,
    village,
    land,
    continent,
    planet,
    star,
    galaxy,
    universe
  ) {
    super(
      molecule.moleculeName,
      molecule.moleculeFunction,
      cell,
      organ,
      person,
      family,
      village,
      land,
      continent,
      planet,
      star,
      galaxy,
      universe
    );
    this.atomType = atomType;
    this.atomSize = atomSize;
  }
  tellStory() {
    return `This is a ${this.atomType} atom in a ${
      this.moleculeName
    } molecule. It lives in a ${this.cellType} cell in the ${
      this.organName
    } of ${this.personName}. ${this.personName} belongs to the ${
      this.familyName
    } family in the village of ${this.villageName}. The village of ${
      this.villageName
    } is in a waste land on the continent of ${
      this.continentName
    }. The continent of ${this.continentName} is on planet ${
      this.planetName
    } orbiting a star that size is a ${
      this.starSize
    }. This star is part of the ${this.galaxyName} Galaxy in ${
      this.universeName
    } Universe.`;
  }
}

const myUniverse = new Universe("Tomus", "Infinity");
const myGalaxy = new Galaxy("Helios", "Trilli", myUniverse);
const myStar = new Star("Lucy", "Billi", myGalaxy, myUniverse);
const myPlanet = new Planet("Voltron", "Milli", myStar, myGalaxy, myUniverse);
const myContinent = new Continent(
  "Goldsen",
  "Thilli",
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
const myLand = new Land(
  "Grandy",
  "300,000 acers",
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
const myVillage = new Village(
  "Wolville",
  "200",
  myLand,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
const myFamily = new Family(
  "Hillsburg",
  "5",
  myVillage,
  myLand,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
const myPerson = new Person(
  "Peter",
  "54",
  myFamily,
  myVillage,
  myLand,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
const myOrgan = new Organ(
  "Heart",
  "Pump blood through body",
  myPerson,
  myFamily,
  myVillage,
  myLand,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
const myCell = new Cell(
  "White",
  "Combat infections",
  myOrgan,
  myPerson,
  myFamily,
  myVillage,
  myLand,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
const myMolecule = new Molecule(
  "h2o",
  "Water",
  myCell,
  myOrgan,
  myPerson,
  myFamily,
  myVillage,
  myLand,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
const myAtom = new Atom(
  "Hydrogen",
  "Unknown",
  myMolecule,
  myCell,
  myOrgan,
  myPerson,
  myFamily,
  myVillage,
  myLand,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
console.log(myAtom.tellStory());
