// tsc 04-ts-inheritance.ts
// node 04-ts-inheritance.js

class Animal {
    animalName: string;

    sound() {
        console.log("some animal sound...");
    }
}

class Dog extends Animal {
    food: String;
}


const myDog = new Dog();

myDog.food = "Bones and meat";
myDog.animalName = "Tommy";
console.log(myDog);
console.log(myDog.food);
console.log(myDog.animalName);
myDog.sound();


