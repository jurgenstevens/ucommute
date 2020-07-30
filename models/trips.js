const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// S7 Add train station schema
const tripSchema = new Schema({
  userEmail: { type: String, required: false },
  origin: { type: Number, required: true },
  destination: { type: Number, required: true },
  transfer: { type: Boolean, required: false },
  tripName: { type: String, required: false },
});

// S8: this will be exported to be used for the routes
const Trips = mongoose.model("Trips", tripSchema);

// S9: here we're exporting and continue onto the routes
module.exports = Trips;
