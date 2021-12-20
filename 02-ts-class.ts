// proper TS code 

class Book {
    title: string;
    author: string;

    publish() {
        this.title = "Harry Potter";
        this.author = "Jeckaline";
        console.log(this.title + " " + this.author);
    }
}

const bookObj = new Book();

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

