class Universe {
  constructor(name, size){
  this.universeName = name;
  this.universeSize = size
  }
}

class Galaxy extends Universe {
  constructor(name, location, universe){
    super(universe.universeName, universe.universeSize)
    this.galaxyName = name;
    this.galaxylocation = location
  }
}

class Star extends Galaxy {
  constructor(name, stage, galaxy, universe){
    super(galaxy.galaxyName, galaxy.galaxylocation, universe)
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
  constructor(name, size, hemisphere, planet, star, galaxy, universe){
    super(planet.planetName, planet.planetType, star, galaxy, universe)
    this.continentName = name;
    this.continentSize = size;
    this.hemisphere = hemisphere
  }
}

class Land extends Continent {
  constructor(name, size, terrain, continent, planet, star, galaxy, universe){
    super(continent.continentName, continent.continentSize, continent.continentHemisphere, planet, star, galaxy, universe)
      this.landName = name;
      this.landSize = size;
      this.landTerrain = terrain
  }
}

class Village extends Land {
  constructor(name, population, sqArea, elder, land, continent, planet, star, galaxy, universe){
    super(land.landName, land.landSize, land.landTerrain, continent, planet, star, galaxy, universe)
      this.village_Name = name;
      this.village_Population = population;
      this.village_SqArea = sqArea;
      this.village_Elder = elder;
  }
}

class Family extends Village {
  constructor(name, status, wealth, familySize, village, land, continent, planet, star, galaxy, universe ){
    super(village.village_Name, village.village_Population, village.village_SqArea, village.village_Elder, land, continent, planet, star, galaxy, universe)
      this.familyName = name;
      this.familyStatus = status;
      this.familyWealth = wealth;
      this.familySize = familySize;

  }
}

class Person extends Family {
  constructor(name, age, role, family, village, land, continent, planet, star, galaxy, universe){
    super(family.familyName, family.familyStatus, family.familyWealth, family.familySize, village, land, continent, planet, star, galaxy, universe)
      this.personName = name;
      this.personAge = age;
      this.personRole = role
  }
}

class Organ extends Person {
  constructor(name, functionality, location, person, family, village, land, continent, planet, star, galaxy, universe){
    super(person.personName, person.personAge, person.personRole, family, village, land, continent, planet, star, galaxy, universe)
      this.organName = name;
      this.organFunction = functionality;
      this.organLocation = location
  }
}

class Cell extends Organ {
  constructor(count, type, health, organ, person, family, village, land, continent, planet, star, galaxy, universe){
    super(organ.organName, organ.organFunction, organ.organLocation, person, family, village, land, continent, planet, star, galaxy, universe)
      this.cellCount = count;
      this.cellType = type;
      this.cellHealth = health
  }
}

class Molecule extends Cell {
  constructor(count, type, bond, cell, organ, person, family, village, land, continent, planet, star, galaxy, universe){
    super(cell.cellCount, cell.cellType, cell.cellHealth, organ, person, family, village, land, continent, planet, star, galaxy, universe)
    this.moleculeCount = count;
    this.moleculeType = type;
    this.moleculeBond = bond
  }
}

class Atom extends Molecule{
  constructor( massNumber, radioactiveDecay, state, molecule, cell, organ, person, family, village, land, continent, planet, star, galaxy, universe){
    super(molecule.moleculeCount, molecule.moleculeType, molecule.moleculeBond, cell, organ, person , family, village, land, continent, planet, star, galaxy, universe )
      this.massNumber = massNumber;
      this.radioactiveDecay= radioactiveDecay;
      this.state = state
  }
  tellStory(){
    return `This is the story of ${this.massNumber}; an ${this.moleculeBond} atom that has ${this.cellCount} cells all ${this.cellHealth} cells made up to create the ${this.organName} which is used for ${this.organFunction} located in ${this.personName}'s ${this.organLocation}. ${this.personName} is ${this.personAge} years old and is the ${this.personRole} of the ${this.familyName} that are ${this.familyStatus} of ${this.landName} with ${this.familyWealth} wealth because ${this.landName} has ${this.landTerrain}. ${this.landName} is located in the ${this.continentHemisphere} hemisphere on the ${this.continentName} continent. ${this.planetName} is home to ${this.continentName} and is a ${this.planetType} planet.  ${this.planetName} orbits the ${this.starName} star which is part of the ${this.galaxyName} Galaxy. ${this.galaxyName} is in the neighborhood of ${this.galaxylocation} which is just one of many galaxies in the ${this.universeName} that is ${this.universeSize}.`

  }
}


let myUniverse = new Universe('The Amazing Universe', 'Fucking Expansive');

let myGalaxy = new Galaxy('Andrameda', '...left?', myUniverse)

let myStar = new Star('Red Dragon', 'Red Giant', myGalaxy, myUniverse)

let myPlanet = new Planet('Planet Hulk', 'Rock', myStar, myGalaxy, myUniverse)

let myContinent = new Continent('Pangea', 1020202, 'Southern', myPlanet, myStar, myGalaxy, myUniverse)

let myLand = new Land('\'My Land\'', 'Uncharted', 'fertile soil', myContinent, myPlanet, myStar, myGalaxy, myUniverse)

let myVillage = new Village('The Kingdom', 25000, 15000000, 'Lord Birbal', myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse)

let myFamily = new Family('The Birbals', 'Lords', 'Generational', 40, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse)

let myPerson = new Person('Treagan', 98, 'The Go-Getter', myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse)

let myOrgan = new Organ('Kidney', 'sifting through blood to filter out waste', 'upper-back torso', myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse)

let myCell = new Cell(1000000000, 'blood cell', 'healthy', myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse)

let myMolecule = new Molecule(6, 'carbon', 'ionic', myCell, myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse)

let myAtom = new Atom ('carbon-12', 'Alpha', 'Plasma', myMolecule, myCell, myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse)

console.log(myAtom.personName)
console.log(myAtom.tellStory())
