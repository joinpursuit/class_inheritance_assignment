class Universe {
  constructor(name) {
    this.universeName = name;
  }
}
const myUniverse = new Universe("AllThings");

class Galaxy extends Universe {
  constructor(name, universe) {
    super(universe.universeName);
    this.galaxyName = name;
  }
}

const myGalaxy = new Galaxy("Andromeda", myUniverse);
