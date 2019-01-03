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
  tellStory(){
    return `${this.atomtexteditor} is a panzy. ` + `${this.atomHelixNumber} does many things ` + `${this.moleculeBubbles} does the boppity boop. ` + `${this.moleculeElements} was here before the Fire Nation Attacked ` + `${this.cellWalls} is a panzy. ` + `${this.cellClasses} does many things ` + `${this.organLiverName} does the boppity boop. ` + `${this.organHeartChambers} was here before the Fire Nation Attacked ` + `${this.personName} is a panzy. ` + `${this.personSurname} does many things ` + `${this.familySpecies} does the boppity boop. ` + `${this.familyRace} was here before the Fire Nation Attacked ` + `${this.villagetype} is a panzy. ` + `${this.villageeconomy} does many things ` + `${this.landName} does the boppity boop. ` + `${this.landColor} was here before the Fire Nation Attacked ` + `${this.landElement} is a panzy. ` + `${this.continentName} does many things ` + `${this.continentNumbers} does the boppity boop. ` + `${this.planetName} was here before the Fire Nation Attacked ` + `${this.starName} is a panzy. ` + `${this.starSize} does many things ` + `${this.galaxyName} does the boppity boop. ` + `${this.universeName} was here before the Fire Nation Attacked `
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
console.log(myAtom.tellStory());

// Atom is a panzy. 77 does many things bloop, blop, bloopity does the boppity boop. Earth,Wind and Fire was here before the Fire Nation Attacked thiccboii many walls here is a panzy. workers & killerbees does many things Jacks Liver does the boppity boop. 99 was here before the Fire Nation Attacked C4Q is a panzy. Pursuit does many things humana does the boppity boop. chino-latino was here before the Fire Nation Attacked medieval is a panzy. fuedal does many things Land of the Lay o Lands does the boppity boop. purple was here before the Fire Nation Attacked earth is a panzy. MURICA does many things undefined does the boppity boop. Saturn was here before the Fire Nation Attacked Orion is a panzy. this many does many things Andromeda does the boppity boop. AllThings was here before the Fire Nation Attacked
