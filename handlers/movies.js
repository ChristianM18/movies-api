const db = require("../models");

module.exports.createMovie = async (req, res) => {
    try {
        const newMovie = await db.Movie.create(req.body);
        return res.status(201).json(newMovie);
    } catch (e) {
        return res
            .status(400)
            .json({
                message: "Movie could not be created.",
                error: e
            });
    }
};

module.exports.getAllMovies = async (req, res) => {
    try {
        let allMovies;
        if (req.query && Object.keys(req.query).length) {
            // There is some kind of filtering

            if (Object.keys(req.query).length === 1 && req.query.isOscarWinner != null) {
                allMovies = await db.Movie.find(req.query);
            } else {
                allMovies = await db.Movie
                    .find(req.query)
                    .select({
                        title: 1,
                        producer: 1,
                        releaseDate: 1,
                        _id: 0
                    })
                    .sort("releaseDate");
            }
        } else {
            allMovies = await db.Movie.find(req.query);
        }

        return res.status(200).json(allMovies);
    } catch (e) {
        return res
            .status(400)
            .json({
                message: "Movies could not be gathered.",
                error: e
            });
    }
};

module.exports.getMovie = async (req, res) => {
    try {
        const requestedMovie = await db.Movie.findById(req.params.id);
        if (!requestedMovie) {
            throw new Error("Not found");
        }

        return res.status(200).json(requestedMovie);
    } catch (e) {
        return res
            .status(404)
            .json({
                message: "Movie could not be gathered.",
                error: e
            });
    }
};

module.exports.updateMovie = async (req, res) => {
    try {
        const toUpdateMovie = await db.Movie
            .findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, runValidators: true });
        return res.status(200).json(toUpdateMovie);
    } catch (e) {
        return res
            .status(400)
            .json({
                message: "Movie could not be updated.",
                error: e
            });
    }
};

module.exports.deleteMovie = async (req, res) => {
    try {
        let toDeleteMovie = await db.Movie.findByIdAndRemove(req.params.id);
        return res.status(200).json(toDeleteMovie);
    } catch (e) {
        return res
            .status(400)
            .json({
                message: "Movie could not be updated.",
                error: e
            });
    }
};
