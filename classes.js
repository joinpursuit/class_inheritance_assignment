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

  tellStory() {
    return `The ${this.atomType} atom is ${
      this.atomSize
    } nanometers big and lives in the ${
      this.moleculeType
    } molecule whose function is to ${this.moleculeFunction} in the ${
      this.cellType
    } cells to ${this.cellFunction} of the ${this.organName}s, so when ${
      this.personName
    } runs, he can ${this.organFunction} without a problem. ${
      this.personName
    } ${this.familyName} turned ${
      this.personAge
    } years old this weekend, and his ${
      this.familySize
    } family members threw him a party. The ${
      this.familyName
    }s are part of the ${this.villagePopulation} million people living in ${
      this.villageName
    } village, a ${this.landState} land in the ${
      this.continentName
    } continent. ${
      this.continentName
    } is the biggest continent of the teeny tiny ${
      this.planetName
    } planet that tweedles while revolving around the ${
      this.starName
    } star, who is quite cranky at its ${this.starAge} years. The ${
      this.planetName
    } and ${this.starName} are part of the ${this.galaxyName} galaxy. The ${
      this.galaxyName
    } is one of the most magnificent galaxies at its ${
      this.galaxySize
    }. You can find ${this.galaxyName} inside the ${
      this.universeName
    } Universe, which is quite quite old as it turned ${
      this.universeAge
    } just last weekend, hey! just like our friend ${
      this.personName
    }, but backwards ;)!`;
  }
}

const myUniverse = new Universe('Chronos', '8.3 trillion years old');
const myGalaxy = new Galaxy('Plethora', '50 thousand light years', myUniverse);
const myStar = new Star('Twinkle', '10 billion', myGalaxy, myUniverse);
const myPlanet = new Planet(
  'Big Big World',
  'Water',
  myStar,
  myGalaxy,
  myUniverse
);
const myContinent = new Continent(
  'Grey',
  305,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
const myLand = new Land(
  'Fresh',
  'Liquid',
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
const myVillage = new Village(
  'Flowy',
  5.3,
  myLand,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
const myFamily = new Family(
  'Ruff',
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
  'Hubert',
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
  'lung',
  'breathe',
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
  'red',
  'protect the immune system',
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
  'protein',
  'speed up chemical reactions',
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
  'oxygen',
  0.5,
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
myAtom.tellStory();

console.log(myAtom.tellStory());
