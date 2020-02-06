const mongoose = require("mongoose");

(async () => {
    try {
        await mongoose.connect("mongodb://localhost/moviesdb", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to Movies DB.");
    } catch (e) {
        console.error(e);
    }
})();


module.exports.Movie = require("./Movie");
