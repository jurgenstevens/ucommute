const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// S7 Add train station schema
const stationSchema = new Schema({
  line: { type: String, required: true },
  station: { type: String, required: true },
  stationId: { type: Number, required: true },
  transfer: { type: Boolean, required: true },
});
// S8: this will be exported to be used for the routes
const Stations = mongoose.model("Stations", stationSchema);
// S9: here we're exporting and continue onto the routes
module.exports = Stations;
