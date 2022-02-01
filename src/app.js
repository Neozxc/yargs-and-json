let fs = require("fs");

exports.add = (title, actor) => {

    let Movie = {
        movie: title,
        actor: actor
    }

    let str = JSON.stringify(Movie);

    fs.writeFileSync("./Netflix.json", str);
};

exports.list = () => {
    const list = JSON.parse(fs.readFileSync("./Netflix.json"));
    console.log(list);
}