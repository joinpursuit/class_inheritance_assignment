class Universe {
  constructor(name, size) {
    this.universeName = name;
    this.universeSize = size;
  }
}

// class Galaxy extends Universe {
//   constructor(name, location, universeName, universeSize) {
//     super(universeName, universeSize);
//     this.galaxyName = name;
//     this.galaxyLocation = location;
//   }
// }

class Galaxy extends Universe {
  constructor(name, location, universe) {
    super(universe.universeName, universe.universeSize);
    this.galaxyName = name;
    this.galaxyLocation = location;
  }
}

class Star extends Galaxy {
  constructor(name, age, galaxy, universe) {
    super(galaxy.galaxyName, galaxy.galaxyLocation, universe);
    this.starName = name;
    this.starAge = age;
  }
}

class Planet extends Star {
  constructor(name, zone, star, galaxy, universe) {
    super(star.starName, star.starAge, galaxy, universe);
    this.planetName = name;
    this.planetZone = zone;
  }
}

class Continent extends Planet {
  constructor(name, location, planet, star, galaxy, universe) {
    super(planet.planetName, planet.planetZone, star, galaxy, universe);
    this.continentName = name;
    this.continentLocation = location;
  }
}

class Land extends Continent {
  constructor(name, size, continent, planet, star, galaxy, universe) {
    super(
      continent.continentName,
      continent.continentLocation,
      planet,
      star,
      galaxy,
      universe
    );
    this.landName = name;
    this.landSize = size;
  }
}

class Village extends Land {
  constructor(
    name,
    population,
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
    this.villageName = name;
    this.villagePopulation = population;
  }
}

class Family extends Village {
  constructor(
    name,
    size,
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
    this.familyName = name;
    this.familySize = size;
  }
}

class Person extends Family {
  constructor(
    name,
    age,
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
    this.personName = name;
    this.personAge = age;
  }
}

class Organ extends Person {
  constructor(
    name,
    status,
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
    this.organName = name;
    this.organStatus = status;
  }
}

class Cell extends Organ {
  constructor(
    type,
    size,
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
      organ.organStatus,
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
    this.cellType = type;
    this.cellSize = size;
  }
}

class Molecule extends Cell {
  constructor(
    name,
    size,
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
      cell.cellSize,
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
    this.moleculeName = name;
    this.moleculeSize = size;
  }
}

class Atom extends Molecule {
  constructor(
    name,
    type,
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
      molecule.moleculeSize,
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
    this.atomName = name;
    this.atomType = type;
  }

  tellStory() {
    return `This is a ${this.atomName} atom in a ${
      this.moleculeName
    } molecule. It lives in a ${this.cellType} cell in the ${
      this.organName
    } of ${this.personName}. ${this.personName} belongs to
    the ${this.familyName} family in the village of ${
      this.villageName
    }. The village of ${this.villageName} is
    in a ${this.landName} land on the continent of ${
      this.continentName
    }. The continent of ${this.continentName}
    is on a planet called ${this.planetName} orbiting a star that's ${
      this.starAge
    } years old. This star
    is part of the ${this.galaxyName} galaxy in ${this.universeName} universe.`;
  }
}

let myUniverse = new Universe("Icy Cream Cone", "Yuuuuge");
let myGalaxy = new Galaxy("Sombrero", "8 billion years", myUniverse);
let myStar = new Star("Virgo", 3, myGalaxy, myUniverse);
let myPlanet = new Planet("Fermi", "habitable", myStar, myGalaxy, myUniverse);
let myContinent = new Continent(
  "Hermes",
  "Eastern Hemisphere",
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
let myLand = new Land(
  "Scare Crow",
  "10K hectares",
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
let myVillage = new Village(
  "Mongola",
  20000,
  myLand,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);

let myFamily = new Family(
  "Petersons",
  7,
  myVillage,
  myLand,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);

let myPerson = new Person(
  "Peter",
  44,
  myFamily,
  myVillage,
  myLand,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);

let myOrgan = new Organ(
  "heart",
  "healthiesh",
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

let myCell = new Cell(
  "pacemaker",
  "80 um",
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

let myMolecule = new Molecule(
  "DNA",
  "2 inches",
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

let myAtom = new Atom(
  "Helium",
  "Noble Gas",
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

// console.log(myStar.universeName);
