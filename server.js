// S1: In terminal type 'npm init -y' to create package.json file//
// S2: In terminal type 'npm install'
// S3: In terminal type 'npm install express mongoose cors dotenv"
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// this will be the connection to MongoDB through .env
const uri = process.env.ATLAS_URI;
// S5: run "npm i dotenv" in terminal to connect to .env file

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  // S6: added the following option according nodejs instructions to use new Server Discover and Monitoring engine
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () =>
  console.log("Mongoose connection established successfully")
);

//S13: this is the middleware and will be imported from the stations.js in the routes folder
const stationsRouter = require("./routes/stations");
app.use("/stations", stationsRouter);
// S13: this will be the middleware for Trips and we'll import it from trips.js in the routes folder
const tripsRouter = require("./routes/trips");
app.use("/trips", tripsRouter);

app.listen(port, () => console.log(`The app is running on ${port}`));
// Mongoose server connection runs without any issues
// Next create the schema in models/stations.js
