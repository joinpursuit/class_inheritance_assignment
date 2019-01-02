class Universe {
  constructor(universeName, universeAge) {
    this.universeName = universeName;
    this.universeAge = universeAge;
  }
}

class Galaxy extends Universe {
  constructor(galaxyName, galaxySize, universe) {
    super(universe.universeName, universe.universeAge);
    this.galaxyName = galaxyName;
    this.galaxySize = galaxySize;
  }
}

class Star extends Galaxy {
  constructor(starName, starAge, galaxy, universe) {
    super(galaxy.galaxyName, galaxy.galaxySize, universe);
    this.starName = starName;
    this.starAge = starAge;
  }
}

class Planet extends Star {
  constructor(planetName, planetComponent, star, galaxy, universe) {
    super(star.starName, star.starAge, galaxy, universe);
    this.planetName = planetName;
    this.planetComponent = planetComponent;
  }
}

class Continent extends Planet {
  constructor(continentName, continentSize, planet, star, galaxy, universe) {
    super(planet.planetName, planet.planetComponent, star, galaxy, universe);
    this.continentName = continentName;
    this.continentSize = continentSize;
  }
}

class Land extends Continent {
  constructor(
    landNature,
    landState,
    continent,
    planet,
    star,
    galaxy,
    universe
  ) {
    super(
      continent.continentName,
      continent.continentSize,
      planet,
      star,
      galaxy,
      universe
    );
    this.landNature = landNature;
    this.landState = landState;
  }
}

class Village extends Land {
  constructor(
    villageName,
    villagePopulation,
    land,
    continent,
    planet,
    star,
    galaxy,
    universe
  ) {
    super(
      land.landNature,
      land.landState,
      continent,
      planet,
      star,
      galaxy,
      universe
    );
    this.villageName = villageName;
    this.villagePopulation = villagePopulation;
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
      village.villagePopulation,
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
      start,
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
    moleculeType,
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
    this.moleculeType = moleculeType;
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
      molecule.moleculeType,
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
}

const myUniverse = new Universe("Chronos", "8.3 trillion years old");
const myGalaxy = new Galaxy("Plethora", "50 thousand light years", myUniverse);
const myStar = new Star("Twinkle", "10 billion", myGalaxy, myUniverse);
const myPlanet = new Planet(
  "A Big Big World",
  "Water",
  myStar,
  myGalaxy,
  myUniverse
);
const myContinent = new Continent(
  "Grey",
  305,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
const myLand = new Land(
  "Fresh",
  "Liquid",
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
const myVillage = new Village(
  "Flowy",
  5.3,
  myLand,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
const myFamily = new Family(
  "Ruffs",
  5,
  myVillage,
  myLand,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
const myPerson = new Person(
  "Hubert",
  38,
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
  "Lung",
  "breathe",
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
  "protect the immune system",
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
const myMolecule = new Molecule("");
