//Jonathan.e



class Universe {
  constructor(name, size) {
    this.universeName = name;
    this.universeSize = size;
  }
}

class Galaxy extends Universe {
  constructor(name, location, universe) {
    super(universe.universeName, universe.universeSize);
    this.galaxyName = name;
    this.galaxyLocation = location;
  }
}

class Star extends Galaxy {
  constructor(name, stage, galaxy, universe) {
    super(galaxy.galaxyName, galaxy.galaxyLocation, universe);
    this.starName = name;
    this.starStage = stage;
  }
}

class Planet extends Star {
  constructor(name, location, star, galaxy, universe){
    super(star.starName, star.starStage, galaxy, universe);
    this.planetName = name;
    this.planetLocation = location;
  }
}

class Continent extends Planet {
  constructor(name,location,planet, star, galaxy, universe){
    super(planet.planetName, planet.planetLocation, star, galaxy, universe);
    this.continentName = name;
    this.continentLocation = location;
  }
}

class Land extends Continent {
  constructor(type,location,continent,planet, star,galaxy, universe){
    super(continent.continentName, continent.continentLocation, continent,planet,star,galaxy,universe)
    this.landType = type;
    this.landLocation = location;
  }
}

class Village extends Land {
  constructor(name,vilLocation,land,continent, planet, star, galaxy, universe){
    super(land.landType, land.landLocation,continent, planet, star, galaxy, universe)
    this.villageName = name;
    this.villageLocation = vilLocation;
  }
}

class Family extends Village {
  constructor(name,lastName,village,land,continent,planet,star,galaxy,universe){
    super(village.villageName, village.villageLocation, land,continent,planet,star,galaxy,universe)
    this.familyName = name;
    this.familyLastName = lastName;
  }
}

class Person extends Family {
  constructor(name,color,family,village,land,continent,planet,star,galaxy,universe){
    super(family.familyName, family.familyLastName, village,land,continent,planet,star,galaxy,universe)
    this.personName = name;
    this.personFavColor = color;
  }
}

class Organ extends Person {
  constructor(organ,size,person,family,village,land,continent,planet,star,galaxy,universe){
    super(person.personName, person.personName, family,village,land,planet,star,galaxy,universe)
    this.organType = organ;
    this.organSize = size;
  }
}

class Cell extends Organ {
  constructor(cell,size,organ,person,family,village,land,continent,planet,star,galaxy,universe){
    super(organ.organType, organ.organSize, person,family,village,land,continent,planet,star,galaxy,universe)
    this.cellType = cell;
    this.cellSize = size;
  }
}

class Molecule extends Cell {
  constructor(type,size,cell,organ,person,family,village,land,continent,planet,star,galaxy,universe){
    super(cell.cellType,cell.cellSize, organ, person,family,village,land,continent,planet,star,galaxy,universe)
    this.moleculeType = type;
    this.moleculeSize = size;
  }
}

class Atom extends Molecule {
  constructor(type,size,molecule,cell,organ,person,family,village,land,continent,planet,star,galaxy,universe){
    super(molecule.moleculeType,molecule.moleculeSize,cell,organ,person,family,village,land,continent,planet,star,galaxy,universe)
  this.atomType = type;
  this.atomSize = size;
  }
  tellStory(){
    // return  `test ${this.moleculeType} test`
    return `hello, this is a story about ${this.personName} and their ${this.organType} as they are a person in this ${this.universeName} lol. what makes up life for humans would be ${this.atomType} on the planet ${this.planetName}`
  }
}
let myUniverse = new Universe("The Pasta Universe", "Five ravioli");

let myGalaxy = new Galaxy("Andromeda", "...left?", myUniverse);

let myStar = new Star("Corey", "Red Giant", myGalaxy, myUniverse);

let myPlanet = new Planet("Earth", "next to mars", myStar, myGalaxy, myUniverse )

let myContinent = new Continent("Asia","Pacific", myPlanet,myStar,myGalaxy,myUniverse);

let myLand = new Land("soil","in the east",myContinent,myPlanet,myStar,myGalaxy,myUniverse )

let myVillage = new Village("Isson","Asia",myLand,myContinent,
myPlanet,myStar,myGalaxy, myUniverse)

let myFamily = new Family("Jonathan","David", myVillage,myLand,myContinent,myPlanet,myStar,myGalaxy,myUniverse)

let myPerson = new Person("Simonne", "purple", myFamily,myVillage,myLand,myContinent,myPlanet, myStar,myGalaxy,myUniverse)

let myOrgan = new Organ("heart","large",myPerson, myFamily,myVillage,myLand,myContinent,myPlanet, myStar,myGalaxy,myUniverse)

let myCell = new Cell("blood Cell","small",myOrgan,myPerson,myFamily,myVillage,myLand,myContinent,myPlanet,myStar,myGalaxy, myUniverse)

let myMolecule = new Molecule("protiens","small", myCell, myOrgan,myPerson, myFamily, myVillage,myLand,myContinent,myPlanet,myStar,myGalaxy,myUniverse)
let myAtom = new Atom("Water","small",myMolecule,myCell,myOrgan,myPerson,myFamily,myVillage,myLand,myContinent,myPlanet,myStar,myGalaxy,myUniverse);

console.log(myAtom.tellStory());
