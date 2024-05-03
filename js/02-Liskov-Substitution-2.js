// Every subclass of flyingbird is able to properly call this function
class FlyingBird {
  fly() {
    console.log("I can fly");
  }
}

// Every subclass of swimmingbird is able to properly call this function
class SwimmingBird {
  swim() {
    console.log("I can swim");
  }
}

class Duck extends FlyingBird {
  quack() {
    console.log("I can quack");
  }
}

class Penguin extends SwimmingBird {}

function makeFlyingBirdFly(bird) {
  bird.fly();
}

function makeSwimmingBirdSwim(bird) {
  bird.swim();
}

const duck = new Duck();
const penguin = new Penguin();

makeFlyingBirdFly(duck);
makeSwimmingBirdSwim(penguin);

// Liskov Substitution is not exactly a "law", please check Liskov Substition and Composition
