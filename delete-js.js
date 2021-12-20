// tsc 04-ts-inheritance.ts
// node 04-ts-inheritance.js

// class Animal {

//     animalName;

//     // methods 

// }


class Dog {
    food;
}


const myDog = new Dog();

myDog.food = "Bones and meat";
myDog.animalName = "Tommy";
myDog.animalColor = "Black";
console.log(myDog.food);
console.log(myDog.animalName);
console.log(myDog);