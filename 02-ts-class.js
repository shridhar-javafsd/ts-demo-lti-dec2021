// proper TS code 
var Book = /** @class */ (function () {
    function Book() {
    }
    Book.prototype.publish = function () {
        this.title = "harry Potter";
        this.author = "Jeckaline";
        console.log(this.title + " " + this.author);
    };
    return Book;
}());
var bookObj = new Book();
bookObj.publish();
// vanilla JS code 
// class Book {
//     title;
//     author;
//     publish() {
//         this.title = 200;
//         this.author = 225;
//         console.log(this.title + this.author);
//     }
// }
// const bookObj = new Book();
// bookObj.publish();
