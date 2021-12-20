// tsc 04-ts-inheritance.ts
// node 04-ts-inheritance.js
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.sound = function () {
        console.log("some animal sound...");
    };
    return Animal;
}());
var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());
var myDog = new Dog();
myDog.food = "Bones and meat";
myDog.animalName = "Tommy";
console.log(myDog.food);
console.log(myDog.animalName);
myDog.sound();
