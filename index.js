class Universe {
  constructor(name, size) {
    this.universeName = name;
    this.universeSize = size;//name explicitly
  }
}

class Galaxy extends Universe {
  constructor(universe, name, size){
    super(universe.universeName, universe.universeSize)
    // super(universe)
    this.galaxyName = name;
    this.galaxySize = size;
  }
}

class Star extends Galaxy{
  constructor(universe, galaxy, name, color){
    super(universe, galaxy.galaxyName, galaxy.galaxySize)
    this.starName = name;
    this.starColor = color;
  }

  tellStory(){
    return `${this.starName} is a ${this.starColor} star in the ${this.galaxyName} galaxy and is REALLY not that cool.`
  }
}

class Planet extends Star {
  constructor(universe, galaxy, star, name, age){
    super(universe, galaxy, star.starName, star.starColor)
    this.planetName = name;
    this.planetAge = age;
  }
}

class Continent extends Planet {
  constructor(universe, galaxy, star, planet, name, climate){
    super(universe, galaxy, star, planet.planetName, planet.planetAge)
    this.continentName = name;
    this.continentClimate = climate;
  }
}

class Land extends Continent {
  constructor(universe, galaxy, star, planet, continent, name, region){
    super(universe, galaxy, star, planet, continent.continentName, continent.continentClimate)
    this.landName = name;
    this.landRegion = region;
  }
}

class Village extends Land {
  constructor(universe, galaxy, star, planet, continent, land, name, chief){
    super(universe, galaxy, star, planet, continent, land.landName, land.landRegion)
    this.villageName = name;
    this.villageChief = chief;
  }
}

class Family extends Village {
  constructor(universe, galaxy, star, planet, continent, land, village, surname, headOfHouse){
    super(universe, galaxy, star, planet, continent, land, village.villageName, village.villageChief)
    this.familyName = surname;
    this.familyHOH = headOfHouse;
  }
}

class Person extends Family {
  constructor(universe, galaxy, star, planet, continent, land, village, family, name, gender, age){
    super(universe, galaxy, star, planet, continent, land, village, family.familyName, family.familyHOH)
    this.personFirstName = name;
    this.personGender = gender;
    this.personAge = age;
  }
}

class Organ extends Person {
  constructor(universe, galaxy, star, planet, continent, land, village, family, person, name, status){
    super(universe, galaxy, star, planet, continent, land, village, family, person.personFirstName, person.personGender, person.personAge)
    this.organName = name;
    this.organStatus = status;
  }
}

class Cell extends Organ {
  constructor(universe, galaxy, star, planet, continent, land, village, family, person, organ, name, layer){
    super(universe, galaxy, star, planet, continent, land, village, family, person, organ.organName, organ.organStatus)
    this.cellName = name;
    this.cellLayer = layer;
  }
}

class Molecule extends Cell {
  constructor(universe, galaxy, star, planet, continent, land, village, family, person, organ, cell, name, structure){
    super(universe, galaxy, star, planet, continent, land, village, family, person, organ, cell.cellName, cell.cellLayer)
    this.moleculeName = name;
    this.moleculeStructure = structure;
  }
}

class Atom extends Molecule {
  constructor(universe, galaxy, star, planet, continent, land, village, family, person, organ, cell, molecule, quantity, composition){
    super(universe, galaxy, star, planet, continent, land, village, family, person, organ, cell, molecule.moleculeName, molecule.moleculeStructure)
    this.atomQuantity = quantity;
    this.atomComposition = composition;
  }
}


let myUniverse = new Universe('Andromeda', 25452);
let myGalaxy = new Galaxy(myUniverse, 'Auro', 5342)
let myStar = new Star(myUniverse, myGalaxy, 'Haala', 'blue')
let myPlanet = new Planet(myUniverse, myGalaxy, myStar, 'Round', 4352534);
let myContinent = new Continent(myUniverse, myGalaxy, myStar, myPlanet, 'Aliah', 'equatorial')
let myLand = new Land(myUniverse, myGalaxy, myStar, myPlanet, myContinent, 'Lana', 'northeast')
let myVillage = new Village(myUniverse, myGalaxy, myStar, myPlanet, myContinent, myLand, 'VillageHere', 'Kila Asberse')
let myFamily = new Family(myUniverse, myGalaxy, myStar, myPlanet, myContinent, myLand, myVillage, 'Asberse', 'Fay')
let myPerson = new Person(myUniverse, myGalaxy, myStar, myPlanet, myContinent, myLand, myVillage, myFamily, 'Thalia Asberse', 'girl', 5)
let myOrgan = new Organ(myUniverse, myGalaxy, myStar, myPlanet, myContinent, myLand, myVillage, myFamily, myPerson, 'right kidney', 'healthy')
let myCell = new Cell(myUniverse, myGalaxy, myStar, myPlanet, myContinent, myLand, myVillage, myFamily, myPerson, myOrgan, 'papilla /nephron', 'medulla')
//https://en.wikipedia.org/wiki/Kidney#Microanatomy
let myMolecule = new Molecule(myUniverse, myGalaxy, myStar, myPlanet, myContinent, myLand, myVillage, myFamily, myPerson, myOrgan, myCell, 'water', 'H2O')
let myAtom = new Atom(myUniverse, myGalaxy, myStar, myPlanet, myContinent, myLand, myVillage, myFamily, myPerson, myOrgan, myCell, myMolecule, 3, '2 hydrogens, 1 oxygen')


// console.log(`* \n`,myMolecule, `\n *`);
console.log(`* \n`,myAtom, `\n *`);
// console.log('**',myStar.universeName,'**');
// console.log('***',myStar.tellStory(),'***');
