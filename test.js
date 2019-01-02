class Animal {
  constructor(name) {
    this.name = name;
  }

class Dog extends Animal {
  constructor(name, breed){
    super(name)
    this.breed = breed;
  }

  bark() {
    return `${this.name} barks.`
  }
}

let myDog = new Dog('Luna')
myDog.speak('haha!')
// => 'Luna says "haha!"'
myDog.bark()
// => 'Luna barks.'
