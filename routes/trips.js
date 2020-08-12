const express = require("express");
//  S10: This will help us route in our Trips
const router = express.Router();
//  S11: Import the schema from the models folder
const Trips = require("../models/trips");
