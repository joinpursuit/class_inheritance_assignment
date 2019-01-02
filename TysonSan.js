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
    super(continent);
    this.landElement = landElement;
    this.landColor = landColor;
    this.landName = landName
  }
}


const myUniverse = new Universe("AllThings");
const myGalaxy = new Galaxy(myUniverse,"Andromeda");
const myStar = new Star(myGalaxy,"Orion","this many");
const myPlanet = new Planet(myStar,'Saturn')
const myContinent = new Continent(myPlanet,"MURICA",1);
const myLand = new Land(myContinent,'earth','purple','Land of the Lay o Lands')

// console.log(myContinent);
console.log(myLand);
