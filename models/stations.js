const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// S7 Add train station schema
const stationSchema = new Schema({
  admin: { type: String, required: true },
  stopID: { type: String, required: true },
  stations: { type: String, required: true },
  line: { type: String, required: true },
  transfer: { type: Boolean, required: true },
});

const Stations = mongoose.model("Stations", stationSchema);
