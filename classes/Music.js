// import the Media class:
const Media = require('./Media')
// create your Music class:
class Music extends Media{
    constructor(title, year, genre, artist, length,){
super(title, year, genre)
this.artist = artist
this.length = length
    }
    summary(){
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds` // returned string 
    }
    static shortestAlbum(albums) {
        if (albums.length === 0) return null; // return null if array empty

        let shortAlbum = albums[0]; // iterates through the array of movies comparing their length
        for (let i = 1; i < albums.length; i++) {
            if (albums[i].length < shortAlbum.length){
                shortAlbum = albums[i]
            }
        }
    return shortAlbum // returns longest movie
    }
    }

// don't change below
module.exports = Music;
