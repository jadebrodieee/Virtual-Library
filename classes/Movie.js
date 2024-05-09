// import the Media class:
const Media = require('./Media')
// create your Movie class:
class Movie extends Media {
    constructor(title, year, genre, director, duration, rating){
        super(title, year, genre) // super as linked to the media.js class 
        this.director = director
        this.duration = duration
        this.rating = rating
    }
    summary(){
         return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}` // returned string
    }
    static longestMovie(movies){// Movies is the argument 
        if (movies.length === 0) return null; // return null if array empty

        let longestMovie = movies[0]; // iterates through the array of movies comparing their length
        for (let i = 1; i < movies.length; i++) {
            if (movies[i].duration > longestMovie.duration){
                longestMovie = movies[i]
            }
        }
    return longestMovie // returns longest movie
    }
}
// don't change below
module.exports = Movie;