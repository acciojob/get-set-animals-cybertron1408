// Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Cat class extending Animal
class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

// Dog class extending Animal
class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

// Example usage for testing
const myCat = new Cat("Siamese");
myCat.makeSound(); // Expected: The Siamese makes a sound
myCat.purr();      // Expected: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Expected: The Golden Retriever makes a sound
myDog.bark();      // Expected: woof


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
