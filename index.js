const express = require("express");
const moviesRoute = require("./routes/movies");

const app = express();

const PORT = process.env.PORT || 3000;

// JSON parser middleware
app.use(express.json());

// Log everything coming in
app.get("/", (req, res) => {
    res.send("Server is up and running...")
});

app.use("/api/movies", moviesRoute);

app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
