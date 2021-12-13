const yargs = require("yargs");
const Movie = require("./utils").Movie;
const addActors = require("./utils/addActors.js");
// below is from previous version, just showing how to export multiple things
// const movieArr = require("./utils").movieArr;
const args = yargs.argv;


const app = () => {
    switch (args.command) {
        case "add":
            const newMovie = new Movie(args.title, addActors(args.actors));
            newMovie.add();
            newMovie.log();
            break;
        case "addMulti":
            const newMovie1 = new Movie(args.title1, addActors(args.actors1));
            newMovie1.add();
            const newMovie2 = new Movie(args.title2, addActors(args.actors2));
            newMovie2.add();
            newMovie2.log();
            break;
        default:
            console.log("Incorrect command");
    }
};

app();