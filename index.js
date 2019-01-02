class Universe {
  constructor(name, size) {
    this.universeName = name;
    this.universeSize = size;
  }
}

class Galaxy extends Universe {
  constructor(universe, name, size){
    super(universe.universeName, universe.universeSize)
    // super(universe)
    this.galaxyName = name;
    this.galaxySize = size;
  }
}

class Star extends Galaxy{
  constructor(universe, galaxy, name, color){
    super(universe, galaxy.galaxyName, galaxy.galaxySize)
    this.starName = name;
    this.starColor = color;
  }

  tellStory(){
    return `${this.starName} is a ${this.starColor} star in the ${this.galaxyName} galaxy and is REALLY not that cool.`
  }
}

let myUniverse = new Universe('Andromeda', 25452);
let myGalaxy = new Galaxy(myUniverse, 'Auro', 5342)
let myStar = new Star(myUniverse, myGalaxy, 'Haala', 'blue')

console.log(myStar);
// console.log(myStar.universeName);
console.log(myStar.tellStory());

// let myAtom =
