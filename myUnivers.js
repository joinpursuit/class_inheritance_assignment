class Universe {
  constructor(name, size) {
    this.universeName = name;
    this.universeSize = size;
  }
}

class Galaxy extends Universe {
  constructor(name, location, universe) {
  super(universe.universeName, universe.universeSize)
  this.galaxyName = name;
  this.galaxyLocation = location;
  }
}

class Star extends Galaxy {
  constructor(name, stage, galaxy, universe){
    super(galaxy.galaxyName, galaxy.galaxyLocation, universe)
    this.starName = name;
    this.starStage = stage;
  }
}

class Planet extends Star {
  constructor(name, type, star, galaxy, universe){
    super(star.starName, star.starStage, galaxy, universe)
    this.planetName = name;
    this.planetType = type;
  }
}

class Continent extends Planet {
  constructor(name, climate, population, planet, star, galaxy, universe){
    super(planet.planetName, planet.planetType, star, galaxy, universe)
    this.continentName = name;
    this.continentClimate = climate;
    this.continentPopulation = population;
  }
}

class Land extends Continent {
  constructor(name, type, population, continent, planet, star, galaxy, universe){
    super(continent.continentName, continent.continentClimate, continent.continentPopulation, planet, star, galaxy, universe)
    this.landName = name;
    this.landType = type;
    this.landPopulation = population;
  }
}

class Village extends Land {
  constructor(name, population, tribe, land, continent, planet, star, galaxy, universe){
    super(land.landName, land.landType, land.landPopulation, continent, planet, star, galaxy, universe)
    this.villageName = name;
    this.villagePopulation = population;
    this.villageTribe = tribe;
  }
}

class Family extends Village {
  constructor(name, members, village, land, continent, planet, star, galaxy, universe){
    super(village.villageName, village.villagePopulation, village.villageTribe, land, continent, planet, star, galaxy, universe)
    this.familyName = name;
    this.familyMembers = members;
  }
}

class Person extends Family {
  constructor(name, age, title, family, village, land, continent, planet, star, galaxy, universe){
    super(family.familyName, family.familyMembers, village, land, continent, planet, star, galaxy, universe)
    this.personName = name;
    this.personAge = age;
    this.personTitle = title;
  }
}

class Organ extends Person {
  constructor(name, health, person, family, village, land, continent, planet, star, galaxy, universe){
    super(person.personName, person.personAge, person.personTitle, family, village, land, continent, planet, star, galaxy, universe)
    this.organName = name;
    this.organHealth = health;
  }
}

class Cell extends Organ {
  constructor(id, type, organ, person, family, village, land, continent, planet, star, galaxy, universe){
    super(organ.organName, organ.organHealth, person, family, village, land, continent, planet, star, galaxy, universe)
    this.cellId = id;
    this.cellType = type;
  }
}

class Molecule extends Cell {
  constructor(id, type, cell, organ, person, family, village, land, continent, planet, star, galaxy, universe){
    super(cell.cellId, cell.cellType, organ, person, family, village, land, continent, planet, star, galaxy, universe)
    this.moleculeId = id;
    this.moleculeType = type;
  }
}

class Atom extends Molecule {
  constructor(name, type, molecule, cell, organ, person, family, village, land, continent, planet, star, galaxy, universe){
    super(molecule.moleculeId, molecule.moleculeType, cell, organ, person, family, village, land, continent, planet, star, galaxy, universe)
    this.atomName = name;
    this.atomType = type;


    this.tellStory = () => {
  return(`${this.atomName} is a ${this.atomType} atom inside of ${this.moleculeType} ID number ${this.moleculeId}. It is located of a ${this.cellType} Cell ID number ${this.cellId}. It is located inside of the ${this.organName} which is in ${this.organHealth} condition. This organ belongs to ${this.personName} who is ${this.personAge} years old and is the ${this.personTitle} of the ${this.familyName} family which has ${this.familyMembers} members. They live in the ${this.villageName} village with ${this.villagePopulation} residents made up of the ${this.villageTribe} tribe. This village is located in the land of ${this.landName}, with a population of ${this.landPopulation}. This land is mostly ${this.landType}. It is located on the continent of ${this.continentName} where ${this.continentPopulation} fae live and enjoy the ${this.continentClimate} climate. This continent is on the ${this.planetType} named ${this.planetName}. The planet has one  star named ${this.starName}  that is currently a ${this.starStage}. This star is located in the Galaxy ${this.galaxyName} that lies within ${this.galaxyLocation}. This is all located in ${this.universeName} that is an estimated ${this.universeSize}.`)
    }
  }
}


let myUniverse =  new Universe('Twinkleverse', '28 billion parsecs')
let myGalaxy = new Galaxy('Galaxia', 'Hell', myUniverse)
let myStar = new Star('Glitter Death', 'Yellow Dwarf', myGalaxy, myUniverse)
let myPlanet = new Planet('Shimmery Hell', 'Lava Planet', myStar, myGalaxy, myUniverse)
let myContinent = new Continent('Azkaban', 'Firey', 1287920000, myPlanet, myStar, myGalaxy, myUniverse)
let myLand = new Land('Sizzle', 'Firey Forest', 458000, myContinent, myPlanet, myStar, myGalaxy, myUniverse)
let myVillage = new Village('Ember Paths', 700, 'Fire Fae', myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse)
let myFamily = new Family('Sparkbranch', 6, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse)
let myPerson = new Person('Lily Sparkbranch', 504, 'Little Sister', myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse)
let firstOrgan = new Organ('2nd Liver', 'Excellent', myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse)
let cell1 = new Cell('50029', 'Glial', firstOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse)
let molecule1 = new Molecule('298729', 'Lipid', cell1, firstOrgan,myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse)
let atom1 = new Atom('Bob', 'Radioactive', molecule1, cell1, firstOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse)

console.log(atom1.tellStory())
