class Universe {
  constructor (universeName, universeSize) {
    this.universeName = universeName
    this.universeSize = universeSize
  }
}

class Galaxy extends Universe {
  constructor (name, location, universe) {
    super(universe.universeName, universe.universeSize)
    this.galaxyLocation = location
    this.galaxyName = name
  }
}

class Star extends Galaxy {
  constructor (name, stage, galaxy, universe) {
    super(galaxy.galaxyName, galaxy.galaxyLocation, universe)
    this.starName = name
    this.starStage = stage
  }
}

class Planet extends Star {
  constructor (name, star, galaxy, universe) {
    super(star.starName, star.starStage, galaxy, universe)
    this.planetName = name
  }
}

class Continent extends Planet {
  constructor (name, population, planet, star, galaxy, universe) {
    super(planet.planetName, star, galaxy, universe)
    this.continentName = name
    this.continentPopulation = population
  }
}

class Land extends Continent {
  constructor (name, continent, planet, star, galaxy, universe) {
    super(
      continent.continentName,
      continent.continentPopulation,
      planet,
      star,
      galaxy,
      universe
    )
    this.landName = name
  }
}

class Village extends Land {
  constructor (
    name,
    typeOfVillagers,
    land,
    continent,
    planet,
    star,
    galaxy,
    universe
  ) {
    super(land.landName, continent, planet, star, galaxy, universe)
    this.villageName = name
    this.type = typeOfVillagers
  }
}

class Family extends Village {
  constructor (
    name,
    socialStatus,
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
      village.type,
      land,
      continent,
      planet,
      star,
      galaxy,
      universe
    )
    this.familyName = name
    this.socialStatus = socialStatus
  }
}

class Person extends Family {
  constructor (
    name,
    job,
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
      family.socialStatus,
      village,
      land,
      continent,
      planet,
      star,
      galaxy,
      universe
    )
    this.personName = name
    this.personJob = job
  }
}

class Organ extends Person {
  constructor (
    name,
    functionality,
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
      person.personJob,
      family,
      village,
      land,
      continent,
      planet,
      star,
      galaxy,
      universe
    )
    this.organName = name
    this.organFunction = functionality
  }
}

class Cell extends Organ {
  constructor (
    type,
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
      organ.organFunction,
      person,
      family,
      village,
      land,
      continent,
      planet,
      star,
      galaxy,
      universe
    )
    this.cellType = type
  }
}

class Molecule extends Cell {
  constructor (
    type,
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
      cell.cellType,
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
    )
    this.moleculeType = type
  }
}

class Atom extends Molecule {
  constructor (
    type,
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
      molecule.moleculeType,
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
    )
    this.atomType = type
  }

  tellStory () {
    console.log(`This is a ${this.atomType} atom in a ${
      this.moleculeType
    } molecule.
        It lives in a ${this.cellType} cell in the ${this.organName} of ${
  this.personName
}.
        ${this.personName} is the ${this.personJob} from the ${
  this.familyName
} family, residing in the village of ${this.villageName}.
        The village of ${this.villageName} is in the land of ${
  this.landName
} on the continent of ${this.continentName}.
        The continent of ${this.continentName} is on a moist planet called ${
  this.planetName
}.
        ${this.planetName} orbits ${this.starName} a star in the ${
  this.starStage
} stage.
        This star is part of the ${this.galaxyName} galaxy in the ${
  this.galaxyLocation
} of the ${this.universeName} Universe.`)
  }
}

const myUniverse = new Universe('Marvel', 1000)
const myGalaxy = new Galaxy('Milky Way', 'Weastern', myUniverse)
const myStar = new Star('Starman', 'Mario', myGalaxy, myUniverse)
const myPlanet = new Planet('Earth', myStar, myGalaxy, myUniverse)
const myContinent = new Continent(
  'Asia',
  9000,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
)
const myLand = new Land(
  'Seoul',
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
)
const myVillage = new Village(
  'Namek',
  'Saiyans',
  myLand,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
)
const myFamily = new Family(
  'Park',
  'KingsOfNoms',
  myVillage,
  myLand,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
)
const myPerson = new Person(
  'Jinsoo',
  'Nom Nom King',
  myFamily,
  myVillage,
  myLand,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
)
const myOrgan = new Organ(
  'appendix',
  'undefined',
  myPerson,
  myFamily,
  myVillage,
  myLand,
  myContinent,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
)
const myCell = new Cell(
  'blood',
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
)
const myMolecule = new Molecule(
  'protein',
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
)
const myAtom = new Atom(
  'negative',
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
)

myAtom.tellStory()
