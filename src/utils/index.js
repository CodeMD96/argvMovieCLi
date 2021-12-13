const movieArr = [];

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
}

module.exports.Movie = Movie;
module.exports.movieArr = movieArr;