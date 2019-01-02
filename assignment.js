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
  constructor(name, age, galaxy, universe) {
    super(galaxy.galaxyName, galaxy.galaxyLocation, universe);
    this.starName = name;
    this.starAge = age;
  }
}

class Planet extends Star {
  constructor(name, size, star, galaxy, universe){
    super(star.starName, star.starAge, galaxy, universe);
    this.planetName = name;
    this.planetSize = size;
  }
}

class Continent extends Planet {
  constructor(name, planet, star, galaxy, universe) {
    super(planet.planetName, planet.planetSize, star, galaxy, universe);
    this.continentName = name;
  }
}

class Land extends Continent {
  constructor(name, mass, continent, planet, star, galaxy, universe){
    super(continent.continentName, planet, star, galaxy, universe);
    this.landName = name;
    this.landMass = mass;
  }
}

class Village extends Land {
  constructor(name, population, land, continent, planet, star, galaxy, universe){
    super(land.landName, land.landMass, continent, planet, star, galaxy, universe);
    this.villageName = name;
    this.villagePopulation = population;
  }
}

class Family extends Village {
  constructor(name, size, village, land, continent, planet, star, galaxy, universe){
    super(village.villageName, village.villagePopulation, land, continent, planet, star, galaxy, universe);
    this.familyName = name;
    this.familySize = size;
  }
}

class Person extends Family {
  constructor(name, family, village, land, continent, planet, star, galaxy, universe){
    super(family.familyName, family.familySize, village, land, continent, planet, star, galaxy, universe);
    this.personName = name;
  }
}

class Organ extends Person {
  constructor(name, location, person, family, village, land, continent, planet, star, galaxy, universe){
    super(person.personName, family, village, land, continent, planet, star, galaxy, universe);
    this.organName = name;
    this.organLocation = location;
  }
}

class Cell extends Organ {
  constructor(name, organ, person, family, village, land, continent, planet, star, galaxy, universe){
    super(organ.organName, organ.organLocation, person, family, village, land, continent, planet, star, galaxy, universe);
    this.cellName = name;
  }
}

class Molecule extends Cell {
  constructor(name, cell, organ, person, family, village, land, continent, planet, star, galaxy, universe){
    super(cell.cellName, organ, person, family, village, land, continent, planet, star, galaxy, universe);
    this.moleculeName = name;
  }
}

class Atom extends Molecule {
  constructor(name, mass, molecule, cell, organ, person, family, village, land, continent, planet, star, galaxy, universe){
    super(molecule.moleculeName, cell, organ, person, family, village, land, continent, planet, star, galaxy, universe);
    this.atomName = name;
    this.atomMass = mass;
  }

  tellStory(){
    return `This ${this.atomName} atom is in the ${this.moleculeName} molecule. It lives in a ${this.cellName} cell in the ${this.organName} of ${this.personName}. ${this.personName} belongs to the ${this.familyName} family in the village of ${this.villageName}. The village of ${this.villageName} is in the mean streets on the continent of ${this.continentName}. The continent of ${this.continentName} is on ${this.planetName} orbiting the ${this.starName} that's ${this.starAge} billion years old. The ${this.starName} is part of the ${this.galaxyName} in ${this.universeName}. ${this.personName}'s ${this.organName} is made of ${this.atomName}! LOL`
  }
}


let myUniverse = new Universe("The Entire Universe", "Infinity");
let myGalaxy = new Galaxy("The Milky Way", "Sagittarius Arm", myUniverse);
let myStar = new Star("Sun", 100, myGalaxy, myUniverse);
let myPlanet = new Planet("Earth", "12,376km", myStar, myGalaxy, myUniverse);
let myContinent = new Continent("North America", myPlanet, myStar, myGalaxy, myUniverse);
let myLand = new Land("New York", "54,556 mi²", myContinent, myPlanet, myStar, myGalaxy, myUniverse);
let myVillage = new Village("Brooklyn", "2.649 Billion", myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
let myFamily = new Family("Bain", 6, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
let myPerson = new Person("Jonelle", myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
let myOrgan = new Organ("heart", "thoracic cavity", myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
let myCell = new Cell("cardiomyocyte", myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
let myMolecule = new Molecule("micropeptide", myCell, myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse)
let myAtom = new Atom("gold", "196.96655 amu", myMolecule, myCell, myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse)


console.log(myAtom.tellStory());
