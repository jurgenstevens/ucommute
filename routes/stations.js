const express = require("express");
// S10: this will help us route in our application
const router = express.Router();
// S11: import the schema from the models folder
const Stations = require("../models/stations");

// this will be our first route
// S12: GET request to get ALL of the posts to DISPLAY
router.get("/", (req, res) => {
  // we're going to find the station from the schema then create the promise to return our station in JSON format
  Stations.find()
    .then((station) => res.json(station))
    .catch((err) => res.status(400).res.json(`Error: ${err}`));
});

// S13: Go to MongoDB -> Collections -> Add My Own Data
// [
//   "admin": "jurgen.stevens@yahoo.com",
//   "stopID": '100',
//   "station": "Midway",
//   "line": "Orange",
//   "transfer": "false",
// ]
