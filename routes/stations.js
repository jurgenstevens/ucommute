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
router.get("/:id", (req, res) => {
  // we're finding by ID through request, parameters and ID
  Stations.findById(req.params.id)
    // creating the promise to return a response and return the station in JSON format
    .then((station) => res.json(station))
    // standard promise error catch
    .catch((err) => res.status(400).json(`Error: ${err}`));
});
// S17: Request to UPDATE station by ID
router.put("/update/:id", (req, res) => {
  // it's going to be the same process as finding by ID like above at first
  Stations.findById(req.params.id)
    .then((station) => {
      // here is where all of the updates happen
      (station.line = req.body.line),
        (station.station = req.body.station),
        (station.stationID = req.body.stationID),
        (station.transfer = req.body.transfer);
      // this is to save the new station
      station
        .save()
        .then(() => res.json("The station has been updated successfully."));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// S18: Request to FIND post by ID and DELETE
router.delete("/:id", (req, res) => {
  //we can obviously see that we're going thru Stations w/ the method to find and delete
  Stations.findByIdAndDelete(req.params.id)
    .then(() => res.json("The station has been deleted successfully."))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});
// Now that all of the routes have all been tested on Postman, the stations routes is now fully CRUDable

// S14 don't forget to export the router
module.exports = router;
// [
//  "line": "Blue",
//   "direction": "Inbound",
//   "station": "O'Hare",
//  "transfer" : "false" },
// ]
