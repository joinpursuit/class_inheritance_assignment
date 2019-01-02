class Universe {
  constructor(name, size){
    this.UniverseName = name
    this.UniverseSize = size
  }
}

class Galaxy extends Universe{
  constructor(universe ,name, diameter ){
    super(universe.UniverseName,universe.UniverseSize)
    // super(universe)
    this.GalaxyName = name
    this.GalaxyDiameter = diameter
  }
}

class Star extends Galaxy {
  constructor(galaxy,name,planets){
    // super(galaxy)
    super(galaxy, galaxy.GalaxyName, galaxy.GalaxyDiameter)
    this.StarName = name
    this.NumberPlanets = planets
  }
}

class Planet extends Star{
  constructor(star,name,radius,continents){
    super(star,star.StarName,star.NumberPlanets)
    this.PlanetName = name
    this.PlanetRadius = radius
    this.NumberOfContinents = continents
  }
}

class Continent extends Planet{
  constructor(planet,name,mass,population){
    super(planet,planet.PlanetName,planet.PlanetRadius,planet.NumberOfContinents)
    this.ContinentName = name
    this.ContinentMass = mass
    this.ContinentPopulation = population
  }
}

class Land extends Continent{
  constructor(continent,name,population){
    super(continent,continent.ContinentName,continent.ContinentMass,continent.ContinentPopulation)
    this.Country = name
    this.CountryPopulation = population
  }
}

class Village extends Land{
  constructor(land,name,population){
    super(land,land.Country,land.CountryPopulation)
    this.City = name
    this.CityPopulation = population
  }
}

class Family extends Village{
  constructor(village,name,size){
    super(village, village.City, village.CityPopulation)
    this.Family = name
    this.FamilySize = size
  }
}

class Person extends Family{
  constructor(family, person, age, gender){
    super(family, family.Family, family.FamilySize)
    this.Person = person
    this.PersonAge = age
    this.PersonGender = gender
  }
}

class Organ extends Person{
  constructor(person,name,system,condition){
    super(person,person.Person,person.PersonAge,person.PersonGender)
    this.OrganName = name
    this.OrganSystem = system
    this.OrganCondition = condition
  }
}

class Cell extends Organ{
  constructor(organ,name,system,condition){
    super(organ,organ.OrganName,organ.OrganSystem,organ.OrganCondition)
    this.CellName = name
    this.CellSystem = system
    this.CellCondition = condition
  }
}

class Molecule extends Cell{
  constructor(cell,symbol){
    super(cell,cell.CellName,cell.CellSystem,cell.CellCondition)
    this.symbol = symbol
  }
}

class Atom extends Molecule{
  constructor(molecule,name,charge){
    super(molecule,molecule.symbol)
    this.AtomName = name
    this.AtomCharge = charge
  }
  tellStory(){
    return`This is the story of a ${this.AtomName} within the ${this.symbol} of a lone ${this.CellName}.
    This ${this.CellName} resides in a ${this.OrganCondition} ${this.OrganName} of ${this.Person} of house ${this.Family}.
    House ${this.Family} pledges their allegiance to the noble city of ${this.City}.
    All the cities of ${this.Country} must prepare for the "Cold War".
    The "Cold War" is a war between ${this.ContinentName} and the rest of ${this.PlanetName}.
    Beyond the ${this.PlanetName} is a star, ${this.StarName}.
    ${this.StarName} is one of many stars in the ${this.GalaxyName}.
    Which itself is one of many galaxies in ${this.UniverseName}
    `
  }
}

let myUniverse = new Universe (1,'undefined')
// console.log(myUniverse)

let myGalaxy = new Galaxy (myUniverse, 'Milky Way Galaxy', '175 kly')
// console.log(myGalaxy)

let myStar = new Star (myGalaxy,'Sun',8)
// console.log(myStar)

let myPlanet = new Planet(myStar,'Earth','3,959 mi',7)
// console.log(myPlanet)

let asia = new Continent (myPlanet,'Asia','44,579,000 km2',4462676731)
// console.log(asia)

let china = new Land (asia,'China',1403500365)
// console.log(china)

let city = new Village(china,'三亚市',685408)
// console.log(city)

let myFamily = new Family (city,5,4)
// console.log(myFamily)

let myPerson = new Person (myFamily,'Father',20,'Male')
// console.log(myPerson)

let lungs = new Organ (myPerson,'Lung','Respiratory','Damaged')
// console.log(lungs)

let osmosis = new Cell (lungs,'White Blood Cell','Immune system','Damaged')
// console.log(osmosis)

let myMolecule = new Molecule (osmosis,'MHC')
// console.log(myMolecule)
let myAtom = new Atom (myMolecule,'Proton','+1')
console.log(myAtom)
console.log(myAtom.tellStory())
