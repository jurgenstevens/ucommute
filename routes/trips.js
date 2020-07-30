const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  userEmail: { type: String, required: false },
  origin: { type: Number, required: true },
  destination: { type: Number, required: true },
  transfer: { type: Boolean, required: false },
  tripName: { type: String, required: false },
});

const Trips = mongoose.model("Trips", tripSchema);

module.exports = Trips;
