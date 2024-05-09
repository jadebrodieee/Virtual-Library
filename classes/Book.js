// import the Media class:
const media = require('./Media') // imports the media class from my media.js file
// create your Book class:
class Book extends media{ // book class which is extended to the media class located in the media.js file
    constructor(title, year, genre, author, numPages, rating){ // have to add the parent class in here and then link to super 
        super(title, year, genre) // super as linked to the media.js class 
        this.author = author
        this.numPages = numPages
        this.rating = rating
    }
    summary(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}` // returned string
    }
    static highestRating(books){ // books is the argument 
        if (books.length === 0) return null; // return null if array empty

        let highestRatedBook = books[0]; // iterates through the array of books comparing thei ratings
        for (let i = 1; i < books.length; i++) {
            if (books[i].rating > highestRatedBook.rating){
                highestRatedBook = books[i]
            }
        }
    return highestRatedBook // returns highest rated books
    }

}
// create your Book class:

// don't change below
module.exports = Book;
