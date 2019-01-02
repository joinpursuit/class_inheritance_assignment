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
  constructor(name, color, star, galaxy, universe) {
    super(star.starName, star.starAge, galaxy, universe);
      this.planetName = name;
      this.planetColor = color;
  }
}

class Continent extends Planet {
  constructor(name, planet, star, galaxy, universe) {
    super(planet.planetName, planet.planetColor, star, galaxy, universe);
    this.continentName = name;
  }
}

class Land extends Continent {
  constructor(name, population, continent, planet, star, galaxy, universe) {
    super(continent.continentName, planet, star, galaxy, universe);
    this.landName = name;
    this.landPopulation = population;
  }
}

class Village extends Land {
  constructor(name, size, land, continent, planet, star, galaxy, universe) {
    super(land.landName, land.landPopulation, continent, planet, star, galaxy, universe);
    this.villageName = name;
    this.villageSize = size;
  }
}

class Family extends Village {
  constructor(name, race, village, land, continent, planet, star, galaxy, universe) {
    super(village.villageName, village.villageSize, land, continent, planet, star, galaxy, universe)
    this.familyName = name;
    this.familyRace = race;
  }
}

class Person extends Family {
  constructor(name, age, gender, family, village, land, continent, planet, star, galaxy, universe) {
    super(family.familyName, family.familyRace, village, land, continent, planet, star, galaxy, universe);
    this.personName = name;
    this.personAge = age;
    this.personGender = gender;
  }
}

class Organ extends Person {
  constructor(name, person, family, village, land, continent, planet, star, galaxy, universe) {
    super(person.personName, person.personAge, person.personGender, family, village, land, continent, planet, star, galaxy, universe);
    this.organName = name;
  }
}

class Molecule extends Organ {
  constructor(name, organ, person, family, village, land, continent, planet, star, galaxy, universe) {
    super(organ.organName, person, family, village, land, continent, planet, star, galaxy, universe);
    this.moleculeName = name;
  }
}

class Atom extends Molecule {
  constructor(name, molecule, organ, person, family, village, land, continent, planet, star, galaxy, universe) {
    super(molecule.moleculeName, organ, person, family, village, land, continent, planet, star, galaxy, universe);
    this.atomName = name;
  }
  tellStory() {
    return `The ${this.universeName} is ${this.universeSize}. It has many Galaxies, but one of them is the ${this.galaxyName} galaxy which is on the ${this.galaxyLocation} of the universe. We have a solar system there that has a huge star called the ${this.starName} which is ${this.starAge}.

    We found a planet called ${this.planetName} in this solar system and people usually refers to it as the ${this.planetColor} planet. in the ${this.continentName}, there is a small island called ${this.landName}. ${this.landName} has a population of ${this.landPopulation}.

    In the village of ${this.villageName} is where my sister ${this.personName} is born. she is ${this.familyRace}. we came from the ${this.familyName}. she is the only ${this.personGender} in my family. she is current ${this.personAge} and is having a little issue in her ${this.organName} because the ${this.moleculeName} is ${this.atomName}.`
  }
}


let myUniverse = new Universe("Gomer", "very large");
let myGalaxy = new Galaxy("giganta", "leftSide", myUniverse);
let myStar = new Star("Sun", 2901010, myGalaxy, myUniverse);
let myPlanet = new Planet("Earth", "blue", myStar, myGalaxy, myUniverse);
let myContinent = new Continent("Carrebean", myPlanet, myStar, myGalaxy, myUniverse);
let myLand = new Land("Haiti", 19827213, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
let myVillage = new Village("Santo", "97359 square feet", myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
let myFamily = new Family("Mezalon", "African American", myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
let myPerson = new Person("Cassandra Mezalon", 25, "Female", myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
let myOrgan = new Organ("Uteris", myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
let myMolucule = new Molecule("carbon", myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
let myAtom = new Atom("negatively-charged", myMolucule, myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);


console.log(myAtom.tellStory())
