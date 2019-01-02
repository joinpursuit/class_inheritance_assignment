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
  constructor(universe, galaxy, name, color, age){
    super(universe, galaxy.galaxyName, galaxy.galaxySize)
    this.starName = name;
    this.starColor = color;
    this.starAge = age
  }

  // tellStory(){
  //   return `${this.starName} is a ${this.starColor} star in the ${this.galaxyName} galaxy and is REALLY not that cool.`
  // }
}

class Planet extends Star {
  constructor(universe, galaxy, star, name, temperature, age){
    super(universe, galaxy, star.starName, star.starColor, star.starAge)
    this.planetName = name;
    this.planetTemperature = temperature;
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
    this.personFullName = name;
    this.personGender = gender;
    this.personAge = age;
  }
}

class Organ extends Person {
  constructor(universe, galaxy, star, planet, continent, land, village, family, person, name, status){
    super(universe, galaxy, star, planet, continent, land, village, family, person.personFullName, person.personGender, person.personAge)
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
  constructor(universe, galaxy, star, planet, continent, land, village, family, person, organ, cell, molecule, name, quantity, charge){
    super(universe, galaxy, star, planet, continent, land, village, family, person, organ, cell, molecule.moleculeName, molecule.moleculeStructure)
    this.atomName = name;
    this.atomQuantity = quantity;
    this.atomCharge = charge;
  }

  tellStory(){
    return `This is a ${this.atomCharge} atom in a ${this.moleculeName} molecule. It lives in a ${this.cellName} cell in the ${this.organName} of ${this.personFullName}. ${this.personFullName} belongs to the ${this.familyName} family in the village of ${this.villageName}. The village of ${this.villageName} is in ${this.continentClimate} climate on the continent of ${this.continentName}. The continent of ${this.continentName} is on a ${this.planetTemperature} planet orbiting a ${this.starColor} star that's ${this.starAge}. This star is part of the ${this.galaxyName} Galaxy in the ${this.universeName} Universe.`
  }
}


let myUniverse = new Universe('Andromeda', 25452);
let myGalaxy = new Galaxy(myUniverse, 'Auro', 5342)
let myStar = new Star(myUniverse, myGalaxy, 'Haala', 'blue', '8 billion billion years old')
let myPlanet = new Planet(myUniverse, myGalaxy, myStar, 'Round', 'moderately warm', '7 thousand year old');
let myContinent = new Continent(myUniverse, myGalaxy, myStar, myPlanet, 'Aliah', 'an equatorial')
let myLand = new Land(myUniverse, myGalaxy, myStar, myPlanet, myContinent, 'Lana', 'northeast')
let myVillage = new Village(myUniverse, myGalaxy, myStar, myPlanet, myContinent, myLand, 'VillageHere', 'Kila Asberse')
let myFamily = new Family(myUniverse, myGalaxy, myStar, myPlanet, myContinent, myLand, myVillage, 'Asberse', 'Fay')
let myPerson = new Person(myUniverse, myGalaxy, myStar, myPlanet, myContinent, myLand, myVillage, myFamily, 'Thalia Asberse', 'girl', 5)
let myOrgan = new Organ(myUniverse, myGalaxy, myStar, myPlanet, myContinent, myLand, myVillage, myFamily, myPerson, 'right kidney', 'healthy')
let myCell = new Cell(myUniverse, myGalaxy, myStar, myPlanet, myContinent, myLand, myVillage, myFamily, myPerson, myOrgan, 'nephron', 'medulla')
//https://en.wikipedia.org/wiki/Kidney#Microanatomy
let myMolecule = new Molecule(myUniverse, myGalaxy, myStar, myPlanet, myContinent, myLand, myVillage, myFamily, myPerson, myOrgan, myCell, 'water', 'H2O')
let myAtom = new Atom(myUniverse, myGalaxy, myStar, myPlanet, myContinent, myLand, myVillage, myFamily, myPerson, myOrgan, myCell, myMolecule, 'hydrogen', '2', 'positively-charged')



console.log(`*\n`, myAtom, `\n*`);
console.log(`**\n`, myAtom.universeName, `\n**`);
console.log(`***\n`, myAtom.tellStory(), `\n***`);
