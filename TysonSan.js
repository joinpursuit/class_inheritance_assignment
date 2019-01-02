class Universe {
	constructor(name) {
		this.universeName = name;
	}
}

class Galaxy extends Universe {
	constructor(universe,name) {
		super(universe.universeName);
		this.galaxyName = name;
	}
}

class Star extends Galaxy {
  constructor(galaxy,starName, starSize){
    super(galaxy,galaxy.galaxyName)
    this.starName =starName;
    this.starSize =starSize;
  }
};

class Planet extends Star {
  constructor(star,planetName){
    super(star,star.starName,star.starSize)
    this.planetName = planetName;
  }
}

class Continent extends Planet {
  constructor(planet,continentName, continentNumber) {
    super(planet,planet.planetName);
    this.continentName = continentName;
    this.continentNumber = continentNumber;
  }
}

class Land extends Continent {
  constructor(continent,landElement,landColor,landName) {
    super(continent,continent.continentName,continent.continentNumber);
    this.landElement = landElement;
    this.landColor = landColor;
    this.landName = landName
  }
}
class Village extends Land {
  constructor(land,villagetype,villageeconomy) {
    super(land,land.landElement,land.landColor,land.landName);
    this.villagetype = villagetype;
    this.villageeconomy = villageeconomy;
  }
}
class Family extends Village {
  constructor(village,familySpecies,familyRace) {
    super(village,village.villagetype,village.villageeconomy);
    this.familySpecies = familySpecies;
    this.familyRace = familyRace;
  }
}

class Person extends Family {
  constructor(family,personName,personSurname) {
    super(family,family.familySpecies,family.familyRace);
    this.personName= personName;
    this.personSurname = personSurname;
  }
}

class Organ extends Person {
  constructor(person,organLiverName,organHeartChambers) {
    super(person,person.personName,person.personSurname);
    this.organLiverName = organLiverName;
    this.organHeartChambers = organHeartChambers;
  }
}

class Cell extends Organ {
  constructor(organ,cellClasses, cellWalls) {
    super(organ,organ.organLiverName,organ.organHeartChambers);
    this.cellClasses = cellClasses;
    this.cellWalls = cellWalls;
  }
}
class Molecule extends Cell {
  constructor(cell,moleculeBubbles, moleculeElements) {
    super(cell,cell.cellClasses,cell.cellWalls);
    this.moleculeBubbles = moleculeBubbles;
    this.moleculeElements = moleculeElements;
  }
}

class Atom extends Molecule {
  constructor(molecule,atomtexteditor, atomHelixNumber) {
    super(molecule,molecule.moleculeBubbles,molecule.moleculeElements);
    this.atomtexteditor = atomtexteditor;
    this.atomHelixNumber = atomHelixNumber;
  }
}

const myUniverse = new Universe("AllThings");
const myGalaxy = new Galaxy(myUniverse,"Andromeda");
const myStar = new Star(myGalaxy,"Orion","this many");
const myPlanet = new Planet(myStar,'Saturn')
const myContinent = new Continent(myPlanet,"MURICA",1);
const myLand = new Land(myContinent,'earth','purple','Land of the Lay o Lands');
const myVillage = new Village(myLand,'medieval','fuedal');
const myFamily = new Family(myVillage,'humana','chino-latino')
const myPerson = new Person(myFamily,'C4Q','Pursuit')
const myOrgan = new Organ(myPerson,'Jacks Liver',99)
const myCell = new Cell(myOrgan,'workers & killerbees','thiccboii many walls here')
const myMolecule = new Molecule(myCell,'bloop, blop, bloopity','Earth,Wind and Fire');
const myAtom = new Atom(myMolecule,'Atom',77)

// console.log(myContinent);
// console.log(myLand);
// console.log(myVillage);
// console.log(myPerson);
// console.log(myOrgan);
// console.log(myCell);
console.log(myAtom.starName);
