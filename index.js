class Universe {
  constructor(universeName, universeSize) {
    this.universeName = universeName;
    this.universeSize = universeSize;
  }
}

class Galaxy extends Universe {
  constructor(name, universe) {
    super(universe.universeName, universe.universeSize);
    this.galaxyName = name;
  }
}

class Star extends Galaxy {
  constructor(name, galaxy, universe) {
    super(galaxy.galaxyName, universe);
    this.starName = name;
  }
}

class Planet extends Star {
  constructor(name, distance, star, galaxy, universe) {
    super(star.starName, galaxy, universe);
    this.planetName = name;
    this.planetDistance = distance;
  }
}

class Continent extends Planet {
  constructor(name, planet, star, galaxy, universe) {
    super(planet.planetName, planet.planetDistance, star, galaxy, universe);
    this.continentName = name;
  }
}

class Land extends Continent {
  constructor(name, continent, planet, star, galaxy, universe) {
    super(continent.continentName, planet, star, galaxy, universe);
    this.landName = name;
  }
}

class Village extends Land {
  constructor(name, land, continent, planet, star, galaxy, universe) {
    super(land.landName, continent, planet, star, galaxy, universe);
    this.villageName = name;
  }
}

class Family extends Village {
  constructor(name, village, land, continent, planet, star, galaxy, universe) {
    super(village.villageName, land, continent, planet, star, galaxy, universe);
    this.familyName = name;
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
  }
}

class Cell extends Organ {
  constructor(
    name,
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
    this.cellName = name;
  }
}

class Molecule extends Cell {
  constructor(
    name,
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
    this.moleculeName = name;
  }
}

class Atom extends Molecule {
  constructor(
    name,
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
    this.atomName = name;
  }
  tellStory() {
    return `I'am ${this.atomName} inside ${this.moleculeName} part of ${
      this.cellName
    }, We are helping ${this.personName}'s ${
      this.organName
    } to beat, He's lastname is ${
      this.familyName
    }, He comes from village called ${this.villageName},Famous city in ${
      this.landName
    } part of ${this.continentName}, Somewhere in ${this.planetName}, ${
      this.planetName
    } located in ${this.planetDistance} from ${this.starName} turning in ${
      this.galaxyName
    }, I'm an atom in ${this.universeName}, Can you imagine that!`;
  }
}

let myUniverse = new Universe("The Universe", "infinity");
let myGalaxy = new Galaxy("milky way", myUniverse);
let myStar = new Star("moon", myGalaxy, myUniverse);
let myPlanet = new Planet("earth", 9000, myStar, myGalaxy, myUniverse);
let myContinent = new Continent("asia", myPlanet, myStar, myGalaxy, myUniverse);
let myLand = new Land(
  "turkey",
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
let myVillage = new Village(
  "istanbul",
  myLand,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
let myFamily = new Family(
  "khaki",
  myVillage,
  myLand,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);
let myPerson = new Person(
  "farhad",
  39,
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
  "cardiac muscle",
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
  "intercalated disks",
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
  "carbon",
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

console.log(myAtom.universeName);
console.log(myAtom.tellStory());
