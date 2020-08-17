const mongoose = require("mongoose");
const Stations = require("./stations");
const Schema = mongoose.Schema;

// S7 Add train station schema
const tripSchema = new Schema({
  userEmail: { type: String, required: false },
  origin: [Stations],
  destination: [Stations],
  transfer: { type: Boolean, required: false },
  tripName: { type: String, required: false },
});

// S8: this will be exported to be used for the routes
const Trips = mongoose.model("Trips", tripSchema);

// S9: here we're exporting and continue onto the routes
module.exports = Trips;
