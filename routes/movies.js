const express = require("express");
const movieHandlers = require("../handlers/movies");

const router = express.Router();

router.route("/")
    .get(movieHandlers.getAllMovies) // READ ALL + READ FILTERED + READ OSCAR WINNERS
    .post(movieHandlers.createMovie); // CREATE

router.route("/:id")
    .get(movieHandlers.getMovie)
    .put(movieHandlers.updateMovie)
    .delete(movieHandlers.deleteMovie);

module.exports = router;
