var Book = /** @class */ (function () {
    function Book() {
    }
    Book.prototype.publish = function () {
        this.title = "Some Book Name";
        this.author = "Author Name";
        console.log(this.title + this.author);
    };
    return Book;
}());
var bookObj = new Book();
bookObj.publish();
