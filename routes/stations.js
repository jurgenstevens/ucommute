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
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// S13: Go to MongoDB -> Collections -> Add My Own Data DON'T FORGET TO module.export
// then continue S13 and add the middleware in server.js

// S15: POST Request to ADD a new station
router.post("/add", (req, res) => {
  const newStation = new Stations({
    line: req.body.line,
    station: req.body.station,
    stationID: req.body.stationID,
    transfer: req.body.transfer,
  });
  newStation
    .save()
    .then(() => res.json("New station has been listed."))
    .catch((err) => res.status(400).json(`Error ${err}`));
});

// S16: Request to GET/FIND station by ID

module.exports = router;
// [
//  "line": "Blue",
//   "direction": "Inbound",
//   "station": "O'Hare",
//  "transfer" : "false" },
// ]
