
class Book {
    title;
    author;

    publish() {
        this.title = "Some Book Name";
        this.author = "Author Name";
        console.log(this.title + this.author);
    }
}


const bookObj = new Book();

bookObj.publish();

