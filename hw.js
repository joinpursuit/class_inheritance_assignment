class Universe {
  constructor(name, size) {
    this.universeName = name;
    this.universeSize = size;
  }
}

class Galaxy extends Universe{
    constructor(name, location, universe){
        super(universe.universeName, universe.universeSize)
        this.galaxyName = name;
        this.galaxyLocation = location;
    }
}

class Star extends Galaxy{
    constructor(name, stage, galaxy, universe){
        super(galaxy.galaxyName, galaxy.galaxyLocation, universe)
        this.starName = name;
        this.starStage = stage;
    }
}

class Planet extends Star{
    constructor(name, distance, star, galaxy, universe){
        super(star.starName, star.starStage, galaxy, universe)
        this.planetName = name;
        this.planetDistance = distance;
    }
}

class Continent extends Planet{
    constructor(name, hemisphere, planet, star, galaxy, universe){
        super(planet.planetName, planet.planetDistance, star, galaxy, universe)
        this.continentName = name;
        this.continentHemisphere = hemisphere;
    }
}

class Land extends Continent{
    constructor(quality, continent, planet, star, galaxy, universe){
        super(continent.continentName, continent.continentHemisphere, planet, star, galaxy, universe)
        this.landQuality = quality;
    }
}

class Village extends Land {
    constructor(name, population, land, continent, planet, star, galaxy, universe){
        super(land.landQuality, continent, planet, star, galaxy, universe)
        this.villageName = name;
        this.villagePopulation = population;
    }
}

class Family extends Village {
    constructor(name, village, land, continent, planet, star, galaxy, universe){
        super(village.villageName, village.villagePopulation, land, continent, planet, star, galaxy, universe)
        this.familyName = name;
    }
}

class Person extends Family {
    constructor(name, age, family, village, land, continent, planet, star, galaxy, universe){
        super(family.familyName, village, land, continent, planet, star, galaxy, universe)
        this.personName = name;
        this.personAge = age;
    }
}

class Organ extends Person {
    constructor(name, person, family, village, land, continent, planet, star, galaxy, universe){
        super(person.personName, person.personAge, family, village, land, continent, planet, star, galaxy, universe)
        this.organName = name;
    }
}

class Cell extends Organ {
    constructor(type, organ, person, family, village, land, continent, planet, star, galaxy, universe){
        super(organ.organName, person, family, village, land, continent, planet, star, galaxy, universe)
        this.cellType = type;
    }
}

class Molecule extends Cell {
    constructor(type, cell, organ, person, family, village, land, continent, planet, star, galaxy, universe){
        super(cell.cellType, organ, person, family, village, land, continent, planet, star, galaxy, universe)
        this.moleculeType = type;
    }
}

class Atom extends Molecule {
    constructor(charge, molecule, cell, organ, person, family, village, land, continent, planet, star, galaxy, universe){
        super(molecule.moleculeType, cell, organ, person, family, village, land, continent, planet, star, galaxy, universe)
        this.atomCharge = charge;
    }
    tellStory(){
        return (`There was an atom ${this.atomCharge}-charged. It is a ${this.moleculeType} molecule in a ${this.cellType} cell inside the ${this.organName}. ${this.personName} was ${this.personAge}. He was a descendant of the ${this.familyName} family. They originated from ${this.villageName}, where they lived with ${this.villagePopulation}. Surrounded by ${this.landQuality} land in ${this.continentName} in the ${this.continentHemisphere} Hemisphere. Located in the planet ${this.planetName}, ${this.planetDistance} away from Earth. You could see ${this.starName}, that looks like an ${this.starStage}. This is ${this.galaxyName} for you, just ${this.galaxyLocation}. From ${this.universeName}, ${this.universeSize} from you.`);
        
    }
}

let myUniverse = new Universe("The 7th Universe", "3,959 mi");
let myGalaxy = new Galaxy("Andromeda", "South", myUniverse);
let myStar = new Star("Vega", "Average Star", myGalaxy, myUniverse);
let myPlanet = new Planet("Neptune", "10 Steps", myStar, myGalaxy, myUniverse);
let myContinent = new Continent("The Office", "Western", myPlanet, myStar, myGalaxy, myUniverse);
let myLand = new Land("dry", myContinent, myPlanet, myStar, myGalaxy, myUniverse);
let myVillage = new Village("Dunder Mifflin", "3 Aliens", myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
let myFamily = new Family("Scott", myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
let myPerson = new Person("Michael", 43, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
let myOrgan = new Organ("heart", myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
let myCell = new Cell("nerve", myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
let myMolecule = new Molecule("carbon", myCell, myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
let myAtom = new Atom("negative", myMolecule, myCell, myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);

console.log(myAtom.tellStory());