const booklist=["Book 1","Book 2","Book 3"];

const book = {
    getAllBooks() {
        console.log(booklist);
        //SELECT * FROM book;
    },
    addBook(bookName){
        console.log("Book "+bookName+ " added to the database");
        //INSER INTO ...
    }
}

book.getAllBooks();
book.addBook("Ulysses");