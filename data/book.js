const { v4: uuid } = require('uuid');

class Book {
    constructor(title, description, authors, favorite, fileCover, fileName) {

        this.id = uuid();

        this.title = title;
        this.description = description;
        this.authors = authors;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
        this.fileBook = "";
    }
}
module.exports.Book = Book;

const data_obj = {
    books: []
};
module.exports.data_obj = data_obj;
