class Universe {
  constructor(name, size) {
    this.universeName = name;
    this.universeSize = size;
  }
}

class Galaxy extends Universe {
  constructor(galaxyName, galaxyMorphology, universe) {
    super(universe.universeName, universe.universeSize);
    this.galaxyName = galaxyName;
    this.galaxyMorphology = galaxyMorphology;
  }
}

class Star extends Galaxy {
  constructor(starName, starColor, galaxy, universe) {
    super(galaxy.galaxyName, galaxy.galaxyMorphology, universe);
    this.starName = starName;
    this.starColor = starColor;
  }
}

class Planet extends Star {
  constructor(planetName, planetMoons, planetRings, star, galaxy, universe) {
    super(star.starName, star.starColor, galaxy, universe);
    this.planetName = planetName;
    this.planetMoons = planetMoons;
    this.planetRings = planetRings;
  }
}

class Continent extends Planet {
  constructor(
    continentName,
    continentElevation,
    planet,
    star,
    galaxy,
    universe
  ) {
    super(
      planet.planetName,
      planet.planetMoons,
      planet.planetRings,
      planet,
      star,
      galaxy,
      universe
    );
    this.continentName = continentName;
    this.continentElevation = continentElevation;
  }
}

class Land extends Continent {
  constructor(landName, landSize, continent, planet, star, galaxy, universe) {
    super(
      continent.continentName,
      continent.continentElevation,
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
    villageLeader,
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
    this.villageLeader = villageLeader;
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
      village.villageLeader,
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
    organType,
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
    this.organType = organType;
  }
}

class Cell extends Organ {
  constructor(
    cellName,
    cellCategory,
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
      organ.organType,
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
    this.cellCategory = cellCategory;
  }
}

class Molecule extends Cell {
  constructor(
    moleculeName,
    moleculeAttribute,
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
      cell.cellCategory,
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
    this.moleculeAttribute = moleculeAttribute;
  }
}

class Atom extends Molecule {
  constructor(
    atomName,
    atomFeature,
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
      molecule.moleculeAttribute,
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
    this.atomFeature = atomFeature;
  }
  tellStory() {
    console.log(
      `${this.atomName} is from the molecule, ${this.moleculeName}, the cell, ${
        this.cellName
      }, from the ${this.organName} organ. The organ belongs to ${
        this.personName
      }, who is from the ${
        this.familyName
      } family. They live in the village of ${
        this.villageName
      }, in the land of ${this.landName}, which is in the continent of ${
        this.continentName
      }. The continent exists on the ${
        this.planetName
      } planet, which exists on the ${
        this.starName
      } star, which is a part of the ${this.galaxyName} galaxy and the ${
        this.universeName
      } universe!`
    );
  }
}

const myUniverse = new Universe("Hello World", 1000);
const myGalaxy = new Galaxy("01100101 Galaxy", "Elliptical", myUniverse);
const myStar = new Star("Death Star", "Black", myGalaxy, myUniverse);
const myPlanet = new Planet("XYZ", 7, 2, myStar, myGalaxy, myUniverse);
const myContinent = new Continent(
  "Antafritralisia",
  44444,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
const myLand = new Land(
  "Disney Land",
  9000,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
const myVillage = new Village(
  "The Shire",
  "Frodo Baggins",
  myLand,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
const myFamily = new Family(
  "Adams",
  7,
  myVillage,
  myLand,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
const myPerson = new Person(
  "Borat",
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
const myOrgan = new Organ(
  "Heart",
  "Chest",
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
  "The Coolest Cell",
  "The Best Type",
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
  "The Happiest Molecule",
  "The Best Attribute",
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
  "The Funniest Atom",
  "The Best Feature",
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
