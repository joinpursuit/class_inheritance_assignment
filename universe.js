// // const myUniverse = new Universe("JRJ verse");
// // const myGalaxy = new Galaxy("Andromeda", myUniverse);
// //
// // class Galaxy extends Universe {
// //   constructor(name, universe) {
// //     super(universe.universeName);
// //     this.universe = universe;
// //     this.galaxyName = name;
// //   }
// // }
//
class Universe {
  constructor(name, age) {
    this.universeName = name;
    this.universeAge = age;
  }
}

class Galaxy extends Universe {
  constructor(name, size, universe) {
    super(universe.universeName, universe.universeAge);
    this.galaxyName = name;
    this.galaxySize = size;
  }
}

class Star extends Galaxy {
  constructor(name, stage, galaxy, universe) {
    super(galaxy.galaxyName, galaxy.galaxySize, universe);
    this.starName = name;
    this.starStage = stage;
  }
}

class Planet extends Star {
  constructor(name, life, star, galaxy, universe) {
    super(star.starName, star.starStage, galaxy, universe);
    this.planetName = name;
    this.planetLife = life;
  }
}

class Continent extends Planet {
  constructor(name, size, planet, star, galaxy, universe) {
    super(planet.planetName, planet.planetLife, star, galaxy, universe);
    this.continentName = name;
    this.continentSize = size;
  }
}

class Land extends Continent {
  constructor(name, ownership, continent, planet, star, galaxy, universe) {
    super(
      continent.continentName,
      continent.continentSize,
      planet,
      star,
      galaxy,
      universe
    );
    this.landName = name;
    this.landOwnership = ownership;
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
      land.landOwnership,
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
    members,
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
    this.familyMembers = members;
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
      family.familyMembers,
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
    price,
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
    this.organPrice = price;
  }
}

class Cell extends Organ {
  constructor(
    name,
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
      organ.organPrice,
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
    this.cellName = name;
    this.cellFunction = cellFunction;
  }
}

class Molecule extends Cell {
  constructor(
    name,
    organic,
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
    this.moleculeName = name;
    this.moleculeOrganic = organic;
  }
}

class Atom extends Molecule {
  constructor(
    element,
    elementNumber,
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
      molecule.moleculeOrganic,
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
    this.atomElement = element;
    this.atomElementNumber = elementNumber;
  }
  tellStory() {
    return `Voyager 23 recently discovered the existence of parallel universe which mimics certain aspect of our universe but mostly very alien to us. Meet ${
      this.atomElement
    }. ${this.atomElement} has element number of ${
      this.atomElementNumber
    }. It is part of ${this.cellName} which sits snuggly inside ${
      this.moleculeName
    } molecule. It is ${this.moleculeOrganic} that ${
      this.moleculeName
    } is an organic molecule. ${this.moleculeName} is part of ${
      this.personName
    }\'s ${this.organName}. ${
      this.personName
    } owns the biggest space mining corporation in the known universe. He lives in planet ${
      this.planetName
    } with his robot family of ${this.familyMembers}. His village is named ${
      this.villageName
    } based on town's old history as interplanetary nuclear weapons testing ground. Even though ${
      this.continentName
    } is generally a safe place, one must be weary of nuclear wastes. Planet ${
      this.planetName
    } has high sulfur content and it can smell bad seasonally. ${
      this.starName
    } is located in galaxy ${this.galaxyName} which has diameter of ${
      this.galaxySize
    } light years. Parallel universe also has interesting property as magic is one of 5 natural forces. Hence for this reason, the universe is rightfully named as ${
      this.universeName
    }.`;
  }
}

let myUniverse = new Universe("Magicverse", 1);
let myGalaxy = new Galaxy("Orphelia", 13, myUniverse);
let myStar = new Star("Alpha Centauri", "White Dwarf", myGalaxy, myUniverse);
let myPlanet = new Planet("Myanus", true, myStar, myGalaxy, myUniverse);
let myContinent = new Continent(
  "Atlantis",
  300000,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
let myLand = new Land(
  "Silent Hill Resort",
  "JRJ Corporation",
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
let myVillage = new Village(
  "Nuke Town",
  500000,
  myLand,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);

let myFamily = new Family(
  "Jang",
  4,
  myVillage,
  myLand,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);

let myPerson = new Person(
  "Jung Rae Jang",
  28,
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
  "Liver",
  500,
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
  "Hepatic Cell",
  "Break down alcohol",
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
  "Glycogen",
  true,
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
  "Uranium",
  92,
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
console.log(myAtom);
console.log(myAtom.tellStory());
