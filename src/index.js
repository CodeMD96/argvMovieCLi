const Movie = require("./utils").Movie;
const movieArr = require("./utils").movieArr;

const app = () => {
    const args = process.argv;
    switch (args[2]) {
        case "add":
            for (let i=0; i<args.length; i++) {
                if (args[i] === "add" && args[i+2] !== "add") {
                    const newMovie = new Movie(args[i+1], args[i+2]);
                    newMovie.add();
                } else if (args[i] === "add" && args[i+2] === "add") {
                    const newMovie = new Movie(args[i+1]);
                    newMovie.add();
                }
            }
            console.log(movieArr);
            break;
        default:
            console.log("Incorrect command");
    }
};

app();