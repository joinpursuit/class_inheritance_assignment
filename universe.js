class Universe {
    constructor(name, size) {
        this.universeName = name;
        this.universeSize = size; 
    }
}
const myUniverse = new Universe('Xenoverse', 'constantly expanding');

class Galaxy extends Universe {
    constructor(name, size, universe) {
        super(universe.universeName, universe.universeSize);
        this.galaxyName = name;
        this.galaxySize = size;
    }
}
const myGalaxy = new Galaxy('Silky Way', 'slowly expanding', myUniverse);

class Star extends Galaxy {
    constructor(name, stage, galaxy, universe) {
        super(galaxy.galaxyName, galaxy.galaxySize, universe);
        this.starName = name;
        this.starStage = stage;
    }
}
const myStar = new Star('Siriusly Bruv 9', 'purple dwarf', myGalaxy, myUniverse)

class Planet extends Star {
        constructor(name, size, star, galaxy, universe) {
                super(star.starName, star.starStage, galaxy, universe);
                this.planetName = name;
                this.planetSize = size;
            }
        }
        
const myPlanet = new Planet('Knowhere', 432,450, myStar, myGalaxy, myUniverse)

class Continent extends Planet {
    constructor(name, size, planet, star, galaxy, universe) {
        super(planet.planetName, planet.planetSize, star, galaxy, universe);
        this.continentName = name;
        this.continentSize = size;
             }
         }
const myContinent = new Continent('Knowplace', 43453, myPlanet, myStar, myGalaxy, myUniverse)    

class Land extends Continent {
    constructor(name, size, continent, planet, star, galaxy, universe) {
        super(continent.continentName, continent.continentSize, planet, star, galaxy, universe);
        this.landName = name;
        this.landSize = size;
    }
}
const myLand = new Land('Knowland', '7453', myContinent, myPlanet, myStar, myGalaxy, myUniverse)

class Village extends Land {
    constructor(name, location, land, continent, planet, star, galaxy, universe) {
        super(land.landName, land.landSize, continent, planet, star, galaxy, universe);
            this.villageName = name;
            this.villageLocation = location;
        }
    }

const myVillage = new Village('Knowtown', 'center', myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);

class Family extends Village {
    constructor(name, origin, village, land, continent, planet, star, galaxy, universe) {
        super(village.villageName, village.villageLocation, land, continent, planet, star, galaxy, universe);
        this.familyName = name;
        this.familyOrigin = origin;
    }
}

const myFamily = new Family('Myr', 'The Hills', myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);

class Person extends Family {
    constructor(name, age, family, village, land, continent, planet, star, galaxy, universe) {
        super(family.familyName, family.familyOrigin, village, land, continent, planet, star, galaxy, universe);
        this.personName = name;
        this.personAge = age;
    }
}

const myPerson = new Person('Thoros', 27, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse)

class Organ extends Person {
    constructor(name, condition, person, family, village, land, continent, planet, star, galaxy, universe) {
        super(person.personName, person.personAge, family, village, land, continent, planet, star, galaxy, universe);
        this.organName = name;
        this.organCondition = condition;
    }
}

const myOrgan = new Organ('heart', 'strong', myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse)

class Cell extends Organ {
    constructor(name, count, organ, person, family, village, land, continent, planet, star, galaxy, universe) {
        super(organ.organName, organ.organCondition, person, family, village, land, continent, planet, star, galaxy, universe);
        this.cellName = name;
        this.cellCount = count;
    }
}

const myCell = new Cell('red-blood cell', 83472, myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse)

class Molecule extends Cell {
    constructor(name, count, cell, organ, person, family, village, land, continent, planet, star, galaxy, universe) {
        super(cell.cellName, cell.cellCount, organ, person, family, village, land, continent, planet, star, galaxy, universe);
        this.moleculeName = name;
        this.moleculeCount = count;
    }
}

const myMolecule = new Molecule('Ice-9', 76286566, myCell, myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse)

class Atom extends Molecule {
    constructor(proton, electron, molecule, cell, organ, person, family, village, land, continent, planet, star, galaxy, universe) {
        super(molecule.moleculeName, molecule.moleculeCount, cell, organ, person, family, village, land, continent, planet, star, galaxy, universe);
        this.protonCount = proton;
        this.electronCount = electron;
    }
}

const myAtom = new Atom( 10, 25, myMolecule, myCell, myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse)


console.log(myAtom); 