const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 400
    },
    producer: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 300
    },
    categories: {
        type: [String],
        required: true,
        minLength: 1,
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
