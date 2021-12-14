const yargs = require("yargs");
const {Movie, pullMovieData} = require("./utils");
const addActors = require("./utils/addActors.js");
const args = yargs.argv;


const app = () => {
    pullMovieData();
    switch (args.command) {
        case "add":
            const newMovie = new Movie(args.title, addActors(args.actors));
            newMovie.add();
            newMovie.log();
            newMovie.save();
            break;
        case "addMulti":
            const newMovie1 = new Movie(args.title1, addActors(args.actors1));
            newMovie1.add();
            newMovie1.save();
            const newMovie2 = new Movie(args.title2, addActors(args.actors2));
            newMovie2.add();
            newMovie2.log();
            newMovie2.save();
            break;
        default:
            console.log("Incorrect command");
    }
};

app();