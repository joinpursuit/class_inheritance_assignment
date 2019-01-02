
class Universe {
  constructor(universeName, universeSize) {
    this.universeName = universeName;
    this.universeSize = universeSize;
  }
}

class Galaxy extends Universe {
  constructor(galaxyName, galaxyLocation, universe) {
    super(universe.universeName, universe.universeSize)
    this.galaxyName = galaxyName;
    this.galaxyLocation = galaxyLocation;
  }
    expand() {
      return `${this.galaxyName} is expanding into infinity`
    }
}

class Star extends Galaxy {
  constructor(starType, starColor, galaxy, universe) {
    super(galaxy.galaxyName, galaxy.galaxyLocation, universe) //Galaxy's super already imports the universe attributes specifically.
    this.starType = starType;
    this.starColor = starColor;
  }
}

class Planet extends Star {
  constructor(course, temperature, star, galaxy, universe) {
    super(star.starType, star.starColor, galaxy, universe)
    this.planetCourse = course;
    this.planetTemperature = temperature;
  }
}

class Continent extends Planet {
  constructor(size, name, planet, star, galaxy, universe) {
    super(planet.planetCourse, planet.planetTemperature, star, galaxy, universe)
    this.continentSize = size;
    this.continentName = name;
  }
}

class Land extends Continent {
  constructor(name, geo, continent, planet, star, galaxy, universe) {
    super(continent.continentSize, continent.continentName, planet, star, galaxy, universe)
    this.landName = name;
    this.landGeo = geo;
  }
}

class Village extends Land {
  constructor(architecture, population, land, continent, planet, star, galaxy, universe) {
    super(land.landName, land.landGeo, continent, planet, star, galaxy, universe)
    this.villageArchitecture = architecture;
    this.villagePopulation = population;
  }
}

class Family extends Village {
  constructor(roots, size, village, land, continent, planet, star, galaxy, universe) {
    super(village.villageArchitecture, village.villagePopulation, land, continent, planet, star, galaxy, universe);
    this.familyRoots = roots;
    this.familySize = size;
  }
}
class Person extends Family {
  constructor(name, craft, family, village, land, continent, planet, star, galaxy, universe) {
    super(family.familyRoots, family.familySize, village, land, continent, planet, star, galaxy, universe);
    this.personName = name;
    this.personCraft = craft;
  }
}
class Organ extends Person {
  constructor(name, role, person, family, village, land, continent, planet, star, galaxy, universe) {
    super(person.personName, person.personCraft, family, village, land, continent, planet, star, galaxy, universe);
    this.organName = name;
    this.organRole = role;
  }
}

class Cell extends Organ {
  constructor(size, type, organ, person, family, village, land, continent, planet, star, galaxy, universe) {
    super(organ.organName, organ.organRole, person, family, village, land, continent, planet, star, galaxy, universe);
    this.cellSize = size;
    this.cellType = type;
  }
}

class Molecule extends Cell {
  constructor(structure, cell, organ, person, family, village, land, continent, planet, star, galaxy, universe) {
    super(cell.cellSize, cell.cellType, organ, person, family, village, land, continent, planet, star, galaxy, universe);
    this.moleculeStructure = structure;
  }
}


class Atom extends Molecule {
  constructor(charge, complexity, molecule, cell, organ, person, family, village, land, continent, planet, star, galaxy, universe) {
    super(molecule.moleculeStructure, cell, organ, person, family, village, land, continent, planet, star, galaxy, universe);
    this.atomCharge = charge;
    this.atomComplexity = complexity;
  }

  tellStory() {
    return `This ${this.atomCharge}ly charged atom's complexity is ${this.atomComplexity}. It is found in the ${this.moleculeStructure} molecule which is the building block of the ${this.cellType} cells. Those ${this.cellType} cells compile the ${this.organRole} ${this.organName} organ, which belongs to ${this.personName}, the ${this.personCraft} from a ${this.familyRoots} family in a size of ${this.familySize}. ${this.personName} lives in a ${this.villageArchitecture} architecture type village in a ${this.landGeo} land of ${this.landName}, in the ${this.continentSize} continent ${this.continentName}. ${this.personName} occasionally gets too cold on this planet (it is ${this.planetTemperature} after all), so he often makes visits to the ${this.starColor} ${this.starType} stars. The stars occasionaly transport themselves into different galaxies. This time, ${this.personName} found himself transporting into the ${this.galaxyName} in the ${this.galaxyLocation} of the ${this.universeSize} ${this.universeName} universe.`
  }
}

let myUni = new Universe("Yoonéverz", "real big")
let myGal = new Galaxy("Gallie", "middle", myUni)
let myStar = new Star("Starch", "blue", myGal, myUni)
let myPlanet = new Planet("Round", "-70C", myStar, myGal, myUni)
let myContinent = new Continent("20sq meters", "Smitana", myPlanet, myStar, myGal, myUni)
let myLand = new Land("Zimbalulu", "Mushroomious", myContinent, myPlanet, myStar, myGal, myUni)
let myVillage = new Village("Freudian", "Green", myLand, myContinent, myPlanet, myStar, myGal, myUni)
let myFamily = new Family("Batatian", "more than they can handle", myVillage, myLand, myContinent, myPlanet, myStar, myGal, myUni)
let myPerson = new Person("Babama", "Mind-blower", myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGal, myUni)
let myOrgan = new Organ("Guts", "Metaphysical Signals Digestion", myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGal, myUni)
let myCell = new Cell("1pt", "stem", myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGal, myUni)
let myMolecule = new Molecule("C-4-Q", myCell, myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGal, myUni)
let myAtom = new Atom("positive", "level_2", myMolecule, myCell, myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGal, myUni)

console.log(myAtom.tellStory());
