// tsc 05-ts-type-notation.ts
// node 05-ts-type-notation.js
var Customer = /** @class */ (function () {
    function Customer() {
        this.firstName = "Sonu";
        // firstName: string = "Sonu";
    }
    return Customer;
}());
var obj = new Customer();
console.log(obj.firstName);
