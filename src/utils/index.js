const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

let title = argv.title;
let actor = argv.actor;
let year = argv.year;


const app = () => {

    if (argv.add) {
        console.log(`Movie ${title} with actor ${actor} added. Was released in: ${year}.`);
    }

};

app();