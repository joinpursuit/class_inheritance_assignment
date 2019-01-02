class Universe {
  constructor(name, size) {
    this.universeName = name;
    this.universeSize = size;//name explicitly
    //not this.name - bc js would either replace this.name with the galaxy's this.name
    //or it will get confused and not know which this.name you are talking about.
  }
}

class Galaxy extends Universe {
  constructor(universeName, universeSize, name, location){
    super(universeName, universeSize)
    // super(universe)
    this.galaxyName = name;
    this.galaxyLocation = location;
  }
}

class Star extends Galaxy {
  constructor(universeName, universeSize, galaxyName, galaxyLocation, name, stage){
    super(universeName, universeSize, galaxyName, galaxyLocation)
    // super(universe)
    this.galaxyName = name;
    this.galaxyStage = stage;
  }
}

let myStar = new Star('Orpheus', 'gas giant', 'andromeda', '...north?', 'the bread univserse', 3000)

console.log(myStar.universeName);
console.log(myStar);
