class Universe {
  constructor(name, size) {
    this.uniName = name;
    this.uniSize = size;
  }
};

class Galaxy extends Universe {
  constructor(name, universe) {
    super(universe.uniName, universe.uniSize);
    // this.universe = universe;
    this.galName = name;
  }
};

class Star extends Galaxy {
  constructor(name, state, galaxy, universe) {
    super(galaxy.galName, universe);
    // this.galaxy = galaxy;
    // this.universe = universe;
    this.starName = name;
    this.state = state;
  }
}

class Planet extends Star {
  constructor(name, star, galaxy, universe) {
    super(star.starName, star.state, galaxy, universe);
    this.planetName = name;
  }
}

class Continent extends Planet {
  constructor(name, planet, star, galaxy, universe) {
    super(planet.planetName, star, galaxy, universe);
    this.contName = name;
  }
}

const myUni = new Universe('The universe', 93 + ' billion lightyears')
const myGal = new Galaxy('Milkyway', myUni);
const myStar = new Star('Solis', 'Dwarf Star', myGal, myUni);
const myPlanet = new Planet('Earth', myStar, myGal, myUni);
const continent = new Continent('North Amurica', myPlanet, myStar, myGal, myUni);

console.log(continent);
// class Planet extends Star
