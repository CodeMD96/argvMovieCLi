const fs = require("fs")
let movieArr;

const pullMovieData = () => {
    try {
        movieArr = JSON.parse(fs.readFileSync("./storage.json"))
    } catch (error) {
        movieArr = []
    }
}
class Movie {
    constructor(title, actors = "Not specified") {
        this.title = title;
        this.actors = actors;
    }
    add() {
        movieArr.push(this);
    }

    log() {
        console.log(movieArr);
    }

    save() {
        fs.writeFileSync("./storage.json", JSON.stringify(movieArr));
    }
}

module.exports = {Movie, pullMovieData};