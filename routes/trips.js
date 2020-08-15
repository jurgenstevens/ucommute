const express = require("express");
//  S10: This will help us route in our Trips
const router = express.Router();
//  S11: Import the schema from the models folder
const Trips = require("../models/trips");

// this will be our first Trips route
// S12: GET route  to get all of the trips to display
router.get("/", (req, res) => {
  // we're going find the trip from the schema then create the promise to return our trip in JSON format
  Trips.find()
    .then((trip) => res.json(trip))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// S13: Go to MongoDB -> Collections -> Create Trips collection. Middleware has alreadby been included
//
