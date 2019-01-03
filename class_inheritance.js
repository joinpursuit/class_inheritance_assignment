class Universe {
  constructor(name) {
    this.universeName = name;
  }
}
class Galaxy extends Universe {
  constructor(name, universe) {
    super(universe.universeName);
    this.galaxyName = name;
  }
}

class Star extends Galaxy {
  constructor(starName, starColor, galaxy, universe) {
    super(galaxy.galaxyName, galaxy, universe, universe.universeName);
    this.starName = starName;
    this.starColor = starColor;
  }
}

class Planet extends Star {
  constructor(planetName, planetAtmosphere, star, galaxy, universe) {
    super(
      star.starName,
      star.starColor,
      star,
      galaxy.galaxyName,
      galaxy,
      universe.universeName,
      universe
    );
    this.planetName = planetName;
    this.planetAtmosphere = planetAtmosphere;
  }
}

class Continent extends Planet {
  constructor(continentName, continentNumber, planet, star, galaxy, universe) {
    super(
      planet.name,
      planet.planetAtmosphere,
      planet,
      star.starName,
      star.starColor,
      star,
      galaxy.galaxyName,
      galaxy,
      universe.universeName,
      universe
    );
    this.continentName = continentName;
    this.continentNumber = continentNumber;
  }
}

const myUniverse = new Universe("AllThings");
const myGalaxy = new Galaxy("Andromeda", myUniverse);
const myStar = new Star("Mun", "color", myGalaxy, myUniverse);
const myPlanet = new Planet(
  "Futurama",
  "We Have Oxygen Boiis",
  myStar,
  myGalaxy,
  myUniverse
);
const myContinent = new Continent(
  "MURICA",
  1,
  myPlanet,
  myStar,
  myGalaxy,
  myUniverse
);

// console.log(myGalaxy);
// console.log(myStar);
// console.log(myPlanet);
console.log(myContinent);

// class Star extends Galaxy {
//   constructor(starName, starColor) {
//     super(galaxyName,universeName);
//     this.starName = starName;
//     this.starColor = starColor;
//   }
// }
//
// class Planet extends Star {
//   constructor(planetName, planetAtmosphere) {
//     super(galaxyName);
//     this.planetName = planetName;
//     this.planetAtmosphere = planetAtmosphere;
//   }
// }
// class Continent extends Planet {
//   constructor(starName, starColor) {
//     super(galaxyName);
//     this.starName = starName;
//     this.starColor = starColor;
//   }
// }
// class Land extends Continent {
//   constructor(starName, starColor) {
//     super(galaxyName);
//     this.starName = starName;
//     this.starColor = starColor;
//   }
// }
// class Village extends Land {
//   constructor(starName, starColor) {
//     super(galaxyName);
//     this.starName = starName;
//     this.starColor = starColor;
//   }
// }
// class Family extends Village {
//   constructor(starName, starColor) {
//     super(galaxyName);
//     this.starName = starName;
//     this.starColor = starColor;
//   }
// }
// class Person extends Family {
//   constructor(starName, starColor) {
//     super(galaxyName);
//     this.starName = starName;
//     this.starColor = starColor;
//   }
// }
// class Organ extends Person {
//   constructor(starName, starColor) {
//     super(galaxyName);
//     this.starName = starName;
//     this.starColor = starColor;
//   }
// }
//
// class Cell extends Organ {
//   constructor(starName, starColor) {
//     super(galaxyName);
//     this.starName = starName;
//     this.starColor = starColor;
//   }
// }
// class Molecule extends Cell {
//   constructor(starName, starColor) {
//     super(galaxyName);
//     this.starName = starName;
//     this.starColor = starColor;
//   }
// }
// class Atom extends Molecule {
//   constructor(starName, starColor) {
//     super(galaxyName);
//     this.starName = starName;
//     this.starColor = starColor;
//   }
// }
