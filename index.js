class Universe {
  constructor(universeName, universeSize) {
    this.universeName = universeName;
    this.universeSize = universeSize;
  }
}

let myUniverse = new Universe("My Big Universe", "HUGE");

class Galaxy extends Universe {
  constructor(galaxyName, galaxySize, universe) {
    super(universe.universeName, universe.universeSize);
    // this.universe = universe;
    this.galaxyName = galaxyName;
    this.galaxySize = galaxySize;
  }
}

let myGalaxy = new Galaxy("Andromeda", 22, myUniverse);

class Star extends Galaxy {
  constructor(starName, starSize, galaxy, universe) {
    super(galaxy.galaxyName, galaxy.galaxySize, universe);
    this.starName = starName;
    this.starSize = starSize;
  }
}

let myStar = new Star("North Shining", 21, myGalaxy, myUniverse);

class Planet extends Star {
  constructor(planetName, planetSize, star, galaxy, universe) {
    super(star.starName, star.starSize, galaxy, universe);
    this.planetName = planetName;
    this.planetSize = planetSize;
  }
}

let myPlanet = new Planet("Earth", 1000, myStar, myGalaxy, myUniverse);

class Continent extends Planet {
  constructor(continentName, continentSize, planet, star, galaxy, universe) {
    super(planet.planetName, planet.planetSize, star, galaxy, universe);
    this.continentName = continentName;
    this.continentSize = continentSize;
  }
}

let myContinent = new Continent(
  "North America",
  500,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);

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

let myLand = new Land(
  "Land of the Free",
  "many acres",
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);

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

let myVillage = new Village(
  "East Village",
  350,
  myLand,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);

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

let myFamily = new Family(
  "Ortiz",
  3,
  myVillage,
  myLand,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);

class Person extends Family {
  constructor(
    personName,
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
  }
}

let myPerson = new Person(
  "Deyvi",
  myFamily,
  myVillage,
  myLand,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);

class Organ extends Person {
  constructor(
    organName,
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
  }
}

let myOrgan = new Organ(
  "Brain",
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

class Cell extends Organ {
  constructor(
    cellName,
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
    this.cellName = cellName;
  }
}

let myCell = new Cell(
  "White Blood Cell",
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

class Molecule extends Cell {
  constructor(
    moleculeName,
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
      cell.cellName,
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
  }
}

let myMolecule = new Molecule(
  "Ideal molecule",
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

class Atom extends Molecule {
  constructor(
    atomName,
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
    this.atomName = atomName;
  }

  tellStory() {
    return `This ${myAtom.atomName}:atom, is in ${
      myAtom.moleculeName
    }:molecule. It lives in ${myAtom.cellName}:cell in the ${
      myAtom.organName
    } of ${myAtom.personName}. ${myAtom.personName} belongs to the ${
      myAtom.familyName
    } family of ${myAtom.familySize} in the village of ${
      myAtom.villageName
    }, that has a population of ${myAtom.villageSize}. The ${
      myAtom.villageName
    } is in ${myAtom.landName} with ${myAtom.landSize} on the continent of ${
      myAtom.continentName
    } - size of ${myAtom.continentSize}. The continent of ${
      myAtom.continentName
    } is on hot planet ${myAtom.planetName} of size ${
      myAtom.planetSize
    } orbiting a star ${myAtom.starName} of size ${
      myAtom.starSize
    } that's 3 billion years old. This star is part of the ${
      myAtom.galaxyName
    } Galaxy size ${myAtom.galaxySize} which is part of ${
      myAtom.universeName
    } size ${myAtom.universeSize}.`;
  }
}

let myAtom = new Atom(
  "Basic unit of matter",
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
