// create your Media class:
class Media{
    static totalMediaCount = 0 // static propery with the value of 0
    constructor(title, year,genre){ // media has 3 properies passed as params 
        this.title = title
        this.year = year
        this.genre = genre
        Media.totalMediaCount += 1 // each time a new media instance is created the static propery goes up by one
    }
    summary(){
        return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}` // returned string 
    }
}
// uncomment below to export it:
module.exports = Media;
