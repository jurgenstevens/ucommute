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
//  "line": "Blue",
//   "direction": "Inbound",
//   "stations": [
//       { station: "O'Hare", transfer: "false" },
//       { station: "Rosemont", transfer: "false" },
//       { station: "Cumberland", transfer: "false" },
//       { station: "Harlem", transfer: "false" },
//       { station: "Jefferson Park", transfer: "false" },
//       { station: "Montrose", transfer: "false" },
//       { station: "Irving Park", transfer: "false"},
//       { station: "Addison", transfer: "false" },
//       { station: "Belmont", transfer: "false" },
//       { station: "Logan Square", transfer: "false" },
//       { station: "California", transfer: "false"},
//       { station: "Western", transfer: "false" },
//       { station: "Damen", transfer: "false" },
//       { station: "Division", transfer: "false" },
//       { station: "Chicago", transfer: "false"},
//       { station: "Grand", transfer: "false" },
//       { station: "Clark & Lake", transfer: "true" },
//       { station: "Washington", transfer: "true" },
//       { station: "Monroe", transfer: "false"},
//       { station: "Jackson", transfer: "true" },
//       { station: "LaSalle", transfer: "false" },
//       { station: "Clinton", transfer: "false" },
//       { station: "UIC-Halsted", transfer: "false"},
//       { station: "Racine", transfer: "false" },
//       { station: "Western", transfer: "false" },
//       { station: "Kedzie-Homan", transfer: "false" },
//       { station: "Pulaski", transfer: "false"},
//       { station: "Cicero", transfer: "false" },
//       { station: "Austin", transfer: "false" },
//       { station: "Oak Park", transfer: "false" },
//       { station: "Harlem", transfer: "false" },
//       { station: "Forest Park", transfer: "false" },
//     ]
// ]
