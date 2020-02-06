const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 400
    },
    producer: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 300
    },
    categories: {
        type: [String],
        required: true,
        validate: [a => a.length > 0, "{PATH} requires at least une element."],
        enum: ["comedy", "action", "thriller", "drama", "family", "fantasy", "sf", "musical", "western"]
    },
    views: {
        type: Number,
        required: true,
        min: 0
    },
    releaseDate: {
        type: Date,
        default: Date.now
    },
    isOscarWinner: {
        type: Boolean,
        default: false
    }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
