const express = require("express");
// S10: this will help us route in our application
const router = express.Router();
// S11: import the schema from the models folder
const Stations = require("../models/stations");

// this will be our first route
// S12: GET request to get ALL of the posts to DISPLAY
router.get("/", (req, res) => {
  // we're going to find the post from the schema then create the promise to return our posts in JSON format
  Stations.find()
    .then((post) => res.json(post))
    .catch((err) => res.status(400).res.json(`Error: ${err}`));
});
