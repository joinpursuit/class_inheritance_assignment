class Universe {
  constructor (name) {
    this.universeName = name
  }
    
  };

  class Galaxy extends Universe {
    constructor(newUniverse, name) {
    super(newUniverse.universeName)
      // console.log(Universe.name)
    this.galaxyName = name
    }
  }

  class Star extends Galaxy {
    constructor(newGalaxy,name) {
      super(newGalaxy,newGalaxy.galaxyName)
      // console.log(newGalaxy)
      this.starName = name

    }
  }

class Planet extends Star {
  constructor(newStar, name) {
    super(newStar,newStar.starName)
    // console.log(newStar)
    this.planetName = name

  }
}

class Continent extends Planet {
  constructor(newPlanet, name) {
    super(newPlanet,newPlanet.planetName)
      this.continentName = name

  }
}

class Land extends Continent {
  constructor(newCont, name) {
    super(newCont, newCont.continentName)
    this.landName = name

  }
}

class Village extends Land {
  constructor(newLand, name) {
    super(newLand)
    this.villageName = name
    this.landName = newLand.landName

  }
}

class Family extends Village {
  constructor(newVillage, name){
    super(newVillage, newVillage.villageName)
    this.familyName = name
  }
}

class Person extends Family {
  constructor (newFamily, name){
    super(newFamily, newFamily.familyName)
    this.personName = name
  }
}

class Organ extends Person {
  constructor (newPerson, name) {
    super(newPerson,newPerson.personName)
    this.organName = name
  }
  
}

class Cell extends Organ {
  constructor(newOrgan,nameOfcell) {
    super(newOrgan,newOrgan.organName)
    this.cellName = nameOfcell
  }
}

class Molecule extends Cell {
  constructor (newCell,name) {
    super(newCell)
    this.moleName = name
    this.cellName = newCell.cellName

  }
  
}

class Atom extends Molecule {
  constructor (newMolecule,name,charge){
    super(newMolecule,newMolecule.moleName)
  this.atomName = name
  this.charged = charge
  }

  tellStory() {
    return `This is a ${this.charged} charged atom in a ${this.atomName}. It lives in a ${this.cellName}  in the ${this.organName} of ${this.personName}. ${this.personName} belongs to the ${this.familyName} in the village of ${this.villageName}. The village of ${this.villageName} is in ${this.landName} on the continent of ${this.continentName}. The continent of ${this.continentName} is on the planet ${this.planetName} orbiting ${this.starName} that's 3 billion years old. This star is part of the ${this.galaxyName} in the ${this.universeName}.`
  }
}

const newUniverse = new Universe("Universe 101")

const newGalaxy = new Galaxy(newUniverse,"Galaxy 202")
 
const newStar = new Star(newGalaxy,"Star 303")

const newPlanet = new Planet(newStar,"Planet 212")

const newCont = new Continent(newPlanet,"Continent 123")

const newLand = new Land (
  newCont,"The Land of Astoria"
)

const newVillage = new Village (
  newLand, "SeeSaw Village"
)

const newFamilia = new Family (
  newVillage, "Pursuit 5.0 Family"
)

const newPerson = new Person (newFamilia, "Tyson")

const newOrgan = new Organ (newPerson, "Liver Organ")

const newCell = new Cell(
  newOrgan, "Kupffer Cells"
)

const newMolecule = new Molecule (
  newCell, "H20"
)

const newAtom = new Atom (
  newMolecule,"Hydrogen", "negtive"
)


console.log(newAtom.tellStory())

console.log(newAtom)




