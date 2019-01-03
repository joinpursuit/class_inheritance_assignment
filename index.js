class Universe {
  constructor(name, size) {
    this.universeName = name;
    this.universeSize = size;
  }
}

class Galaxy extends Universe {
  constructor(name, location, universeName, universeSize) {
    super(universeName, universeSize);
    this.galaxyNamename = name;
    this.galaxyLocation = location;
  }
}

class Star extends Galaxy {
  constructor(
    name,
    age,
    galaxyName,
    galaxylocation,
    universeName,
    universeSize
  ) {
    super(universeSize, galaxylocation, universeName, universeSize);
    this.starName = name;
    this.starAge = age;
  }
}

class Planet extends Star {
  constructor(
    name,
    type,
    starName,
    starAge,
    galaxyName,
    galaxylocation,
    universeName,
    universeSize
  ) {
    super(
      starName,
      starAge,
      galaxyName,
      galaxylocation,
      universeName,
      universeSize
    );
    this.planetName = name;
    this.planetType = type;
  }
}

class Continent extends Planet {
  constructor(
    name,
    planetName,
    planetType,
    starName,
    starAge,
    galaxyName,
    galaxylocation,
    universeName,
    universeSize
  ) {
    super(
      planetName,
      planetType,
      starName,
      starAge,
      galaxyName,
      galaxylocation,
      universeName,
      universeSize
    );
    this.continentName = name;
  }
}

class Land extends Continent {
  constructor(
    name,
    type,
    continentName,
    planetName,
    planetType,
    starName,
    starAge,
    galaxyName,
    galaxylocation,
    universeName,
    universeSize
  ) {
    super(
      continentName,
      planetName,
      planetType,
      starName,
      starAge,
      galaxyName,
      galaxylocation,
      universeName,
      universeSize
    );
    this.landName = name;
    this.landType = type;
  }
}

class Village extends Land {
  constructor(
    name,
    landName,
    landType,
    continentName,
    planetName,
    planetType,
    starName,
    starAge,
    galaxyName,
    galaxylocation,
    universeName,
    universeSize
  ) {
    super(
      landName,
      landType,
      continentName,
      planetName,
      planetType,
      starName,
      starAge,
      galaxyName,
      galaxylocation,
      universeName,
      universeSize
    );
    this.villageName = name;
  }
}

class Family extends Village {
  constructor(
    name,
    size,
    villageName,
    landName,
    landType,
    continentName,
    planetName,
    planetType,
    starName,
    starAge,
    galaxyName,
    galaxylocation,
    universeName,
    universeSize
  ) {
    super(
      villageName,
      landName,
      landType,
      continentName,
      planetName,
      planetType,
      starName,
      starAge,
      galaxyName,
      galaxylocation,
      universeName,
      universeSize
    );
    this.familyName = name;
    this.familySize = size;
  }
}

class Person extends Family {
  constructor(
    name,
    familyName,
    familySize,
    villageName,
    landName,
    landType,
    continentName,
    planetName,
    planetType,
    starName,
    starAge,
    galaxyName,
    galaxylocation,
    universeName,
    universeSize
  ) {
    super(
      familyName,
      familySize,
      villageName,
      landName,
      landType,
      continentName,
      planetName,
      planetType,
      starName,
      starAge,
      galaxyName,
      galaxylocation,
      universeName,
      universeSize
    );

    this.personName = name;
  }
}

class Organ extends Person {
  constructor(
    type,
    personName,
    familyName,
    familySize,
    villageName,
    landName,
    landType,
    continentName,
    planetName,
    planetType,
    starName,
    starAge,
    galaxyName,
    galaxylocation,
    universeName,
    universeSize
  ) {
    super(
      personName,
      familyName,
      familySize,
      villageName,
      landName,
      landType,
      continentName,
      planetName,
      planetType,
      starName,
      starAge,
      galaxyName,
      galaxylocation,
      universeName,
      universeSize
    );

    this.organType = type;
  }
}

class Cell extends Organ {
  constructor(
    type,
    organType,
    personName,
    familyName,
    familySize,
    villageName,
    landName,
    landType,
    continentName,
    planetName,
    planetType,
    starName,
    starAge,
    galaxyName,
    galaxylocation,
    universeName,
    universeSize
  ) {
    super(
      organType,
      personName,
      familyName,
      familySize,
      villageName,
      landName,
      landType,
      continentName,
      planetName,
      planetType,
      starName,
      starAge,
      galaxyName,
      galaxylocation,
      universeName,
      universeSize
    );

    this.cellType = type;
  }
}

class Molecule extends Cell {
  constructor(
    type,
    cellType,
    organType,
    personName,
    familyName,
    familySize,
    villageName,
    landName,
    landType,
    continentName,
    planetName,
    planetType,
    starName,
    starAge,
    galaxyName,
    galaxylocation,
    universeName,
    universeSize
  ) {
    super(
      cellType,
      organType,
      personName,
      familyName,
      familySize,
      villageName,
      landName,
      landType,
      continentName,
      planetName,
      planetType,
      starName,
      starAge,
      galaxyName,
      galaxylocation,
      universeName,
      universeSize
    );

    this.moleculeType = type;
  }
}

class Atom extends Molecule {
  constructor(
    type,
    moleculeType,
    cellType,
    organType,
    personName,
    familyName,
    familySize,
    villageName,
    landName,
    landType,
    continentName,
    planetName,
    planetType,
    starName,
    starAge,
    galaxyName,
    galaxylocation,
    universeName,
    universeSize
  ) {
    super(
      moleculeType,
      cellType,
      organType,
      personName,
      familyName,
      familySize,
      villageName,
      landName,
      landType,
      continentName,
      planetName,
      planetType,
      starName,
      starAge,
      galaxyName,
      galaxylocation,
      universeName,
      universeSize
    );

    this.atomType = type;
  }

  tellstory() {
    return `Hey! I am a ${type} in a ${moleculeType} molecule. I kinda live in a ${cellType} in ${personName}'s ${organType}'. ${personName} comes from the ${familyName} who come from the village from ${villageName}. Our village is located in the ${landType} land of ${landName} which is in the ${continentName} continent. I'm told ${continentName} is on the ${planetType} planet of ${planetName} which orbits the ${starAge} billion year old star ${starName}. Pretty cool, huh?! Well get this, ${starName} is part of the magical ${galaxyName} galaxy which is in the ${galaxyLocation} side of the great ${universeName} universe!`;
  }
}

let myAtom = new Atom(
  "positively-charged",
  "carbon",
  "nerve",
  "brain",
  "Peter",
  "Paterson",
  "5",
  "Pottersville",
  "Potters",
  "green",
  "Tropico",
  "Tropicooo",
  "hot",
  "ShinyRock",
  "3300",
  "left-Twix",
  "Left",
  "Twix",
  "2000"
);

console.log(myAtom.tellstory());
