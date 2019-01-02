class Universe {
  constructor(name, size) {
    this.universeName = name;
    this.universeSize = size;
  }
}

class Galaxy extends Universe {
  constructor(name, location, universe) {
    super(universe.universeName, universe.universeSize);
    // this.universe = universe;            //or else use super()
    //used instead of super(), and will have to use a lot of dot notation then!
    this.galaxyName = name;
    this.galaxyLocation = location;
  }
}

class Star extends Galaxy {
  constructor(name, stage, galaxy, universe) {
    //called in teh same order in teh super()
    super(galaxy.galaxyName, galaxy.galaxyLocation, universe);
    this.starName = name;
    this.starStage = stage;
  }
}

let myUniverse = new Universe('the pasta universe', 'five ravioli')
let myGalaxy = new Galaxy('andromeda', '...left?', myUniverse);
let myStar = new Star('Corey', 'Red Giant', myGalaxy, myUniverse)

// console.log(myGalaxy);
console.log(myStar);

// console.log(myGalaxy.universeName);//because we did: this.universe = universe;
// console.log(myGalaxy.universe.universeName);
